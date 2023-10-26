import React from "react";
import DropDownCat from "../DropDownCat/DropDownCat";
export default function DropDownCont() {
  return (
    <>
      <div className="hide_cat">
        <h5 className="ms-3">Categories</h5>
        <hr className="ms-3" />
        <DropDownCat
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-877b/k2-_17060cce-fa02-455e-a0be-eda182b82de2.v1.jpg"
          name="Fresh food"
        />
        <hr/>
        <DropDownCat
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-c6c4/k2-_c2e2e6f7-2f6e-4f2d-9351-e581fb947588.v1.jpg"
          name="Snacks"
        />
         <hr/>
        <DropDownCat
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-f754/k2-_ae5145df-fcf4-4bd2-9512-3e6078153722.v1.jpg"
          name="Frozen"
        />
         <hr/>
        <DropDownCat
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-2a8e/k2-_9de384d1-e00a-45db-b90e-d420ce543078.v1.jpg?"
          name="Beverages"
        />
         <hr/>
        <DropDownCat
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-98fc/k2-_38e060ca-3233-45ff-a84d-a10538dd85cd.v1.jpg"
          name="Grab & Go"
        />
         <hr/>
        <DropDownCat
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-9531/k2-_cb0e0b32-98a7-47b0-bb58-9138586ad9cc.v1.jpg?"
          name="Household Essentials"
        />
         <hr/>
        <DropDownCat
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-e34c/k2-_181cd831-fe71-489d-bcbe-0916f8966e0b.v1.jpg?"
          name="Health & Wellness"
        />
         <hr/>
        <DropDownCat
          image="https://i5.walmartimages.com/dfw/4ff9c6c9-d11d/k2-_0df859fc-5ca2-4758-9e4e-8e6f10d18125.v1.jpg?"
          name="Beauty"
        />
      </div>
    </>
  );
}
