import axios from "axios"; // way of doing AJAX calls

export const ApiExecute = (url, httpAction, data = null, headerObj = null) => {
	switch (httpAction) {
		case "GETHeader":
			return axios
				.get(url, headerObj)
				.then(response => response.data)
				.catch(err => err);
		case "GET":
			return axios
				.get(url, { withCredentials: true })
				.then(response => response.data)
				.catch(err => err);

		case "POST":
			return axios
				.post(url, data, { withCredentials: true })
				.then(response => response.data)
				.catch(err => err);

		case "PUT":
			return axios
				.put(url, data, { withCredentials: true })
				.then(response => response.data)
				.catch(err => err);

		case "DELETE":
			return axios
				.delete(url, { withCredentials: true })
				.then(response => response.data)
				.catch(err => err);
		default:
			break;
	}
};