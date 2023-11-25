import CircleCat from "../CircleCat/CircleCat";
export default function CirCatCont(props) {
  return <>
  <div className="container">
    <div className="row d-flex justify-content-evenly">
      <CircleCat image={props.image} />
      <p className=" text-center">{props.name}</p>
    </div>
  </div>
  </>
}
