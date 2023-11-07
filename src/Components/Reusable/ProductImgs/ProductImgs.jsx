// import style from './ProductImgs.module.css'
import Slider from 'react-slick';


import{ useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { ColorRing } from 'react-loader-spinner';

        
export default function ProductImgs({img}) {
    console.log(img);
    const [isLoading, setIsLoading] = useState(true);
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
    useEffect(() => {
        if(img){
            setIsLoading(false);
        }else{
            setIsLoading(true);
        }
    }, [img]);

    const next = () => {
        setActiveIndex(prevState => (prevState === img.length - 1) ? 0 : prevState + 1)
    }

    const prev = () => {
        setActiveIndex((prevState) => (prevState === 0 ? 0 : prevState - 1));
    };

    const itemTemplate = (item) => {
        return <img src={item} alt="details" style={{ width: '70%', display: 'flex' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item} alt="details" className='bg-danger ms-auto '  style={{ display: 'flex' ,width:"70%"}} />;
    }

return <>
{isLoading?
  <div className=' w-100 py-5 fs-1 d-flex justify-content-center align-items-center' >
  <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
</div>
:
 <div className="card mb-5 ">
 <div className=" ">
     <div className='text-end fs-4'>
     <button className='border-0'>
     <i class="fa-regular fa-heart  pointer"></i>
     </button>
     </div>
     
 <Galleria
     value={img}
     activeIndex={activeIndex}
     onItemChange={(e) => setActiveIndex(e.index)}
     responsiveOptions={responsiveOptions}
     numVisible={0}
     item={itemTemplate}
     thumbnail={thumbnailTemplate}
     style={{ maxWidth: '800px'  }}
 />
 </div>
</div>  
}
     
  </>
}
