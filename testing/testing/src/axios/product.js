import axios from "axios"

export const showProducts = async () => {
    return await axios.get('http://localhost:8080/products')
    

}