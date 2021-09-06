import { useState } from 'react';
import axios from 'axios';
import get from 'lodash/get';

export type ApiConfig = {
	url: string,
	params?: object,
	data?: object
}

export const useApi: Function = () =>
{
	const [isLoading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const getData = async (inputs: ApiConfig) =>
	{
		const { url, params } = inputs;
		setLoading(true);
		try
		{
			const result = await axios({
				method: "GET",
				url: `/api/${url}`,
				params
			});
			setLoading(false);
			return 	result.data;
		}
		catch (err)
		{
			setMessage(get(err, "response.data.message", get(err, "response.statusText", (err as any).toString())));
			setLoading(false);
			return { result: null };
		}

	};

	const postData = async (inputs: ApiConfig) =>
	{
		const { url, data } = inputs;
		try
		{
			const result = await axios({
				method: "POST",
				url: `/api/${url}`,
				data
			});
			return 	result.data;
		}
		catch (err)
		{
			setMessage(get(err, "response.data.message", get(err, "response.statusText", (err as any).toString())));

			return { result: null };
		}

	};

	const clearMessage = () =>
	{
		setMessage("");
	};

	return { getData, postData, message, clearMessage, isLoading };
};
