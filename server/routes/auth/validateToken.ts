import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import keys from "../../keys.json";

const vaildateToken = async (accessToken: string) =>
{
	const options: AxiosRequestConfig = {
		url: keys.oauth.introspect,
		method: "post",
		data: qs.stringify({
			token: accessToken,
			"client_id": keys.oauth.clientId,
			"client_secret": keys.oauth.clientSecret
		}),
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	};

	const result: any = await axios(options).catch(err => ({ err }));
	return result.err ? result.err : result.data;
};

export default vaildateToken;
