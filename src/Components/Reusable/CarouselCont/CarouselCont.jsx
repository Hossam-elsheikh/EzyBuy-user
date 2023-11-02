// import style from './CarouselCont.module.css'

import { Carousel } from "primereact/carousel";

import CarouselElem from "../CarouselElem/CarouselElem";
import { Link } from "react-router-dom";

export default function CarouselCont(props) {
  const products = [
    {
      src: "https://i5.walmartimages.com/seo/Marketside-Fresh-Vegetable-Medley-Blend-12-oz_e1b24447-13d1-400f-8c08-d028387af462.7bf1e62b403af40061a416cf56c9af22.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      title: "Marketside Fresh Vegetable Medley Blend, 12 oz  ",
      price: "$2.57",
      rating: 4,
    },
    {
      src: "https://i5.walmartimages.com/seo/Marketside-Fresh-Vegetable-Medley-Blend-12-oz_e1b24447-13d1-400f-8c08-d028387af462.7bf1e62b403af40061a416cf56c9af22.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      title: "Marketside Fresh Vegetable Medley Blend, 12 oz  ",
      price: "$2.57",
      rating: 4,
    },
    {
      src: "https://i5.walmartimages.com/seo/Marketside-Fresh-Vegetable-Medley-Blend-12-oz_e1b24447-13d1-400f-8c08-d028387af462.7bf1e62b403af40061a416cf56c9af22.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      title: "Marketside Fresh Vegetable Medley Blend, 12 oz  ",
      price: "$2.57",
      rating: 4,
    },
    {
      src: "https://i5.walmartimages.com/seo/Marketside-Fresh-Vegetable-Medley-Blend-12-oz_e1b24447-13d1-400f-8c08-d028387af462.7bf1e62b403af40061a416cf56c9af22.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      title: "Marketside Fresh Vegetable Medley Blend, 12 oz  ",
      price: "$2.57",
      rating: 4,
    },
    {
      src: "https://i5.walmartimages.com/seo/Marketside-Fresh-Vegetable-Medley-Blend-12-oz_e1b24447-13d1-400f-8c08-d028387af462.7bf1e62b403af40061a416cf56c9af22.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      title: "Marketside Fresh Vegetable Medley Blend, 12 oz  ",
      price: "$2.57",
      rating: 4,
    },
    {
      src: "https://i5.walmartimages.com/seo/Marketside-Fresh-Vegetable-Medley-Blend-12-oz_e1b24447-13d1-400f-8c08-d028387af462.7bf1e62b403af40061a416cf56c9af22.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      title: "Marketside Fresh Vegetable Medley Blend, 12 oz  ",
      price: "$2.57",
      rating: 4,
    },
    {
      src: "https://i5.walmartimages.com/seo/Marketside-Fresh-Vegetable-Medley-Blend-12-oz_e1b24447-13d1-400f-8c08-d028387af462.7bf1e62b403af40061a416cf56c9af22.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      title: "Marketside Fresh Vegetable Medley Blend, 12 oz  ",
      price: "$2.57",
      rating: 4,
    },
    {
      src: "https://i5.walmartimages.com/seo/Marketside-Fresh-Vegetable-Medley-Blend-12-oz_e1b24447-13d1-400f-8c08-d028387af462.7bf1e62b403af40061a416cf56c9af22.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      title: "Marketside Fresh Vegetable Medley Blend, 12 oz  ",
      price: "$2.57",
      rating: 4,
    },
  ];
  const productTemplate = (product) => {
    return (
      <CarouselElem
        src={product.src}
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
