import axios from 'axios';

export const createUser = async (email, phone, username, password) =>
	await axios.post(`http://192.168.0.112:8080/register`, {
		email,
		phone,
		username,
		password
	});
