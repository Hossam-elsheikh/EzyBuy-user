import classNamees from './CardElem.module.css'
export default function CardElem(props) {
  return <>

  <div className={`card p-0 ${classNamees.cardE}`}>
  <img src={props.image} className="card-img-top img-responsive " style={{height:'220px'}} alt="..."/>
  <div className="card-body d-flex flex-column gap-1">
    <p className="card-title fs-5 ">{props.h}</p>
    <p className="card-text mb-5 text-muted">{props.p}</p>
    <a href="/" className={classNamees.shop}>Shop now</a>
  </div>
</div>
  </>
}
