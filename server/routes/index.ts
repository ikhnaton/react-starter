import koaRouter from "@koa/router";
import { router as authRouter } from "./auth";

const router = new koaRouter({
	prefix: "/api"
});

/* uncomment to require authorization on specified routes */
//router.use(authRouter.routes());
export default router;
