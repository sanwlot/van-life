import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
  const [hostedVanDetails] = useOutletContext()
  
  return (
    <div className="host-van-photos-container">
      <img src={hostedVanDetails.imageUrl} alt="van" />
    </div>
  )
}