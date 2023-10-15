import { Link } from "react-router-dom"; 

export default function VanCard(props) {
  function geyVanTypeBadgeColor(type) {
    switch (type) {
      case 'simple':
        return {backgroundColor: '#E17654'}

      case 'luxury':
        return {backgroundColor: '#161616'}

      case 'rugged': 
        return {backgroundColor: '#115E59'}
      default:
        break;
    }
  } 
  return(
    <div className="van-card">
      <Link to={`/vans/${props.id}`}>
        <img className="van-image" src={props.img} alt="van" />
        <div className="details">
          <div className="van-name">{props.name}</div>
          <div className="price-container">
            <div className="price">${props.price}</div>
            <div className="per-day">/day</div>
          </div>
        </div>
        <div style={geyVanTypeBadgeColor(props.type)} className="van-type">{props.type}</div>
      </Link>
    </div>
  )
}