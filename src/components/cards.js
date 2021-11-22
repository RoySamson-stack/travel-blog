

export default function Cards(props) {
  return(
    <div className="card">
      <img src={props.image} alt="destination"/>
      <div className="card-content">
        <div className="card-grays">
          <p className="country">{props.country}</p>
          <a href={props.link}  className="link" target="_blank">View on Google maps</a>
          </div>
          <h3 className="location">{props.location}</h3>
          <p className="date">{props.date}</p>
          <p className="description">{props.description}</p>
      </div>
    </div>
  )
}