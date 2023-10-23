import Sample from "../Reusable/Sample/Sample";
import TwoImages from "../Reusable/TwoImages/TwoImages";
import CircleCat from "../Reusable/CircleCat/CircleCat";
import DropDownCat from "../Reusable/DropDownCat/DropDownCat";
import DropDownCont from "../Reusable/DropDownCont/DropDownCont";
import CirCatCont from "../Reusable/CirCatCont/CirCatCont";
import CarouselCont from "../Reusable/CarouselCont/CarouselCont";
import CarouselElem from "../Reusable/CarouselElem/CarouselElem";
import CardElem from "../Reusable/CardElem/CardElem";
import CardCont from "../Reusable/CardCont/CardCont";
// import style from './Home.module.css'
export default function Home() {
  return (
    <>
    <div className="container">
      <div className="row">
        <CardElem/>
        <CardCont/>
        {/* <h5>CircleCat</h5>
        <CircleCat />
        <h5>DropDownCat</h5>
        <DropDownCat />
        <h5>DropDownCont</h5>
        <DropDownCont />
        <h5>CirCatCont</h5>
        <CirCatCont/> */}

        
      </div>
      </div> 
    </>
  );
 
}
