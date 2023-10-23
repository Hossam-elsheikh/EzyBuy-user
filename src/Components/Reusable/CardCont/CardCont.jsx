import CardElem from "../CardElem/CardElem";

// import style from './CardCont.module.css'
export default function CardCont() {
  return <>
 <div className="mt-4">
  <h5 className="font-weight-bold">Your Halloween haul</h5>
  <div className="d-flex gap-2">
    <CardElem/>
    <CardElem/>
    <CardElem/>
  </div>
 </div>
  </>
}
