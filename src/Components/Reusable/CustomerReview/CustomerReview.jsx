import { Link } from "react-router-dom";

import style from './CustomerReview.module.css'
export default function CustomerReview() {
  return <>
    <section>
      <main style={{ contentVisibility: "auto", containIntrinsicSize: "1000px" }}>
        <section className="mt-5"><div id="item-review-section" data-testid="item-review-section">
          <header className="d-flex justify-content-between  pb-4 " role="heading" aria-level="2">
            <h2 className="   ">Customer reviews &amp; ratings</h2>
          </header>
          <div className="d-flex flex-row"><div className="w-50"><div>
            <span className=" fw-bolder" style={{ fontSize: "72px" }}>4.7</span>
            <span className="fw-bolder">out of </span>
            <span className=" fw-bolder" style={{ fontSize: "72px" }}>5</span>
            <span className="">stars</span><div className="pt-1">
              <Link className="bg-white pointer" to="#">
                <span className=" text-black">
                  <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                  <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                  <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                  <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                  <i className="fa fa-star-half-alt" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                </span><span className="ms-1 text-dark">(1406 reviews)</span>
              </Link>
            </div>
          </div>
          </div>
            <div className="w-50">
              <ol reversed="" className="list ps-0 w-100">
              <li>
                <button type="button" className="d-flex align-items-center justify-content-between border-0  mb-1 w-100    pointer" aria-label="1220 5 stars reviews, 86.8% of all reviews are rated with 5 stars, Filters the reviews below" aria-pressed="false">
                  <span className="text-decoration-underline">5 stars</span><span className="flex-grow-1">
                    <span aria-valuemax="100" aria-valuemin="0" aria-valuenow="86.7709815078236" className="" role="progressbar" aria-labelledby="5-86.7709815078236">
                  <span className="progress bg-dark-subtle ms-2" style={{height:8,width:"95%"}}>
                    <span className="bg-primary" style={{width: "86.771%",height:8}}></span>
                  </span>
                  </span>
                  </span>
                  <span className="">1220</span>
                </button>
              </li>
              <li><button type="button" className="d-flex align-items-center justify-content-between border-0  mb-1 w-100 bg-white   pointer" aria-label="99 4 stars reviews, 7% of all reviews are rated with 4 stars, Filters the reviews below" aria-pressed="false">
                <span className="  text-decoration-underline">4 stars</span>
                <span className="flex-grow-1">
                  <span aria-valuemax="100" aria-valuemin="0" aria-valuenow="7.0412517780938835" className="" role="progressbar" aria-labelledby="4-7.0412517780938835">
                    <span className="progress bg-dark-subtle ms-2" style={{height:8,width:"95%"}}><span className="bg-primary" style={{width: "7.04125%"}}>
                  </span>
                  </span>
                  </span>
                </span>
                <span className="">99</span>
              </button></li>
              <li>
                <button type="button" className="d-flex align-items-center justify-content-between border-0  mb-1 w-100 bg-white   pointer" aria-label="24 3 stars reviews, 1.7% of all reviews are rated with 3 stars, Filters the reviews below" aria-pressed="false">
                  <span className="  text-decoration-underline">3 stars</span>
                  <span className="flex-grow-1"><span aria-valuemax="100" aria-valuemin="0" aria-valuenow="1.7069701280227598" className="" role="progressbar" aria-labelledby="3-1.7069701280227598">
                    <span className="progress bg-dark-subtle ms-2"style={{height:8,width:"95%"}}>
                      <span className="bg-primary" style={{width: "1.70697%"}}>
                      </span>
                    </span>
                  </span>
                  </span>
                  <span className="">24</span>
                </button>
              </li>
              <li>
                <button type="button" className="d-flex align-items-center justify-content-between border-0  mb-1 w-100 bg-white   pointer" aria-label="12 2 stars reviews, 0.9% of all reviews are rated with 2 stars, Filters the reviews below" aria-pressed="false">
                  <span className="  text-decoration-underline">2 stars</span>
                  <span className="flex-grow-1">
                    <span aria-valuemax="100" aria-valuemin="0" aria-valuenow="0.8534850640113799" className="" role="progressbar" aria-labelledby="2-0.8534850640113799">
                      <span className="progress bg-dark-subtle ms-2" style={{height:8,width:"95%"}}>
                        <span className="bg-primary" style={{width: "0.853485%"}}></span>
                      </span>
                    </span>
                  </span>
                  <span className="">12</span>
                </button>
              </li>
              <li>
                <button type="button" className="d-flex align-items-center justify-content-between border-0  mb-1 w-100 bg-white   pointer" aria-label="51 1 star reviews, 3.6% of all reviews are rated with 1 star, Filters the reviews below" aria-pressed="false">
                  <span className="  text-decoration-underline">1 star</span>
                  <span className="flex-grow-1">
                    <span aria-valuemax="100" aria-valuemin="0" aria-valuenow="3.627311522048364" className="" role="progressbar" aria-labelledby="1-3.627311522048364">
                      <span className="progress bg-dark-subtle ms-2" style={{height:8,width:"95%"}}>
                        <span className="bg-primary" style={{width: "3.62731%"}}>
                        </span>
                      </span>
                    </span>
                  </span>
                  <span className="">51</span>
                </button>
              </li>
            </ol>
            </div>
          </div>

          <div className="mb-5 p-2  w-50">
            <button className="btn btn-light border border-black border-2  p-2 me-3 rounded-5 align-items-center w-25 "  to="#">See all reviews</button>
            <button className=" btn btn-primary p-2 me-3 rounded-5 align-items-center w-25 ">Write a review</button>
          </div>
          <hr aria-hidden="true" className=" " />
          <div className="mb-4 mt-5">
            <div className="d-flex items-start py-3 mx-4">
              <div className=" " style={{width:"40%"}}>
                <h4 className="mb-1">Most helpful positive review</h4>
                <div className=" mb-2 pb-1" style={{visibility: "hidden", minHeight: "24px"}}>
                </div>
                <div>
                  <div className="">
                    <div className="border border-1 shadow-lg w-75">
                      <div className="d-flex flex-wrap  justify-content-center mb-3">
                        <div className="d-flex flex-grow-1">
                          <div className="d-flex">
                            <span className="">
                              <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height:" 12px", boxSizing: "content-box"}}></i>
                              <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height:" 12px", boxSizing: "content-box"}}></i>
                              <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height:" 12px", boxSizing: "content-box"}}></i>
                              <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height:" 12px", boxSizing: "content-box"}}></i>
                              <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height:" 12px", boxSizing: "content-box"}}></i>
                            </span>
                          </div>
                          <div className="d-flex">
                            <span className=" ms-3 mt-1 text-success fw-bold">Verified Purchase  <i className="fa fa-info-circle text-black"></i>
                            
                            </span>
                            <span className="">
                              <button className="bg-transparent  pointer " type="button" aria-expanded="false" aria-label="Verified Purchase information" aria-controls="">
                                <i className="" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i>
                              </button>
                              <div id=""></div>
                            </span>
                          </div>
                        </div>
                        <div>
                        </div>
                      </div>
                      <div className="">
                        <div className=" mb-1"></div>
                        <p className="mb-3 ps-2"><b></b>To be open box everything look good but little nicks where they had to put charge in</p>
                      </div>
                      <div className="d-flex  justify-content-center">
                        <div className="d-flex flex-wrap">
                        <div className=" mt-2 mb-2">kessa</div>
                        <div className=" ">

                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-center border border-2 border-black rounded-circle fw-bold fs-2 me-5" aria-hidden="true" style={{height:60,width:60}}>VS</div>
              <div className="  ms-5 "style={{width:"40%"}}>
                <h4 className="mb-1">Most helpful negative review</h4>
                <div className=" mb-2 pb-1" style={{visibility: "hidden", minHeight: "24px"}}>
                </div>
                <div>
                  <div className="">
                    <div className="border border-1 shadow-lg w-75">
                      <div className="d-flex flex-wrap  justify-content-center mb-3">
                        <div className="d-flex flex-grow-1">
                          <div className="d-flex">
                            <span className=" ">
                              <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              <i className="fa-regular fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              <i className="fa-regular fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              <i className="fa-regular fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              <i className="fa-regular fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                            </span>
                          </div>
                          <div className="d-flex ">
                            <span className="ms-3 mt-1 text-success fw-bold">Verified Purchase <i className="fa fa-info-circle text-black"></i></span>
                            <span className="">
                              <button className="bg-transparent    pointer " type="button" aria-expanded="false" aria-label="Verified Purchase information" aria-controls="">
                                <i className="" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i>
                              </button>
                              <div id="">
                              </div>
                            </span>
                          </div>
                        </div>
                        <div>
                        </div>
                      </div>
                      <div className="">
                        <div className=" mb-1">
                          <span className="" style={{WebkitLineClamp:1, paddingBottom: "0em", marginBottom: "0em"}}>
                            <h3 className="">Useless After retailers installed a “screen prot”</h3>
                          </span>
                        </div>
                        <p className="mb-3 ps-2"><b></b>The touchscreen does not work at all.  Your seller put one of those plastic pieces over the glass. I guess another touchscreen does not work at all. So this obviously needs to be returned. Those two pictures are as far as you can get into, set up without the touchscreen working.</p>
                      </div>
                      <div className="d-flex  justify-content-center">
                        <div className="d-flex flex-wrap">
                          <div className="  mb-2">Jeff</div>
                          <div className=" ">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4 overflow-auto">
              <h4>Frequent Mentions</h4>
              <div>
                <div className=" d-flex mb-2 flex-nowrap" role="list">
                  <div role="listitem">
                    <button aria-pressed="false" className={`${style.list}`} type="button">
                      <div className="">Price (221)</div>
                      
                    </button>
                  </div>
                  <div role="listitem">
                    <button aria-pressed="false" className={`${style.list}`} type="button">
                      <div className="">Ease Of Installation (44)</div>
                    </button></div>
                  <div role="listitem">
                    <button aria-pressed="false" className={`${style.list}`}type="button">
                      <div className="">Ease Of Use (39)</div>
                    </button>
                  </div>
                  <div role="listitem">
                    <button aria-pressed="false" className={`${style.list}`} type="button">
                      <div className="">Screen (31)</div>
                    </button>
                  </div>
                  <div role="listitem">
                    <button aria-pressed="false" className={`${style.list}`} type="button">
                      <div className="">Value (25)</div>
                    </button></div>
                  <div role="listitem">
                    <button aria-pressed="false" className={`${style.list}`} type="button">
                      <div className="">Size (23)</div>
                    </button>
                  </div>
                </div>
                <div className=" d-flex mb-2 flex-nowrap" role="list">
                  <div role="listitem">
                    <button aria-pressed="false" className={`${style.list}`} type="button">
                      <div className="">Storage (20)</div>
                      
                    </button>
                  </div>
                  <div role="listitem">
                    <button aria-pressed="false"className={`${style.list}`} type="button">
                      <div className="">Kids (18)</div>
                      
                    </button></div>
                  <div role="listitem">
                    <button aria-pressed="false" className={`${style.list}`} type="button">
                      <div className="">Charging (17)</div>
  
                    </button>
                  </div>
                  <div role="listitem">
                    <button aria-pressed="false" className={`${style.list}`} type="button">
                      <div className="">Quality (17)</div>
  
                    </button>
                  </div>
                  <div role="listitem">
                    <button aria-pressed="false"className={`${style.list}`} type="button">
                      <div className="">Battery Life(16)</div>
                      
                    </button>
                  </div>
                  <div role="listitem">
                    <button aria-pressed="false"className={`${style.list}`} type="button">
                      <div className="">Iphone (16)</div>
                      
                    </button>
                  </div>
                  <div role="listitem">
                    <button type="button" className=" pointer  bg-transparent text-decoration-underline border-0 mt-1">See More</button>
                  </div>
                </div>
              </div>
            </div>
            <hr aria-hidden="true" className="" />
          </div>
          <div className=" ">
            <div className="row  bg-info   overflow-visible ">
              
                  <div className="col-sm-6 shadow-lg"><div>
                    <div className="overflow-visible h-100">
                      <div className=" border border-1 border-black p-3  ">
                        <div className="d-flex flex-wrap  justify-content-center mb-3 ">
                          <div className="d-flex flex-grow-1"><div>
                            <span className="">
                              <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              <i className="fa fa-star me-3" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                            </span>
                           
                          </div>
                            <div className=" d-flex ">
                              <span className="text-success mt-1 me-2">Seller Verified Purchase </span>
                              <span className="">
                                <button className="bg-transparent border-0   pointer " type="button" aria-expanded="false" aria-label="Seller Verified Purchase information" aria-controls="">
                                  <i className=" fa fa-info-circle " style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i>
                                </button><div id=""></div>
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="  mt-1">10/4/2019</div>
                          </div>
                        </div>
                        <div className="">
                          <div className=" mb-2">
                            <span className="" style={{WebkitLineClamp:1, paddingBottom: "0em", marginBottom: "0em"}}>
                              <h3 className="">Perfect Size + Pencil High Performance/ Low Price</h3>
                            </span>
                          </div>
                          <span className="mb-3"><b></b>Didn’t want the new iPads because they’re too big—take up too much desk and tote space. Wanted an Apple Pencil, didn’t need the latest model. Would’ve preferred 64 GB of storage, but this model goes from 32 GB (too little for my needs) to 128 (way more than I need). Runs a lot faster than my old 2015 iPad Air 2. Love the Retina display. Love the price in comparison with prices for the latest models. Also like still having a Lightning connector and headphone jack (though I generally use wireless headphones, still the jack has aged my bacon at least once when my wireless headphones needed to be charged). Great product overall,</span>
                        </div>
                        <div className="d-flex  justify-content-center">
                          <div className="d-flex flex-wrap">
                            <div className="  mb-2">JustRight</div>
                            <div className=" "></div>
                          </div>
                        </div>
                        <div className="d-flex  justify-content-center pt-1">
                          <button aria-pressed="false" aria-label="Upvote JustRight review. Total upvote review - 0" className="border-0 bg-transparent">
                            <i className="fa-regular fa-thumbs-up fs-4 " data-testid="thumbsUp" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i>
                            <span className="ms-2 ">0</span>
                          </button>
                          <button aria-pressed="false" aria-label="Downvote JustRight review. Total downvote review - 0" className=" border-0 bg-transparent">
                            <i className="fa-regular fa-thumbs-down fs-4 ms-3" data-testid="thumbsDown" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i>
                            <span className="ms-2 ">0</span>
                          </button>
                        </div>
                        <div className="inline-flex  ">Originally posted on
                          <div className=" " data-qm-mask="true">samsclub.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className=" border border-1 border-black p-3 col-sm-6  shadow-lg "><div>
                    <div className=" overflow-visible h-100">
                      <div className="">
                        <div className="d-flex flex-wrap  justify-content-center mb-3">
                        <div className="d-flex flex-grow-1"><div><span className="">
                          <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}>
                          </i>
                          <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                          <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                          <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                          <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                        </span>
                        </div>
                        </div>
                        <div>
                          <div className="  mt-1">11/6/2019</div>
                        </div>
                      </div>
                        <div className="">
                          <div className=" mb-2">
                            <span className="" style={{WebkitLineClamp:1, paddingBottom: "0em", marginBottom: "0em"}}>
                              <h3 className="">9.7” iPad is the cat's pajamas!</h3>
                            </span>
                          </div>
                          <span className="mb-3"><b></b>I bought this via Walmart's pre-black Friday discount sale and was able to get $150 off the retail price.  I like this 9.7” iPad as it's convenient, thin and beats lugging a laptop around.  Plenty of storage space and no more worrying about anti virus software.</span>
                        </div>
                        <div className="d-flex  justify-content-center">
                          <div className="d-flex flex-wrap">
                            <div className="  mb-2">MichiganMike</div>
                          </div>
                        </div>
                        <div className="d-flex  justify-content-center pt-1">
                          <button aria-pressed="false" aria-label="Upvote MichiganMike review. Total upvote review - 8" className=" border-0 bg-transparent">
                            <i className="fa-regular fa-thumbs-up fs-4 " data-testid="thumbsUp" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i>
                            <span className="ms-2 ">8</span>
                          </button>
                          <button aria-pressed="false" aria-label="Downvote MichiganMike review. Total downvote review - 0" className=" border-0 bg-transparent">
                            <i className="fa-regular fa-thumbs-down fs-4 ms-3 " data-testid="thumbsDown" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i>
                            <span className="ms-2 ">0</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                
                  <div className=" border border-1 border-black p-3 col-sm-6  shadow-lg mt-3  ">
                    <div>
                      <div className=" overflow-visible h-100">
                        <div className=""><div className="d-flex flex-wrap  justify-content-center mb-3">
                          <div className="d-flex flex-grow-1">
                            <div>
                              <span className="">
                                <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                                <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                                <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                                <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                                <i className="fa fa-star me-2" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              </span>
                            </div>
                            <div className=" ">
                              <span className=" text-success me-1"> Verified Purchase</span>
                              <span className="">
                                <button className="bg-transparent border-0   pointer " type="button" aria-expanded="false" aria-label="Verified Purchase information" aria-controls="react-aria-11">
                                  <i className="fa fa-info-circle" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i>
                                </button><div id="react-aria-11"></div>
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="  mt-1">9/6/2023</div>
                          </div>
                        </div>
                          <div className="">
                            <div className=""></div>
                            <span className="mb-3"><b></b>My iPad is great, love it, no problems!</span>
                          </div><div className="d-flex  justify-content-center">
                            <div className="d-flex flex-wrap">
                              <div className="  mb-2">Verree</div>
                              <div className=" "></div>
                            </div>
                          </div>
                          <div className="d-flex  justify-content-center pt-1">
                            <button aria-pressed="false" aria-label="Upvote Verree review. Total upvote review - 0" className=" border-0 bg-transparent">
                              <i className="fa-regular fa-thumbs-up fs-4 " data-testid="thumbsUp" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i>
                              <span className="ms-2 ">0</span>
                            </button>
                            <button aria-pressed="false" aria-label="Downvote Verree review. Total downvote review - 0" className="border-0 bg-transparent">
                              <i className="fa-regular fa-thumbs-down fs-4 ms-3 " data-testid="thumbsDown" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i>
                              <span className="ms-2 ">0</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" border border-1 border-black p-3   col-sm-6  shadow-lg mt-3"><div>
                    <div className=" overflow-visible h-100">
                      <div className="">
                        <div className="d-flex flex-wrap  justify-content-center mb-3">
                          <div className="d-flex flex-grow-1">
                            <div>
                              <span className="">
                                <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                                <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                                <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                                <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                                <i className="fa fa-star me-3" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              </span>
                            </div>
                            <div className="d-flex ">
                              <span className="text-success me-1 mt-1">Verified Purchase</span>
                              <span className="">
                                <button className="bg-transparent border-0   pointer " type="button" aria-expanded="false" aria-label="Verified Purchase information" aria-controls="react-aria-12">
                                  <i className=" fa fa-info-circle" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i></button><div id="react-aria-12"></div>
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="  mt-1">10/17/2023</div>
                          </div>
                        </div>
                        <div className="">
                          <div className=""></div>
                          <span className="mb-3"><b></b>To be open box everything look good but little nicks where they had to put charge in</span>
                        </div>
                        <div className="d-flex  justify-content-center">
                          <div className="d-flex flex-wrap">
                            <div className="  mb-2">kessa</div>
                            <div className=" "></div>
                          </div>
                        </div>
                        <div className="d-flex  justify-content-center pt-1">
                          <button aria-pressed="false" aria-label="Upvote kessa review. Total upvote review - 0" className=" bg-transparent border-0">
                            <i className="fa-regular fa-thumbs-up fs-4 " data-testid="thumbsUp" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i>
                            <span className="ms-2 ">0</span></button>
                          <button aria-pressed="false" aria-label="Downvote kessa review. Total downvote review - 0" className="border-0 bg-transparent">
                            <i className="fa-regular fa-thumbs-down fs-4 ms-3" data-testid="thumbsDown" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}>
                            </i><span className="ms-2 ">0</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className=" border border-1 border-black p-3 col-sm-6  shadow-lg mt-3 "><div>
                    <div className=" overflow-visible h-100">
                      <div className="">
                        <div className="d-flex flex-wrap  justify-content-center mb-3">
                          <div className="d-flex flex-grow-1"><div>
                            <span className="">
                              <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              <i className="fa fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              <i className="fa-regular fa-star" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                              <i className="fa-regular fa-star me-2" aria-hidden="true" style={{fontSize: "12px", verticalAlign: "-0.175em", width: "12px", height: "12px", boxSizing: "content-box"}}></i>
                            </span>
                          </div>
                            <div className="d-flex ">
                              <span className="mt-1 me-1 text-success">Verified Purchase</span>
                              <span className="">
                                <button className="bg-transparent border-0    pointer " type="button" aria-expanded="false" aria-label="Verified Purchase information" aria-controls="">
                                  <i className="fa fa-info-circle" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i>
                                </button>
                                <div id=""></div>
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="  mt-1">9/29/2023</div>
                          </div>
                        </div>
                        <div className="">
                          <div className=" mb-2">
                            <span className="" style={{WebkitLineClamp:1, paddingBottom: "0em", marginBottom: "0em"}}>
                              <h3 className="">No bad.</h3>
                            </span>
                          </div>
                          <span className="mb-3"><b></b>I expected the packaging to be better, it just came in a non-Apple box. The headphones and chargers are not original</span>
                        </div>
                        <div className="d-flex  justify-content-center">
                          <div className="d-flex flex-wrap">
                            <div className="  mb-2">Daiane</div>
                            <div className=" ">
                            </div>
                          </div>
                        </div>
                        <div className="d-flex  justify-content-center pt-1">
                          <button aria-pressed="false" aria-label="Upvote Daiane review. Total upvote review - 0" className="border-0 bg-transparent">
                            <i className="fa-regular fa-thumbs-up fs-4 " data-testid="thumbsUp" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}>
                            </i>
                            <span className="ms-2 ">0</span>
                          </button>
                          <button aria-pressed="false" aria-label="Downvote Daiane review. Total downvote review - 0" className="border-0 bg-transparent">
                            <i className="fa-regular fa-thumbs-down fs-4 ms-3" data-testid="thumbsDown" style={{fontSize: "1rem", verticalAlign:" -0.175em", width: "1rem", height: "1rem", boxSizing: "content-box"}}></i>
                            <span className="ms-2 ">0</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
            </div>
          </div>
          <div className="mb-4 tc">
            <Link className="     items-center "  to="#">See all reviews</Link>
          </div>
        </div>
        </section>
      </main>
    </section>
  </>
}
