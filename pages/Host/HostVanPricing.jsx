import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
  const [hostedVanDetails, setHostVanDetails] = useOutletContext()
  console.log(hostedVanDetails)
  return (
    <>
      <p className="host-van-pricing"><span className="host-van-pricing-amount">${hostedVanDetails.price.toFixed(2)}</span>/day</p>
    </>
  )
}