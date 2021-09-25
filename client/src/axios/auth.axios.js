import axios from 'axios';

export const createUser = (user) => {
	axios.post(`http://localhost:8080/register`, { user });
};
