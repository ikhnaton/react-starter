import keys from "../../keys.json";
import vaildateToken from "./validateToken";
import refreshTokenFn from './refreshToken';

export const cookieOptions = {
	maxAge: 24 * 60 * 60 * 1000,
	secure: true,
	httpOnly: true,
	sameSite: false,
	// signed: true,
	overwrite: true
};

const unprotectedRoutes = [
	"/api/auth/callback",
	"/api/auth/validate"
];

const unprotectedRoutesRegex = unprotectedRoutes.map(route => new RegExp(route));
export const authentication = async (ctx: any, next: any) =>
{
	const oauth = keys.oauth;

	const accessToken = ctx.cookies.get("access_token");
	const refreshToken = ctx.cookies.get("refresh_token");
	const target = ctx.originalUrl;
	const redirectUrl = `${oauth.authorize}?scope=${oauth.scope}&response_type=code&client_id=${oauth.clientId}&redirect_uri=${oauth.redirectUri}`;

	const unprotected = unprotectedRoutesRegex.reduce((acc: boolean, route: RegExp) =>
		(route.exec(target) === null ? acc : true), false);

	if ((accessToken == null) && (!unprotected))
	{
		ctx.cookies.set("targetRoute", target, { expires: Date.now() + (10 * 60 * 1000), ...cookieOptions });
		ctx.redirect(redirectUrl);
		return { stop: true };
	}
	if (unprotected)
	{
		await next();
		return { stop: true };
	}

	let user = await vaildateToken(accessToken);
	if (user.active === false)
	{
		if (refreshToken != null)
		{
			user = await vaildateToken(refreshToken);
			if (user.active === true)
			{
				ctx.state.user = user;
				const newTokens = await refreshTokenFn(refreshToken);

				ctx.cookies.set("refresh_token", newTokens.refresh_token, { expires: user.exp, ...cookieOptions });
				ctx.cookies.set("access_token", newTokens.access_token, cookieOptions);
			}
			else
			{
				ctx.redirect(redirectUrl);
				return { stop: true };
			}
		}
		else
		{
			ctx.redirect(redirectUrl);
			return { stop: true };
		}
	}
	else
	{
		ctx.state.user = user;
	}
	return { stop: false };
};
