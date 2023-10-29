import { Link } from 'react-router-dom'
import style from './NotFound.module.css'
export default function NotFound() {
  return <>
  <div class="container-fluid d-flex flex-column  justify-content-center align-items-center w-100">
            <img className={style.notImg} src="https://miro.medium.com/v2/resize:fit:1400/1*DeBkx8vjbumpCO-ZkPE9Cw.png" />
            <div className={style.info}>
                <Link>Back to Home</Link>
            </div>
        </div >
  </>
}
