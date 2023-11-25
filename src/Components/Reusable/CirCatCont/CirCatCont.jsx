import { all } from "axios";
import CircleCat from "../CircleCat/CircleCat";
import React, { useEffect, useState } from "react";
import { productsAction } from "/src/store/slices/productsSlice";
import { useDispatch, useSelector } from "react-redux";
export default function CirCatCont(props) {
  return <>
  <div className="container">
    <div className="row d-flex justify-content-evenly">
<<<<<<< HEAD
      <CircleCat image={props.image} />
      <p className=" text-center">{props.name}</p>
=======
      {/* {products.map((product)=>(
        <CirCatCont key={product._id} image={product.image} name={product.title
          }/>
      ))} */}
      {/* <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/> */}
>>>>>>> 657d61b707f15f184c24088e29975ae6df527988
    </div>
  </div>
  </>
}
