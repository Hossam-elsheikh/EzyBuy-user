import { createContext, useContext, useState } from 'react'
import instance from '../axiosConfig/instance';
import axios from 'axios';
import { LoginContext } from './LoginContext';
import { useDispatch } from 'react-redux';
import { productsAction } from '../store/slices/productsSlice';
import toast from 'react-hot-toast';


export let FavPrdContext = createContext();

export default function FavPrdContextProvider(props) {
  const [favItems, setFavItems] = useState([]);
  const dispatch = useDispatch()
    const { customerToken } = useContext(LoginContext)
    async function getBeauty1(cat){
    dispatch(productsAction(`${cat}`));

    }
    async function getWishList1(){
    if (localStorage.getItem('customerToken')) {
        let {data}  = await instance.get(`/customer/wishList/`,{
          headers: {
            'authorization': customerToken
          }}).catch(err=>{
          console.log(err.response.data.data)
          if(err.response.data.data = 'jwt expired'){
            // toast.error("Your Sign in session Ended Please Sign in again..!")
            // navigate('/login');
            // localStorage.removeItem('customerToken');
          }
        })
        if (data.message == 'WishList successfully retrieved') {
          setFavItems(data?.wishList);
        }
      } else {
        navigate('/login');
      }

    }


    async function addtoFavorite (id){
        try{
            if (localStorage.getItem('customerToken')) {
      
                await instance.post(`http://localhost:3333/customer/wishList/${id}`, {
                headers: {
                  'authorization': customerToken
                }
              }).then(res=>{
                console.log('hii');
                getWishList1();
                toast.success('Successfully Added')
              }).catch(err=>{
                console.log(err);
              })
            } else {
              navigate('/login');
            }
          }catch(err){
            console.log(err);
          }
    }

    
  async function removeFromWishList1(id) {
    if (localStorage.getItem('customerToken')) {
      let {data}  = await instance.patch(`/customer/wishList/${id}`,{
        headers: {
          'authorization': customerToken
        }}).catch(err=>{
        console.log(err.response.data.data)
        if(err.response.data.data = 'jwt expired'){
          // toast.error("Your Sign in session Ended Please Sign in again..!")
          // navigate('/login');
          // localStorage.removeItem('customerToken');
        }
      })
      if (data.message == 'product successfully deleted') {
        toast.success('Successfully Removed');
        getWishList1();
      }
    } else {
      navigate('/login');
    }
  }
    return <FavPrdContext.Provider value={{ addtoFavorite , getWishList1 , getBeauty1, removeFromWishList1 , favItems , setFavItems}}>
        {props.children}
    </FavPrdContext.Provider>
} 