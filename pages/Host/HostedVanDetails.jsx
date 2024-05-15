import { useEffect, useState } from "react";
import VanTypeBadge from "../../components/VanTypeBadge";
import { NavLink, Outlet, useParams } from "react-router-dom";

export default function HostedVanDetails() {
  const params = useParams();

  const [hostedVanDetails, setHostedVanDetails] = useState({});

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostedVanDetails(data.vans[0]));
  }, []);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    fontColor: "#161616",
  };

  return (
    <div>
      <div className="hosted-van-details-back-to-all-vans">
        <NavLink className="back-to-all-vans-link" to=".." relative="path">
          <div>
            <span>← </span>
            <span className="back-to-home">Back to all vans</span>
          </div>
        </NavLink>
      </div>
      <div className="hosted-van-details-container">
        <div className="hosted-van-info">
          <img src={hostedVanDetails.imageUrl} alt="van" />
          <div className="hosted-van-name-price-type">
            <VanTypeBadge type={hostedVanDetails.type} />
            <h1>{hostedVanDetails.name}</h1>
            <p>
              <span>${hostedVanDetails.price}</span>/day
            </p>
          </div>
        </div>
        <nav className="hosted-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={[hostedVanDetails, setHostedVanDetails]} />
      </div>
    </div>
  );
}
