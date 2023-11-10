import axios from "axios";
let headers={
    authorization: localStorage.getItem('customerToken')
}
// ? create instance 
 let instance = axios.create({
    baseURL:"http://localhost:3333",
    headers
});

export default  instance;