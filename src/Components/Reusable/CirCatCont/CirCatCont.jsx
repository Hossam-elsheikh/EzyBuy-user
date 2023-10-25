import CircleCat from "../CircleCat/CircleCat";
export default function CirCatCont(props) {
  return <>
  <div className="container">
  <h5 className="ms-3">{props.name}</h5>
    <div className="row d-flex justify-content-evenly">
      <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/>
      <CircleCat image={props.image} name="Fresh food"/>
    </div>
  </div>
  </>
}
