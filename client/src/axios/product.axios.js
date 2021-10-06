import axios from 'axios';

export const showProduct = async (chefId) => 
	await axios.get(`http://192.168.137.253:8080/chef/${chefId}/chefproducts`)