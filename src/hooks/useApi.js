import { useState } from 'react';
import axios from 'axios';
import get from 'lodash/get';

export const useApi = () =>
{
	const [isLoading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const getData = async ({ url, params }) =>
	{
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
			setMessage(get(err, "response.data.message", get(err, "response.statusText", err.toString())));
			setLoading(false);
			return { result: null };
		}

	};

	const postData = async ({ url, data }) =>
	{
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
			setMessage(get(err, "response.data.message", get(err, "response.statusText", err.toString())));

			return { result: null };
		}

	};

	const clearMessage = () =>
	{
		setMessage("");
	};

	return { getData, postData, message, clearMessage, isLoading };
};
