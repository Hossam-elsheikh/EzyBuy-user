// import style from './DropDownCat.module.css'
import React ,  {useState} from 'react'
import classes from './DropDownCat.module.css'
export default function DropDownCat(props) {
const [isDropdownOpen , setisDropdownOpen]=useState('none');
const [changeIcon , setChangeIcon] = useState('down')

  const toggleDropdown =()=>{
    setisDropdownOpen(isDropdownOpen==='none'?'inline':'none');
    setChangeIcon(changeIcon==='down'?'up':'down');
  }

  return (
    <>
    <div>
      <div>
        <button
          className=" btn border border-white w-100"
          type="button"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
        >
          <div className='d-flex justify-content-between'>
            <img
              src={props && props.image?props.image:"https://i5.walmartimages.com/dfw/4ff9c6c9-877b/k2-_17060cce-fa02-455e-a0be-eda182b82de2.v1.jpg"}
              className={`rounded-circle ${classes.widhtimageCat}`}
            />
            <span className='mt-3'>{props&&props.name?props.name:"Fresh food"}</span>
            <i className={`fa-solid fa-chevron-${changeIcon} mt-3`}></i>
          </div>
        </button>
        <ul className={` ${classes.c} border border-white`} style={{display:`${isDropdownOpen}`}}>
          <li>
            <a className="dropdown-item " href="#">
              Shop All
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Fresh Produce
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Meat & Seafood
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Deil
            </a>
            
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Dairy & Eggs
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Bakery & Bread
            </a>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}
