import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function HostedVans() {
  const [hostedVans, setHostedVans] = useState([])

  useEffect(() => {
    fetch('/api/host/vans')
      .then(res => res.json())
      .then(data => setHostedVans(data.vans))
  }, [])
  
  const hostedVanElements = hostedVans.map(hostedVan => {
    return <HostedVanCard 
              key={hostedVan.id}
              id={hostedVan.id}
              img={hostedVan.imageUrl}
              name={hostedVan.name}
              price={hostedVan.price}
          />
  }) 
  return (
    <>
      <h1 className="hosted-vans-title">Your listed vans</h1>
      {hostedVanElements}
    </>
  )
}

function HostedVanCard({img, name, price, id}) {
  return (
    <Link to={`/host/vans/${id}`}>
      <div className="hosted-vans-card">
        <img src={img} alt="hosted van" />
        <div className="hosted-van-details">
          <p className="hosted-van-name">{name}</p>
          <p className="hosted-van-price">${price}/day</p>
        </div>
      </div>
    </Link>
  )
}