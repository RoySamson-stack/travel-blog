import Data from "./data"
import Cards from "./cards"

export default function Card(){
  const cards = Data.map(card => {
    return(
     <Cards
     key={card.key}
   {...card}
     />
    )
  })
  return(
    <div className="card-container">
      {cards}
    </div>
  )
}