import PropTypes from "prop-types";
import './Location.css' 

const Location = ({ location }) => {
  return (
    <section className="location_container">
        <h2>{location.name}</h2>
        <ul>
            <li><b>Type: </b>{location.type}</li>
            <li><b>Dimension: </b>{location.dimension}</li>
            <li><b>Population: </b>{location.residents.length}</li>
        </ul>
    </section>
  )
}

Location.propTypes = {
    location: PropTypes.shape({
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      dimension: PropTypes.string.isRequired,
      residents: PropTypes.array.isRequired,
    }),
  };

export default Location