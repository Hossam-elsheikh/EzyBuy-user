import React from "react";
import DropDownCont from "../Components/Reusable/DropDownCont/DropDownCont";
import CirCatCont from "../Components/Reusable/CirCatCont/CirCatCont";
import CarouselCont from "../Components/Reusable/CarouselCont/CarouselCont";
import CardCont from "../Components/Reusable/CardCont/CardCont";
const GroceryPage = () => {
  return (
    <>
      <div className="">
        <div className="row">
          <div className="col-lg-3">
          <DropDownCont/>
          </div>
          <div className="col-lg-9">
          <CirCatCont name="Shop groceries" image="https://i5.walmartimages.com/dfw/4ff9c6c9-b07e/k2-_a32048d4-a2ce-479a-84ec-bdee70018dee.v1.jpg"/>
          <hr/>
          <CirCatCont name="Shop essentials" image="https://i5.walmartimages.com/dfw/4ff9c6c9-b2e6/k2-_c4f04095-331e-4941-8c8e-9395dd2d9e45.v1.jpg?odnHeight=290&odnWidth=290&odnBg=FFFFFF" />
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
