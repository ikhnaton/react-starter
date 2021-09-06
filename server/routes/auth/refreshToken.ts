import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import keys from "../../keys.json";

const refreshToken = async (token: string) =>
{
	// get new tokens
	const options: AxiosRequestConfig = {
		url: keys.oauth.token,
		method: "post",
		data: qs.stringify({
			"refresh_token": token,
			"grant_type": "refresh_token",
			"client_id": keys.oauth.clientId,
			"client_secret": keys.oauth.clientSecret
		}),
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		}
	};
	const result: any = await axios(options).catch(err => ({ err }));
	return result.err ? { err: result.err } : result.data;
};

export default refreshToken;
