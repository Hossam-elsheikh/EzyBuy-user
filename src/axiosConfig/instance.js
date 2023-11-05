import axios from "axios";

// ? create instance 
 const instance = axios.create({
    baseURL:"http://localhost:3333"
});

export default  instance;