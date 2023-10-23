// import style from './ProductImgs.module.css'
import Slider from 'react-slick';

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
return <>
 <div className="card">
            <div className="mb-3">
                <Button icon="pi pi-minus" onClick={prev} />
                <Button icon="pi pi-plus" onClick={next} className="p-button-secondary ml-2" />
            </div>
          <Galleria
                value={images}
                activeIndex={activeIndex}
                onItemChange={(e) => setActiveIndex(e.index)}
                responsiveOptions={responsiveOptions}
                numVisible={5}
                item={itemTemplate}
                thumbnail={thumbnailTemplate}
                style={{ maxWidth: '640px' }}
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
