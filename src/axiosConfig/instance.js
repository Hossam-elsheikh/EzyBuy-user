import axios from "axios";
let headers={
  'authorization': localStorage.getItem('customerToken')
}
// ? create instance 
 let instance = axios.create({
    baseURL:"http://localhost:3333",
<<<<<<< HEAD
    headers:headers
=======

>>>>>>> b3d280f5c8e1000f1037c33d73b7b47427b71cef
});

export default  instance;