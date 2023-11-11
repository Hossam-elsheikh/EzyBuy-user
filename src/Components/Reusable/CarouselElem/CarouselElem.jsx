import classes from "./CarouselElem.module.css";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";
import {  useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { FavPrdContext } from "../../../context/FavPrdContext";
import { ColorRing } from "react-loader-spinner";
export default function CarouselElem(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  function addToCartHandler(id) {
    dispatch(
      addToCart({
        id,
        quantity: 1,
        price: Math.round((props.price + Number.EPSILON) * 100)/100,
        img: props.src,
        title: props.title,
      })
    );
  }




  let {addtoFavorite , getWishList1 , getBeauty1 , removeFromWishList1 ,favItems }=useContext(FavPrdContext);
  const [products, setProducts] = useState([]);
  let {isLoading , setIsLoading}=useState(true);
  
  // function getBeauty() {
  //   getBeauty1();
  // }   

  useEffect(()=>{
  getWishList();
},[props])
  // useEffect(() => {
  //   if (AllProducts) { 
  //     setProducts(AllProducts);
  //   }
  //   if(isLoading==false){
  //     getWishList();
  //     }
  // }, [isLoading ])

  async function addtoFavorite1(id) {
    addtoFavorite(id);
  }

  async function getWishList() {
    getWishList1();
    setIsLoading(false)
  }


  let x =[];
  let y =[];
    y.push( JSON.parse(JSON.stringify(props)))
    y?.map(prods=>{
      favItems?.map(prd=>{
        if(prd._id == prods.id){
          x.push( JSON.parse(JSON.stringify(prods)))
        }
      })
    })
    
console.log(y);
  y?.map(prod=>{
    x?.map(prd=>{
      if(prd.id == prod.id ){
        prod.isFavorite =true;
      }
    })
  })
  async function removeFromWishList(id) {
    removeFromWishList1(id);
  }
  

  return (
    <>{
      isLoading?
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
    </div>
    :
    <div className={classes.item}  >
    <img src={props.src} onClick={()=>navigate(`/product/${props.id}`)} />
    <h6>
      ${props.price} <span>each</span>
    </h6>
    <div className="d-flex gap-1">
      <Rating
        readonly={true}
        initialRating={props.rating}
        fullSymbol={<FontAwesomeIcon icon={faStar} color="goldenRod" />}
        emptySymbol={<FontAwesomeIcon icon={faStar} />}
      />
      <p style={{ color: "gray", fontSize: ".7rem" }}>266</p>
    </div>
    <p className={classes.title}>{props.title}</p>
    <div className={classes.tags}>
      <p>Pickup</p>
      <p>Delivery</p>
    </div>
    <button onClick={() => addToCartHandler(props.id)}>Add +</button>
    {
    favItems?.map(prd=>{
      console.log();
      if(props.id == prd._id){
         return <i className="fas fa-heart text-danger" onClick={() => removeFromWishList(props.id)}></i>

      }else{
        return  <i className="fa-regular fa-heart "  onClick={() => addtoFavorite1(props.id)}></i>
      }
    })
    }
  </div>
    }
     
    </>
  );
}
