import { Link } from 'react-router-dom'
import style from './ShopNowCard.module.css'
export default function ShopNowCard(props) {
  return <>
  <div className={style.card}>
    <img className='img img-fluid' src={props.src} />
    <div>
    <h3 style={{color:props.txtColor,width:props.titleWidth}} >{props.title}</h3>
    <Link style={{color:props.txtColor}}>Shop now</Link>
    </div>
  </div>
  </>
}
