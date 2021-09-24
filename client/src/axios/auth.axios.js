import axios from axios

export const createUser = (user)=>{
    axios.post(`${process.env.REACT_API}register`,{user})
}