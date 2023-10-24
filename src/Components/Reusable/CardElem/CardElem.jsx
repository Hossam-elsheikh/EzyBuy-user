import classes from './CardElem.module.css'
export default function CardElem() {
  return <>
  <div class={`card p-0 ${classes.cardE}`}>
  <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-8059/k2-_be068da0-75e4-4fac-96f3-08fb96a19051.v1.jpg?odnHeight=222&odnWidth=395&odnBg=FFFFFF" class="card-img-top img-responsive" alt="..."/>
  <div class="card-body d-flex flex-column gap-1">
    <h5 class="card-title">Halloween Candy</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class={classes.shop}>Shop now</a>
  </div>
</div>
  </>
}
