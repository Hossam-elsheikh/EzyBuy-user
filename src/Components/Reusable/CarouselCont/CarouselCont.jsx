// import style from './CarouselCont.module.css'

import { Carousel } from "primereact/carousel";

import CarouselElem from "../CarouselElem/CarouselElem";
import { Link } from "react-router-dom";

export default function CarouselCont(props) {
  
  const productTemplate = (product) => {
    return (
      <CarouselElem
        src={product.images[0]}
        title={product.title}
        price={product.price}
        rating={product.rating}
      />
    );
  };
  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: props.lgCount,
      numScroll: 2,
    },
    {
      breakpoint: "991px",
      numVisible: props.mdCount,
      numScroll: 2,
    },
    {
      breakpoint: "767px",
      numVisible: props.smCount,
      numScroll: 2,
    },
  ];
  return (
    <>
      <div className="d-flex flex-column w-100">
        <div className="d-flex justify-content-between align-items-center">
          <h5>{props.headline}</h5>
          <Link style={{ color: "black" }}>View all</Link>
        </div>
        <p style={{ color: "gray", fontSize: ".7rem", paddingBottom: "1rem" }}>
          {props.desc}
        </p>
        
          <Carousel
            value={props.products}
            numVisible={props.count}
            numScroll={props.slideCount}
            responsiveOptions={responsiveOptions}
            itemTemplate={productTemplate}
          />
       
      </div>
    </>
  );
}
