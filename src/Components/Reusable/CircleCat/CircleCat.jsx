import classes from "./CircleCat.module.css";
export default function CircleCat() {
  return (
    <>
      <div
        className="col-lg-2 col-md- col-sm-4 mb-3"
        style={{textAlign: "center"}}
      >
        <a href="#" className={classes.noDe}>
          <img
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-6a9c/k2-_752a86d4-3dad-4536-a126-575ff0fdc50b.v1.jpg"
            className=" rounded-circle w-100"
          />
          <span className="ms-1">Fresh food</span>
        </a>
      </div>
    </>
  );
}
