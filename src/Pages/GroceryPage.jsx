import React from "react";
import DropDownCont from "../Components/Reusable/DropDownCont/DropDownCont";
import CirCatCont from "../Components/Reusable/CirCatCont/CirCatCont";
import CarouselCont from "../Components/Reusable/CarouselCont/CarouselCont";
import CardCont from "../Components/Reusable/CardCont/CardCont";
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
          <CarouselCont lgCount={7} mdCount={7} smCount={3} count={7} slideCount={3} headline='Top Deals' desc='Up to 65% off'/>
          <hr/>
          <CardCont/>
          <hr/>
          <CarouselCont lgCount={7} mdCount={7} smCount={3} count={7} slideCount={3} headline='Top Deals' desc='Up to 65% off'/>
          <hr/>
          <CarouselCont lgCount={7} mdCount={7} smCount={3} count={7} slideCount={3} headline='Top Deals' desc='Up to 65% off'/>
          <hr/>
          <CardCont/>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroceryPage;
