import { useContext, useEffect, useState } from 'react'
import instance from '../axiosConfig/instance'
import { useQuery } from 'react-query';
import { ColorRing } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
// import { FavPrdContext } from '../context/FavPrdContext';
import toast, { Toaster } from 'react-hot-toast';
import axios, { all } from 'axios';
import { LoginContext } from '../context/LoginContext';
import { useDispatch, useSelector } from 'react-redux';
import { productsAction } from '../store/slices/productsSlice';
import jquery from 'jquery';

const BeautyPage = () => {
  const dispatch = useDispatch()
  const { customerToken } = useContext(LoginContext)
  let navigate = useNavigate();
  const AllProducts = useSelector((data) => data.products.products)
  const isLoading = useSelector((state) => state.products.isLoading);
  const [products, setProducts] = useState([]);
  const [favItems, setFavItems] = useState([]);
  function getBeauty() {
    dispatch(productsAction('Beauty'));
  }
  useEffect(() => {
    getBeauty();
    getWishList();
  }, [])
  let arr = favItems;
  let initSelect;

  useEffect(() => {
    if (AllProducts) {
      setProducts(AllProducts);
    }
  }, [isLoading,initSelect ])

  async function addtoFavorite1(id) {
    
    if (localStorage.getItem('customerToken')) {

      let { data } = await instance.post(`http://localhost:3333/customer/wishList/${id}`, {
        headers: {
          'authorization': customerToken
        }
      })
      getWishList();
      console.log(data);
    } else {
      navigate('/login');

    }
  }

  async function getWishList() {
    if (localStorage.getItem('customerToken')) {
      let { data } = await instance.get(`/customer/wishList`).catch(err=>console.log(err.message))
      console.log(data);
      if (data.message == 'WishList successfully retrieved') {
        setFavItems(data?.wishList);
      }
    } else {
      navigate('/login');
    }
  }



console.log(favItems);
//    favItems.map((item) => ({
//     ...item,
//     isFavorite: false       
// }));
let data;
      products?.map(prods => {
    data =  arr?.map(prd => {
      if (prd.id == prods.id) {
        initSelect = favItems.map((item) => ({
          ...item,
          isFavorite: true   
              
        }));
      }
    })
  })
  console.log(data);
  console.log(products);
  console.log(arr);
  console.log(initSelect);


  products?.map(prods=>{
    initSelect?.map(prd=>{
      if(prd.id == prods.id){
      prods.isFavorite=true;    
      }
    })
  })
  return <>

    <div className='container-fluid'>
      <h5>
        Beauty & Grooming deals
        <span className='text-black-50 '>
          (1000+)
        </span>
      </h5>

      <p className='mt-3'>
        Price when purchased online
        <span>
          <button className='border-0 '>
            <i class=" ms-1 fas fa-info-circle " aria-hidden="true"></i>
          </button>
        </span>
      </p>

      {isLoading ?
        <div className=' w-100 py-5 fs-1 d-flex justify-content-center align-items-center' style={{}}>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div> :
        <div className="row g-5 mt-3">
          {products?.map((prd) => <div key={prd.id} className="col-md-3" style={{ cursor: 'pointer' }}>
            <span className=' fw-bold text-primary p-1 rounded-2 bg-body-secondary' style={{ fontSize: "12px" }}>
              Best seller
            </span>
            <div className='text-end '>
            {/* <i class="fa-regular fa-heart fs-4" aria-hidden="true" onClick={() => addtoFavorite1(prd._id)}></i> */}

              {initSelect?.map((prod)=>{
                if(prod?._id == prd?._id){
                  return <i key={prod.id} class="fas fa-heart fs-4 text-danger" aria-hidden="true" onClick={() => removeFromWishList(prd._id)}></i>
                }else{
                   return <i key={prod.id} class="fa-regular fa-heart fs-4  " aria-hidden="true" onClick={() => addtoFavorite1(prd._id)}></i>
                }
              })
              }

            </div>
            <div onClick={() => navigate(`/product/${prd._id}`)}>

              <div>
                <img
                  src={prd.images[0]}
                  alt="Perfume" className='img-fluid' />
              </div>
              <button className='btn btn-primary rounded-5 fw-bold mt-3'>+ Add</button>
              <div className='mt-1'>
                <span className='text-success  fs-5' style={{ fontWeight: "700" }}>Now</span>
                <span className='text-success fw-bold ms-1 me-1 position-relative' style={{ top: "-8px" }}>$</span>
                <span className='text-success  fs-4' style={{ fontWeight: "700" }}>{prd.price.toString().split('.').splice(0, 1)}</span>
                <span className='text-success fw-bolder position-relative' style={{ top: "-8px" }}>{prd.price.toString().split('.').splice(1)}</span>
                <span className='ms-2 fs-5 text-body-secondary text-decoration-line-through '>${Math.round((prd.discountPercentage) * prd.price)}</span>
              </div>
              <div className='mt-2'>
                <span className='bg-body-secondary text-success me-1 p-1 rounded-3 ' style={{ fontWeight: "600" }}> You save</span>
                <span className='text-success' style={{ fontWeight: "700" }}>{(Math.round(prd.discountPercentage * prd.price) - (prd.price))}</span>
                <p className='mt-1' style={{ fontSize: "14px", fontWeight: "400" }}>{prd.title} </p>
              </div>
              <div className='mt-2'>

                <i class="fa fa-star  " style={{ fontSize: "11px" }} aria-hidden="true"></i>
                <i class="fa fa-star  " style={{ fontSize: "11px" }} aria-hidden="true"></i>
                <i class="fa fa-star  " style={{ fontSize: "11px" }} aria-hidden="true"></i>
                <i class="fa fa-star  " style={{ fontSize: "11px" }} aria-hidden="true"></i>
                <i class="fa fa-star-half-alt  " style={{ fontSize: "11px" }} aria-hidden="true"></i>

                <span className='text-body-secondary' style={{ fontSize: "11px" }}> {prd.rating}</span>
                <p className='mt-2' style={{ fontSize: "11px" }}>Free shipping, arrives
                  <strong> in +3 day</strong>
                </p>
              </div>
            </div>

          </div>
          )}
        </div>
      }
    </div>

    <Toaster />
  </>
}

export default BeautyPage