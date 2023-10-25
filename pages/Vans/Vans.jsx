import { useEffect, useState } from "react"
import VanCard from "../../components/VansCard"
import { Link, useSearchParams } from "react-router-dom"

export default function Vans() {
  const [vansData, setVansData] = useState([])

  useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json())
      .then(data => setVansData(data.vans))
  }, [])

  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')
  
  // if no typeFilter then it will use directly vans data
  const displayedVans = typeFilter
    ? vansData.filter(van => van.type.toLowerCase() === typeFilter)
    : vansData

  const vanElements = displayedVans.map(van => {
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
        <Link to='?type=simple' className="filter">Simple</Link>
        <Link to='?type=luxury' className="filter">Luxury</Link>
        <Link to='?type=rugged' className="filter">Rugged</Link>
        <Link to='.' className="clear-filters">Clear filters</Link>
      </div>
      <div className="vans-grid">
        {vanElements}
      </div>
    </div>
  )
}