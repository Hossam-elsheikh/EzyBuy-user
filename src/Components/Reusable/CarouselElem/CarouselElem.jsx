import classes from "./CarouselElem.module.css";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function CarouselElem(props) {
  return (
    <>
      <div className={classes.item}>
        <img src={props.src} />
        <h6>
          ${props.price} <span>each</span>
        </h6>
        <div className="d-flex gap-1">

        <Rating
          readonly={true}
          initialRating={props.rating}
          fullSymbol={<FontAwesomeIcon icon={faStar} color="goldenRod" />}
          emptySymbol={<FontAwesomeIcon icon={faStar} />}
          />
        <p style={{color:'gray',fontSize:'.7rem'}}>266</p>
          </div>
        <p className={classes.title}>{props.title}</p>
        <div className={classes.tags}>
          <p>Pickup</p>
          <p>Delivery</p>
        </div>
        <button>Add +</button>
        <i className="fa-regular fa-heart"></i>
      </div>
    </>
  );
}
