import { useOutletContext } from "react-router-dom"

export default function HostVanInfo() {
  const [hostedVanDetails] = useOutletContext()
  
  return (
    <div className="host-van-info-container">
      <p><span>Name: </span>{hostedVanDetails.name}</p>
      <p><span>Type: </span>{hostedVanDetails.type}</p>
      <p><span>Description: </span>{hostedVanDetails.description}</p>
      <p><span>Visibility: </span>Public</p>
    </div>
  )
}