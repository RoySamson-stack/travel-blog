import Data from "./data"
import Cards from "./cards"

export default function Card(){
  const cards = Data.map((card, index) => {
    return(
     <Cards
     key={card.key}
     image={card.image}
      country={card.info.country}
      location={card.location}
      date={card.date}
      link={card.info.link}
      description={card.description}
     />
    )
  })
  return(
    <div className="card-container">
      {cards}
    </div>
  )
}