import { useEffect, useState } from "react"
import VanCard from "../components/VansCard"

export default function Vans() {
  const [vansData, setVansData] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(vansDetails => setVansData(vansDetails.vans))
  }, [])

  const vansElements = vansData.map(van => {
    return (
      <VanCard 
        key={van.id}
        id={van.id}
        img={van.imageUrl}
        name={van.name}
        price={van.price}
        type={van.type}
      />
    )
  })

  return(
    <div className="vans-page-container">
      <h1 className="vans-page-heading">Explore our van options</h1>
      <div className="vans-page-filters">
        <div className="filter">Simple</div>
        <div className="filter">Luxury</div>
        <div className="filter">Rugged</div>
        <div className="clear-filters">Clear filters</div>
      </div>
      <div className="vans-grid">
        {vansElements}
      </div>
    </div>
  )
}