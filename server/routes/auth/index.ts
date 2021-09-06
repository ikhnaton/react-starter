import koaRouter from "@koa/router";
import vaildateToken from "./validateToken";
import { authentication } from "./authentication";
import { callback } from "./callback";
import { authorization } from "./authorization";

const router = new koaRouter({
	prefix: "/auth"
});

const authCore = async (ctx: any, next: any) =>
{
	const testAuthentication: any = await authentication(ctx, next).catch(err => ({ err }));
	if (testAuthentication)
	{
		if (testAuthentication.stop === true)
		{
			return;
		}
		if (testAuthentication.err)
		{
			ctx.throw(401, testAuthentication.err.message);
		}
	}
	const testAuthorization:any = await authorization(ctx, next).catch(err => ({ err }));
	if (testAuthorization && testAuthorization.err)
	{
		ctx.throw(403, testAuthorization.err.message);
	}

	await next();
};

router.get("/callback", callback);

router.get("/validate", async (ctx: any) =>
{
	const result = await vaildateToken(ctx.cookies.get("access_token"));
	ctx.body = result;
});

export { authCore, router };
