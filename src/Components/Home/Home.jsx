import Sample from "../Reusable/Sample/Sample";
import TwoImages from "../Reusable/TwoImages/TwoImages";
import CircleCat from "../Reusable/CircleCat/CircleCat";
import DropDownCat from "../Reusable/DropDownCat/DropDownCat";
import DropDownCont from "../Reusable/DropDownCont/DropDownCont";
import CirCatCont from "../Reusable/CirCatCont/CirCatCont";
export default function Home() {
  return (
    <>
    <div className="container">
      <div className="row">
        <h5>CircleCat</h5>
        <CircleCat />
        <h5>DropDownCat</h5>
        <DropDownCat />
        <h5>DropDownCont</h5>
        <DropDownCont />
        <h5>CirCatCont</h5>
        <CirCatCont/>
      </div>
      </div> 
    </>
  );
}
