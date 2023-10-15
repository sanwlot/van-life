import { Link } from "react-router-dom"; 
import VanTypeBadge from "./VanTypeBadge";

export default function VanCard(props) {
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
        <VanTypeBadge type={props.type} />
      </Link>
    </div>
  )
}