import Sample from "../Reusable/Sample/Sample";
import TwoImages from "../Reusable/TwoImages/TwoImages";
import CircleCat from "../Reusable/CircleCat/CircleCat";
import DropDownCat from "../Reusable/DropDownCat/DropDownCat";
import DropDownCont from "../Reusable/DropDownCont/DropDownCont";
export default function Home() {
  return (
    <>

      <div className="container">
        <h5>CircleCat</h5>
        <CircleCat />
        <h5>DropDownCat</h5>
        <DropDownCat />
        <h5>DropDownCont</h5>
        <DropDownCont />
      </div>
    </>
  );
}
