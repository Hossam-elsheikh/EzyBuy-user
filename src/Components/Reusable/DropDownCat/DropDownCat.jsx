// import style from './DropDownCat.module.css'
import React ,  {useState} from 'react'
import classes from './DropDownCat.module.css'
export default function DropDownCat() {
const [isDropdownOpen , setisDropdownOpen]=useState(false);
const [changeIcon , setChangeIcon] = useState('down')

  const toggleDropdown =()=>{
    setisDropdownOpen(!isDropdownOpen);
    setChangeIcon(changeIcon==='down'?'up':'down');
  }

  return (
    <>
    <div className='col-lg-4'>
      <div className="dropdown">
        <button
          className=" btn border border-white"
          type="button"
          onClick={toggleDropdown}
          data-bs-toggle="dropdown"
          aria-expanded={isDropdownOpen}
        >
          <div className>
            <img
              src="https://i5.walmartimages.com/dfw/4ff9c6c9-877b/k2-_17060cce-fa02-455e-a0be-eda182b82de2.v1.jpg"
              className="w-25 rounded-circle "
            />
            <span className="ms-1 me-3">Fresh Food</span>
            <i className={`fa-solid fa-chevron-${changeIcon} ms-5 ${isDropdownOpen?'open':''}`}></i>
          </div>
        </button>
        <ul className={` ${classes.c} ms-3 border border-white ${isDropdownOpen?'hied':'show'}`}>
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
