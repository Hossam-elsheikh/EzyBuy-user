// import { createContext, useState } from 'react'
// import instance from '../axiosConfig/instance';
// import axios from 'axios';


// export let FavPrdContext = createContext();
// let cusomerToken = localStorage.getItem('customerToken')
// let headers = {
//     authorization: cusomerToken
// }
// // async function addtoFavorite(id) {
// //     return await axios.post(
// //         "http://localhost:3333/product/favorites", { id }, { headers: headers }
// //     )
// //         .then((resp) => resp)
// //         .catch((err) => console.log(err))
// // }
// // async function getFav() {

// //     return await instance.get(
// //         "/product/getFavorite", { headers: headers }
// //     )
// //         .then((resp) => resp)
// //         .catch((err) => console.log(err))
// // }

// export default function FavPrdContextProvider(props) {

//     return <FavPrdContext.Provider value={{ addtoFavorite}}>
//         {props.children}
//     </FavPrdContext.Provider>
// } 