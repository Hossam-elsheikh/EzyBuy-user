import axios from "axios";

// ? create instance 
 let instance = axios.create({
    baseURL:"http://localhost:3333",
});

export default  instance;