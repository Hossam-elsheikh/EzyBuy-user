import classes from "./CarouselElem.module.css";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/slices/cartSlice";
import { useNavigate } from 'react-router-dom';
export default function CarouselElem(props) {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  function addToCartHandler(id) {
    dispatch(
      addToCart({
        id,
        quantity: 1,
        price: Math.round((props.price + Number.EPSILON) * 100) / 100,
        img: props.src,
        title: props.title,
      })
    );
  }

  return (
    <>
      <div className={classes.item}  >
        <img src={props.src} onClick={() => navigate(`/product/${props.id}`)} />
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
          <p style={{ color: "gray", fontSize: ".7rem" }}>266</p>
        </div>
        <p className={classes.title}>{props.title}</p>
        <div className={classes.tags}>
          <p>Pickup</p>
          <p>Delivery</p>
        </div>
        <button onClick={() => addToCartHandler(props.id)}>Add +</button>
      </div>
    </>
  );
}
