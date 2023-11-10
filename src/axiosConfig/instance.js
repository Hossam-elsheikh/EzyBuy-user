import axios from "axios";

// ? create instance 
 const instance = axios.create({
    baseURL:"http://localhost:3333",
    headers: {
        'authorization': `${localStorage.getItem("customerToken")}`
      }
});

export default  instance;