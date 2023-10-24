import React from "react";
import DropDownCont from "../Components/Reusable/DropDownCont/DropDownCont";
import CirCatCont from "../Components/Reusable/CirCatCont/CirCatCont";
const GroceryPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <DropDownCont />
          </div>
          <div className="col-lg-9">
          <CirCatCont name="Shop groceries"/>
          <hr/>
          <CirCatCont name="Shop essentials" />
          <hr/>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroceryPage;
