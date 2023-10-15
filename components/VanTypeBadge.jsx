export default function VanTypeBadge(props) {
  function getVanTypeBadgeColor(type) {
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
  return <div style={getVanTypeBadgeColor(props.type)} className="van-type">{props.type}</div>

}