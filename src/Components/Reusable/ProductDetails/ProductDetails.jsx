import { Link } from "react-router-dom";

import style from './ProductDetails.module.css'
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";
export default function ProductDetails({prd}) {
  let [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    if(prd.price){
        setIsLoading(false);
    }else{
        setIsLoading(true);
    }
}, [prd]);
  return <>
  {isLoading?
  <div className=' w-100 py-5 fs-1 d-flex justify-content-center align-items-center' >
  <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
</div>:
<div className={`border border-1 p-3 ${style.ps} `}>
      <Link to={'#'}>{prd.brand}</Link>

      <h5>{prd.title}</h5>

      <li className=" d-flex list-unstyled mt-3">
        <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i>
        <i className="fa fa-star-half" aria-hidden="true"> ({prd.rating}) 
        <a href="" className="ms-2">1406 revewis</a>
        </i> 
      </li>
      <div className="mt-3">
        <h2 className="text-success fw-bold">Now  {(Math.round(prd.discountPercentage * prd.price) - (prd.price))}<a className={`text-decoration-line-through h5 ms-2 text-dark-emphasis`}>{Math.round((prd.discountPercentage )* prd.price)}</a>    </h2>
        <h5 className="text-success fw-bold">You save {prd.price} </h5>
      </div>

      <div className="mt-5">
        <button className="btn btn-light border border-1 border-black rounded-4 me-3 " style={{ width: "45%" }}>Buy Now</button>
        <button className="btn btn-primary border border-1 border-black rounded-4 " style={{ width: "45%" }}>Add To Cart</button>
      </div>

      <span className="d-flex fw-bolder h5 mt-3">Actual Color :
        <div className=" bg-black  h1  rounded-circle ms-3 me-2"
          style={{
            backgroundImage: "url('https://i5.walmartimages.com/asr/f6436cc4-e137-449c-8873-00e41924287d_1.6d05503a2d18b114b37183557ed9ccf5.png?odnHeight=50&odnWidth=50&odnBg=FFFFFF')",
            backgroundRepeat: "no-repeat", height: "30px", width: "30px"
          }}>
        </div>
        <h4> Silver</h4>
      </span>


      <div className="mt-3    ">
        <h5 className='mb-3 d-block'>How do you want your item?</h5>
          <div className="d-flex ">

        <button aria-pressed="false" className={` p-1  me-3 border border-3 border-black ${style.container} ` } type="button" style={{ width: "calc(30%)"  }}>
          <label for="fulfillment-Shipping" data-testid="shipping-tile">
            <input type="radio"  aria-checked="false"  className={`${style.input}`} id="fulfillment-Shipping" name="fulfillment-option" />
            <div >
              <img alt="intent image for Shipping" src="https://i5.walmartimages.com/dfwrs/76316474-f13c/k2-_d4e8ebb4-9d70-46b4-8f2b-ecc4ac774e07.v1.png" width="32" height="32" aria-hidden="true" />
            </div>
            <div >Shipping</div>
            <div className="">Arrives Oct 26</div>
          <div className="" style={{fontSize:"22px ", fontWeight:"500"}} >Free</div>
          </label>
        </button>

        <button aria-pressed="false" className={`p-1  me-3 border border-1 border-black ${style.container} `}   type="button" style={{ width: "calc(30%)"  }}>
          <label for="fulfillment-Pickup" data-testid="pickup-tile">
            <input type="radio" aria-checked="false" id="fulfillment-Pickup" name="fulfillment-option" className={`${style.input}`} />
            <div className=""  >
              <img alt="intent image for Pickup" src="https://i5.walmartimages.com/dfwrs/76316474-8720/k2-_d747b89f-5900-404d-a101-1a3452480882.v1.png" width="32" height="32" aria-hidden="true" />
            </div>
            <div >Pickup</div>
            <div >Not available</div></label>
        </button>

        <button aria-pressed="false" className={` p-1 border border-1 border-black ${style.container} `} type="button" style={{ width: "calc(30%)", height: "auto", boxShadow: "none", backgroundColor: "#FFFFFF" }}>
          <label for="fulfillment-Delivery" data-testid="delivery-tile">
            <input type="radio" aria-checked="false" id="fulfillment-Delivery" name="fulfillment-option" className={`${style.input}`} />
            <div >
              <img alt="intent image for Delivery" src="https://i5.walmartimages.com/dfwrs/76316474-39c2/k2-_8deea800-0d44-4984-b1ce-5a3f12b192b7.v1.png" width="32" height="32" aria-hidden="true" />
            </div>
            <div className="">Delivery</div>
            <div >Not available</div>
          </label>
        </button>
          </div>

      </div>


      <div>

        <div className="mt-4" >
          <div className="mb-3 mt-0 ">
            <div >
            <div>
              <div className=" d-flex ">
                <img src={"https://i5.walmartimages.com/dfw/63fd9f59-8860/c89a8efb-e301-40ba-ae70-35eb2dd0d7c1/v1/marketplace.svg"} width="20" height="20" alt="" aria-hidden="true" className="me-2" />
                <span className="">
                  <div className="">Sold and shipped by <span >Certified 2 Day Express</span>
                  </div>
                </span>
              </div>
            </div>
            <div className="mt-3">
              <span className="d-flex " aria-label="3.4041 stars out of 5, based on 1611 seller reviews" style={{ width: "500px" }}>
                <i className="fa fa-star mt-2"  aria-hidden="true" style={{ fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box" }}></i>
                <i className="fa fa-star mt-2" aria-hidden="true" style={{ fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box" }}></i>
                <i className="fa fa-star mt-2" aria-hidden="true" style={{ fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box" }}></i>
                <i className="fa fa-star-half-alt mt-2" aria-hidden="true" style={{ fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box" }}></i>
                <i className="fa-regular fa-star  mt-2 me-2" aria-hidden="true" style={{ fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box" }}></i>
                1611 seller reviews
              </span>
            </div>
            <div className="mt-2" ><Link to="#">View seller information</Link>
            </div>
          </div>
          </div>
        </div>


        <div className="mt-3">
          <div className="d-flex " >
            <img  src="https://i5.walmartimages.com/dfw/63fd9f59-e685/7e6c8c3a-3ba7-437a-a066-de3ad3a6a15a/v1/roundReturn.svg" width="20" height="20" alt="" className="mt-1 me-2"/>
            <div className="return-label-container">
              <div className="" style={{display:"flex", alignItems: "center"}}>
              <span className="h5">Extended holiday returns</span>
              <button className="border-0 ms-3 text-decoration-underline " type="button" aria-label="Details of Return policy" style={{lineHeight: "inherit"}}>Details
              </button>
              </div>
              <span className="">Free Holiday returns until 
              <strong> Jan 31</strong>
          </span>
          </div>
          </div>
        </div>


      </div>
    </div>
}
    
  </>
}
