import React from "react";
import DropDownCat from "../DropDownCat/DropDownCat";
export default function DropDownCont(props) {
  return (
    <>
      <div className="">
        <h5 className="ms-3">Categories</h5>
        <hr className="ms-3" />
        <DropDownCat image={props.image} name={props.name} />
        <hr />
        <DropDownCat image={props.image} name={props.name} />
        <hr />
        <DropDownCat image={props.image} name={props.name} />
        <hr />
        <DropDownCat image={props.image} name={props.name} />
        <hr />
        <DropDownCat image={props.image} name={props.name} />
        <hr />
        <DropDownCat image={props.image} name={props.name} />
        <hr />
        <DropDownCat image={props.image} name={props.name} />
      </div>
    </>
  );
}
