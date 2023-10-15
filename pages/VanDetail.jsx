import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import VanTypeBadge from "../components/VanTypeBadge"

export default function VanDetail() {
  const params = useParams()
  const [van, setVan] = useState({})
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then(res => res.json())
      .then(data => setVan(data.vans))
  }, [params])
  return(
    <div className="van-detail-container">
      <Link className="back-to-all-vans-link" to='/vans'>
        <div><span>← </span><span className="back-to-home">Back to all vans</span></div>
      </Link>
      <img className="van-img" src={van.imageUrl} alt={van.name}/>
      <VanTypeBadge type={van.type}/>
      <h1>{van.name}</h1>
      <div><span className="van-price">${van.price}</span><span>/day</span></div>
      <p>{van.description}</p>
      <button className="rent-van-btn">Rent this van</button>
    </div>
  )
}