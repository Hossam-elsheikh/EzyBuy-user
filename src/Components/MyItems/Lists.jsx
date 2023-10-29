import React from 'react'
import style from './myitems.module.css'
const Lists = () => {
  return (
    <div className='container d-flex flex-column gap-5 p-0 p-md-3 flex-wrap'>
        <button style={{width:'fit-content'}} className='btn btn-dark round-10'>Create New List</button>
        <div className='container d-flex  gap-3 flex-wrap'>
            <div className={style.list}>
              <div >
                <h5><i class="fa-solid fa-heart"></i> Hossam's List</h5>
                <p>favorites, no items added yet</p>
              </div>
              <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-a942/k2-_b7330de4-c256-4814-97d7-2bea89e38ac7.v1.jpg?odnHeight=80&odnWidth=80&odnBg=e6f1fc' />
            </div>
            <div className={style.list}>
              <div >
                <h5>Your Claimed Offers</h5>
                <p>No Special Offers Claimed yet</p>
              </div>
              <img src='https://i5.walmartimages.com/dfw/4ff9c6c9-98c3/k2-_6ea0a29e-93b2-4068-9bc6-2f49f4d0a335.v1.png?odnHeight=80&odnWidth=80&odnBg=FFFFFF' />
            </div>
        </div>
    </div>
  )
}

export default Lists