// import style from './ProductImgs.module.css'
import Slider from 'react-slick';


import{ useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';

        
export default function ProductImgs() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay:false,
    autoplaySpeed:1900,
  };
  const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0)

    const responsiveOptions = [
        {
            breakpoint: '991px',
            numVisible: 4
        },
        {
            breakpoint: '767px',
            numVisible: 3
        },
        {
            breakpoint: '575px',
            numVisible: 1
        }
    ];
    let data = [
        
      "https://i5.walmartimages.com/asr/88d9f596-5a86-4f0d-8c3a-778861d54bbf.c5caeeb9383a0ed424042d3b5930d5e7.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/ee8960be-ee04-408f-8dd8-3e5debef22c1.14b531c91d67426506502326a26567be.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/cfa22890-ad6c-49a1-b32f-04c4ef7e8c2d.196d6138bc8e080a2a8fd5ea4fd15073.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
      "https://i5.walmartimages.com/asr/efbdb25d-691d-4912-9efe-f47ad9e6e11e.9053d2ad44074ce4b4fbf218b2a4c00f.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
    ]
    useEffect(() => {
setImages(data);
    }, []);

    const next = () => {
        setActiveIndex(prevState => (prevState === images.length - 1) ? 0 : prevState + 1)
    }

    const prev = () => {
        setActiveIndex((prevState) => (prevState === 0 ? 0 : prevState - 1));
    };

    const itemTemplate = (item) => {
        return <img src={item} alt="details" style={{ width: '100%', display: 'block',height:"100%" }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item} alt="details" style={{ display: 'block' ,width:"100%" , height:"100%"}} />;
    }

return <>
      <div className="card w-50">
            <div className="mb-3 d-flex justify-content-between">
                <Button icon="bg-danger fa fa-minus fs-3" onClick={prev} /> 
                <Button icon="fa fa-plus bg-danger fs-3 " onClick={next} className="p-button-secondary ml-2" />
            </div>

            <Galleria
                value={...images}
                activeIndex={activeIndex}
                onItemChange={(e) => setActiveIndex(e.index)}
                responsiveOptions={responsiveOptions}
                numVisible={4}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                style={{ maxWidth: '600px'  }}
            />
        </div>

<div className='bg-dark w-25'>
  
{/* <Slider {...settings} className='w-100  '>
            
            <div className='d-flex justify-content-center h-100 '>
            <img  style={{objectFit:'cover'}}  src={"https://i5.walmartimages.com/asr/88d9f596-5a86-4f0d-8c3a-778861d54bbf.c5caeeb9383a0ed424042d3b5930d5e7.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"} alt="image slider" className='w-100 h-100  '/>
            </div>
          
            <div className='d-flex justify-content-center '>
            <img  style={{objectFit:'cover'}} src={"https://i5.walmartimages.com/asr/ee8960be-ee04-408f-8dd8-3e5debef22c1.14b531c91d67426506502326a26567be.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"} alt="image slider" className='w-100 h-100 '/>
            </div>
          
            <div className='d-flex justify-content-center '>
            <img  style={{objectFit:'cover'}}  src={"https://i5.walmartimages.com/asr/cfa22890-ad6c-49a1-b32f-04c4ef7e8c2d.196d6138bc8e080a2a8fd5ea4fd15073.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"} alt="image slider" className='w-100 h-100 '/>
            </div>
            
            <div className='d-flex justify-content-center '>
            <img  style={{objectFit:'cover'}}  src={"https://i5.walmartimages.com/asr/efbdb25d-691d-4912-9efe-f47ad9e6e11e.9053d2ad44074ce4b4fbf218b2a4c00f.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"} alt="image slider" className='w-100 h-100 '/>
            </div>
  
  </Slider> */}
</div>
  
  </>
}
