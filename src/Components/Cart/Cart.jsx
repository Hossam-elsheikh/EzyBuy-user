import { useState } from "react";

import style from './Cart.module.css'
import { useEffect } from "react";
export default function Cart() {
  const [isDropdownOpen, setisDropdownOpen] = useState('none');
  const [changeIcon, setChangeIcon] = useState('down')
  let [counter , setCounter] = useState(0);
  const toggleDropdown = () => {
    setisDropdownOpen(isDropdownOpen === 'none' ? 'inline' : 'none');
    setChangeIcon(changeIcon === 'down' ? 'up' : 'down');
  }

  function increaseCounter(){
    setCounter(counter+1);
  }

  function decreaseCounter(){
    setCounter(counter-1);
  }


  return <>
    <h4>Cart
      <span className="ms-1 text-body-secondary ">
        (1 item)
      </span>
    </h4>
    <section>

      <div className="row">
        <div className="col-md-8">

          <div className='mt-4'>
            <div>
              <span style={{ fontSize: "22px" }} className='d-flex '>
                <p className='mt-2'>
                  <span className="me-2">
                    <img src="https://i5.walmartimages.com/dfwrs/76316474-2775/k2-_3691ba8c-cbca-4439-9112-adb25c1b1803.v1.svg"  alt="icon image" />
                  </span>
                  Pickup and delivery option</p>
                <i className={`fas fa-chevron-${changeIcon} mt-3 ms-3 `}
                  onClick={toggleDropdown}
                  aria-expanded={isDropdownOpen}></i>
              </span>
              <ul className={` ${style.c} border border-white`} style={{ display: `${isDropdownOpen}` }}>
                <li className=''>
                  <div className="row">
                    <div className="col-md-4 ">
                      <button  
                      className=" w-100 btn border border-2 border-black py-3 " type="button" >
                          <div >
                            <img alt="intent image for Shipping" 
                            src="https://i5.walmartimages.com/dfwrs/76316474-f13c/k2-_d4e8ebb4-9d70-46b4-8f2b-ecc4ac774e07.v1.png"
                             width="40" height="40" />
                          </div>
                          <div className="fw-bold fs-6" >Shipping</div>
                          <div className=" text-body-secondary">Available</div>
                      </button>
                    </div>

                    <div className="col-md-4">
                      <button disabled="true" 
                      className="w-100 btn border border-1 border-black  py-3  " type="button">
                          <div  >
                            <img alt="intent image for Pickup"
                             src="https://i5.walmartimages.com/dfw/4ff9c6c9-d610/k2-_d157e508-3c5c-4c97-b344-51406648661e.v1.svg"
                              width="40" height="40"  />
                          </div>
                          <div >Pickup</div>
                          <div >Not available</div>
                      </button>
                    </div>

                    <div className="col-md-4">
                      <button disabled="true" 
                      className="w-100 btn border border-1 border-black  py-3" type="button">
                          <div >
                            <img alt="intent image for Delivery" 
                            src="https://i5.walmartimages.com/dfw/4ff9c6c9-db63/k2-_08c72d67-7046-4b24-919e-7b5c945ba85d.v1.svg"
                             width="40" height="40"  />
                          </div>
                          <div className="">Delivery</div>
                          <div >Not available</div>
                      </button>
                    </div>
                  </div>
                </li>

              </ul>

            </div>

        

          </div>
         
        <div id="cart_product" className="shadow  border border-1 rounded-4">
        <div className="header bg-info-subtle">
        <ul className={` ${style.c} border border-white`} >
               
               <h4>
               <span className=" me-3">
               <img src="https://i5.walmartimages.com/dfw/63fd9f59-1b5e/5452ae02-a31f-4ef1-9a45-62ac0b06c13b/v1/mci-shipping.svg" width={60} alt="icon image" />
              </span>
               Free shipping, arrivesTue, Oct 31
               </h4>
               <a href="#" className="ms-5 ps-4 text-black ">95829</a>
             </ul>
        </div>

        <p className="mt-5">
        Sold and shipped by <a href="#" className="text-black">BREED</a>
        </p>

        <div className="prd mt-3">
        <span className='  text-primary border border-primary  p-1 px-2 rounded-1 bg-body-secondary' style={{fontSize:"11px"}}>
          Best seller
        </span>

        <div className="row mt-3 g-0">
          <div className="col-sm-2  text-center">
            <img className="img-fluid "
            src="https://i5.walmartimages.com/seo/Restored-Apple-iPhone-11-Carrier-Unlocked-64-GB-Black-Refurbished_c43556d4-0965-4ebe-a28b-b66102d36572.d012f13cc513f5dfc7eb66e845cd75a2.jpeg?odnHeight=96&odnWidth=96&odnBg=FFFFFF" 
            alt="" />
          </div>
          <div className="col-sm-7">
            <p className=" " style={{fontSize:18}}>
              Restored Apple iPhone 11 -Carrier Unlocked - 64 GB Black (Refurbished) 
            </p>
            <p className="text-secondary">Hard Driv Capacity: 64</p>
            <p className="text-secondary">Actual Color: Black </p>
            <p style={{fontSize:14}}>
              <span>
                <img src="https://i5.walmartimages.com/dfw/63fd9f59-e685/7e6c8c3a-3ba7-437a-a066-de3ad3a6a15a/v1/roundReturn.svg"
                 alt="image icon"
                 className="me-1"
                 />
                 
              </span>
              Free 90-day returns
              </p> 

              <p className="" style={{fontSize:14}}>
              <span>
                <i class="fa fa-recycle me-1" aria-hidden="true"></i>
              </span>
              Restored
              </p>

              <div className=" mt-3">
            <p className=" text-body-secondary fw-bold" style={{fontSize:14}}>
            <span>
            <img 
            className=" text-black"
            width={25}  
            src="https://img.icons8.com/carbon-copy/100/walmart-app.png" alt="walmart-app"/>
            </span>
            Add EzyBuy Protection Plan by Allstate
            </p>
            <a className="text-black ms-4" style={{fontSize:14}} href="#">
              View details
            </a>
            <p style={{fontSize:10}} className="ms-4 text-body-secondary">(Only one option can be selected at atime.)</p>
            <div>
            <label class="text-bg-body-secondary" for="ld_checkbox_14">
                          <input class="me-2 mb-2 =" id="ld_checkbox_14" name="CAREPLAN" type="checkbox" value="2-Year plan - $55.00"/>
                          2-Year plan - $55.00 
                        </label>
                        <br />
                        <label class="text-bg-body-secondary" for="ld_checkbox_15">
                          <input class="me-2" id="ld_checkbox_15" name="CAREPLAN" type="checkbox" value="3-Year plan - $79.00"/>
                          3-Year plan - $79.00
                          </label>
            </div>

          <div className="mt-5 text-end">
            <button className={`border-0 text-decoration-underline me-5 ${style.btun}`}>
              Remove
            </button>
            <button className={`border-0 text-decoration-underline  ${style.btun}`}>
              Save for later
            </button>
          </div> 
          </div>
          </div>

          <div className="col-sm-3 bg-black  ">
            <h5 className="bg-info text-end">$248.77</h5>

            <div className=" bg-danger d-flex align-items-end  " style={{height:"90%"}}>
            
            <div  className="d-flex bg-info justify-content-between border border-1 border-black rounded-5 p-1 w-100" style={{width: "120px"}}>

                <button type="button" className="btn btn-light rounded-5 " onClick={()=>decreaseCounter()} >
                  <i className=" fa fa-minus"></i>
                  </button>
                  <span className="d-flex align-items-center  "> {counter}  </span>
                  <button type="button" className="btn btn-light rounded-5  " onClick={()=>increaseCounter()} >
                    <i className="fa fa-plus" ></i>
                    </button>
            </div>
            </div>
          </div>

        </div>

        </div>
        </div>



        </div>
      </div>

    </section>
  </>
}
