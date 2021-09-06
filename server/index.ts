import koa from "koa";
import koaServe from "koa-static";
import router from "./routes";
import http from "http";
import https from "https";
import fs from "fs";
import axios from "axios";
import { authCore } from './routes/auth/index';

// const rx = new RegExp(".*1/(.*?)/(.*?)[?/].*");

const app = new koa();

/* uncomment below to enable Oauth */
//app.use(authCore);
app.use(async (ctx: any, next: any) =>
{
	const axiosInstance = axios.create();

	ctx.axios = axiosInstance;

	await next();

	if (ctx && ctx.body && ctx.body.err)
	{
		console.log(ctx.body.err);
		ctx.app.emit('error', ctx.body.err, ctx);
	}
});

app.use(router.routes());
app.use(koaServe("./dist"));
app.on('error', (err, ctx) =>
{
	console.log(err);
	ctx.status = err.status || 500;
	ctx.body = err.message;
});

console.log(router.stack.map(i => i.path));

// start web server
const init = async () =>
{

	/* for ssl use */
	// const options = {
	// 	key: fs.readFileSync('./dist/certs/localhost.key'),
	// 	cert: fs.readFileSync('./dist/certs/localhost.crt')
	// };

	const server = http.createServer(app.callback()).listen(process.env.PORT || 3000);

	/* for ssl */
	// const server2 = https.createServer(options, app.callback()).listen(3000);
	server.timeout = 25 * 60 * 1000;
	// server2.timeout = 25 * 60 * 1000;
	console.log("Server Started");
};

init();
