import { Link } from "react-router-dom";

import style from './ProductDetails.module.css'
export default function ProductDetails() {
  return <>
  <div>
    <Link to={'#'}>Apple</Link>

    <h2>
    Open Box | Apple iPad | 9.7-inch Retina | 128GB | Latest OS | Wi-Fi Only | Bundle: Case, Pre-Installed Tempered Glass,
     Rapid Charger,
     Bluetooth/Wireless Airbuds By Certified 2 Day Express
    </h2>
 
  <li className="list-unstyled"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>
  <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i> 
  <i class="fa fa-star-half" aria-hidden="true"></i> (4.7) <a href=""> 1406 revewis</a>
  </li>
<div className="mt-3">
  <h2 className="text-success fw-bolder">Now $218.00 <a className={`text-decoration-line-through h5 text-dark-emphasis`}>$249.00</a>  
  </h2>
</div>
  </div>
  </>
}
