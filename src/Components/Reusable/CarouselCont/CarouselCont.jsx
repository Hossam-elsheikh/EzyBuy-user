// import style from './CarouselCont.module.css'

import { Carousel } from "primereact/carousel";

import CarouselElem from "../CarouselElem/CarouselElem";

export default function CarouselCont() {
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
      numVisible: 4,
      numScroll: 3,
    },
    {
      breakpoint: "991px",
      numVisible: 3,
      numScroll: 2,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
  ];
  return (
    <>
      <h1>carousel</h1>
      <div className="w-75">
        <Carousel
          value={products}
          numVisible={4}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          itemTemplate={productTemplate}
        />
      </div>
    </>
  );
}
