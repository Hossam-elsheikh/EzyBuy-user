// import style from './ProductImgs.module.css'
import Slider from 'react-slick';


import{ useState, useEffect, useContext } from 'react';
import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import { ColorRing } from 'react-loader-spinner';
import { FavPrdContext } from '../../../context/FavPrdContext';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';

        
export default function ProductImgs({img , id}) {
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

    // ?===> WishList <=====
    let {addtoFavorite , getWishList1 , getBeauty1 , removeFromWishList1 ,favItems }=useContext(FavPrdContext);
  const AllProducts = useSelector((data) => data.products.products)
//   const isLoading = useSelector((state) => state.products.isLoading);
  const [products, setProducts] = useState([]);
  function getBeauty() {
    getBeauty1('all');
  }
  useEffect(() => {
    getBeauty();
  }, [])

  useEffect(() => {
    if (AllProducts) { 
      setProducts(AllProducts);
    }
    if(isLoading==false){
      getWishList();
      }
  }, [isLoading ])

  async function addtoFavorite1(id) {
    addtoFavorite(id);
  }

  async function getWishList() {
    getWishList1();
  }


  let x =[];
  let y =[];
  products?.map(prods=>{
    y.push( JSON.parse(JSON.stringify(prods)))
    favItems?.map(prd=>{
      if(prd.id == prods.id){
        x.push( JSON.parse(JSON.stringify(prods)))
        x.isFavorite = true;
      }
    })
  })

  y?.map(prod=>{
    x?.map(prd=>{
      if(prd.id == prod.id ){
        prod.isFavorite =true;
      }
    })
  })
  async function removeFromWishList(id) {
    removeFromWishList1(id);
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
    colors={['black','black',"black",'black', 'black']}

  />
</div>
:
 <div className="card mb-5 ">
     <div className='text-end fs-4'>
        {
                y?.map(prod=>{
                    if( prod.isFavorite == true && prod._id == id ){
                        return <i  class="fas fa-heart  pointer  text-danger fav" onClick={()=>removeFromWishList(id)}></i>
                     }else if(prod._id == id){
                        return <i  class="fa-regular fa-heart  pointer fav" onClick={()=>addtoFavorite1(id)}></i>
                     }
                })
        }
     </div>
     
 <Galleria
     value={img}
     activeIndex={activeIndex}
     onItemChange={(e) => setActiveIndex(e.index)}
     responsiveOptions={responsiveOptions}
     numVisible={0}
     item={itemTemplate}
     thumbnail={thumbnailTemplate}
 />
</div>  
}
    <Toaster />
     
  </>
}
