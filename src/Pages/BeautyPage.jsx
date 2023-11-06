import { useEffect, useState } from 'react'
import instance from '../axiosConfig/instance'
import { useQuery } from 'react-query';
import { ColorRing } from 'react-loader-spinner';
import { Link } from 'react-router-dom';

const BeautyPage = () => {
  const [products, setProducts] = useState([])

  async function getBeauty() {
    try {
      let { data } = await instance.get('/product/all').catch(err => err)
      return data;
    }catch (err) {
      console.log(err);
      return err.message;
    }
  }

  let { isLoading, data ,error } = useQuery('BeautyProducts', getBeauty, {
    cacheTime: 50000,
    refetchOnMount: true,
    staleTime: 30000,
    refetchInterval: 10000,
    // enabled:=true
  });

  useEffect(() => {
    if (isLoading === false) {
      setProducts(data?.filter((prod) => prod.category === 'Beauty'))
    }
  }, [isLoading])

  return <>

    <div className='container-fluid'>
      <h5>
        Beauty & Grooming deals
        <span className='text-black-50 '>
          (1000+)
        </span>
      </h5>

      <p className='mt-3'>
        Price when purchased online
        <span>
          <button className='border-0 '>
            <i class=" ms-1 fas fa-info-circle " aria-hidden="true"></i>
          </button>
        </span>
      </p>

      {isLoading ?
        <div className=' w-100 py-5 fs-1 d-flex justify-content-center align-items-center' style={{  }}>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div> :
        <div className="row g-5 mt-3">
          {products?.map((prd) => <div key={prd.id} className="col-md-3" style={{ cursor: 'pointer' }}>
            <span className=' fw-bold text-primary p-1 rounded-2 bg-body-secondary' style={{ fontSize: "12px" }}>
              Best seller
            </span>
            <div className='text-end'>
              <i class="fa-regular fa-heart fs-4" aria-hidden="true"></i>
            </div>
            <Link to={`/product/${prd._id}`}>
            <div>
              <img
                src={prd.images[0]}
                alt="Perfume" className='img-fluid' />
            </div>
            <button className='btn btn-primary rounded-5 fw-bold mt-3'>+ Add</button>
            <div className='mt-1'>
              <span className='text-success  fs-5' style={{ fontWeight: "700" }}>Now</span>
              <span className='text-success fw-bold ms-1 me-1 position-relative' style={{ top: "-8px" }}>$</span>
              <span className='text-success  fs-4' style={{ fontWeight: "700" }}>{prd.price.toString().split('.').splice(0, 1)}</span>
              <span className='text-success fw-bolder position-relative' style={{ top: "-8px" }}>{prd.price.toString().split('.').splice(1)}</span>
              <span className='ms-2 fs-5 text-body-secondary text-decoration-line-through '>${Math.round((prd.discountPercentage )* prd.price)}</span>
            </div>
            <div className='mt-2'>
              <span className='bg-body-secondary text-success me-1 p-1 rounded-3 ' style={{ fontWeight: "600" }}> You save</span>
              <span className='text-success' style={{ fontWeight: "700" }}>{(Math.round(prd.discountPercentage * prd.price) - (prd.price))}</span>
              <p className='mt-1' style={{fontSize:"14px" , fontWeight:"400"}}>{prd.title} </p>
            </div>
            <div className='mt-2'>

              <i class="fa fa-star  " style={{ fontSize: "11px" }} aria-hidden="true"></i>
              <i class="fa fa-star  " style={{ fontSize: "11px" }} aria-hidden="true"></i>
              <i class="fa fa-star  " style={{ fontSize: "11px" }} aria-hidden="true"></i>
              <i class="fa fa-star  " style={{ fontSize: "11px" }} aria-hidden="true"></i>
              <i class="fa fa-star-half-alt  " style={{ fontSize: "11px" }} aria-hidden="true"></i>

              <span className='text-body-secondary' style={{ fontSize: "11px" }}> {prd.rating}</span>
              <p className='mt-2' style={{ fontSize: "11px" }}>Free shipping, arrives
                <strong> in +3 day</strong>
              </p>
            </div>
            </Link>
          </div>
          )}
        </div>
      }
    </div>


  </>
}

export default BeautyPage