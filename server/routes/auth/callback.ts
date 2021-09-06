import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import keys from "../../keys.json";
import { cookieOptions } from "./authentication";

export const callback = async (ctx: any, next: any) =>
{
	const { code, grant_id: grantId } = ctx.query;
	// console.log({ code, grant_id });
	ctx.body = { code, grantId };

	const options: AxiosRequestConfig = {
		url: keys.oauth.token,
		method: "post",
		data: qs.stringify({
			code: code,
			"grant_type": "authorization_code",
			"client_id": keys.oauth.clientId,
			"client_secret": keys.oauth.clientSecret,
			"redirect_uri": keys.oauth.redirectUri
		}),
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	};

	const target = ctx.cookies.get("targetRoute");
	const result: any = await axios(options);
	ctx.cookies.set("refresh_token", result.data.refresh_token, cookieOptions);
	ctx.cookies.set("access_token", result.data.access_token, cookieOptions);
	ctx.cookies.set("targetRoute", null, cookieOptions);
	ctx.redirect(target);
};
