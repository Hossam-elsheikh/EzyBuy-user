import { data } from "jquery";
import { FavPrdContext } from "../../context/FavPrdContext";
import { useContext, useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";
import instance from "../../axiosConfig/instance";

// import style from './ListItems.module.css'
export default function ListItems() {
  let { getWishList1 , removeFromWishList1} = useContext(FavPrdContext);
  let [isLoading, setIsLoading] = useState(true);
  let [items, setItems] = useState('');
  async function getfavList() {
    let data = await getWishList1();
    console.log(data);
    setItems(data.wishList);
    setIsLoading(false);
  }
  // console.log(items);

  async function removeFromList(id){
    if (localStorage.getItem('customerToken')) {
      let {data}  = await instance.patch(`/customer/wishList/${id}`,{
        headers: {
          'authorization': localStorage.getItem('customerToken')
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
        getfavList();
      }
    } else {
      location.href = '/login'
    }    
  }
  useEffect(() => {
    getfavList();
  }, [])
  return <>
    {
      isLoading ?
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
        <div className="row">
          {
        items?.map((prd)=>
        <div key={prd.id} className="col-md-3" style={{ cursor: 'pointer' }}>
            <span className=' fw-bold text-primary p-1 rounded-2 bg-body-secondary' style={{ fontSize: "9px" }}>
              Best seller
            </span>
            <div className='text-end '>
            </div>
            <div onClick={() => navigate(`/product/${prd._id}`)}>

              <div className="" style={{height:180}}>
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
                <p className='mt-1' style={{ fontSize: "14px", fontWeight: "400" }}>{prd.title.toString().split(' ').splice(0, 2).join(' ')} </p>
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
            <button className="btn btn-danger w-100" onClick={()=>removeFromList(prd._id)}>remove</button>
          </div>
        )
        }
        </div>
    }
    <Toaster/>
  </>
}
