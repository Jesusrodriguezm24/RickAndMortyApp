import PropTypes from "prop-types";

import "./ResidentsList.css";
import ResidentInfo from "../ResidentInfo/ResidentInfo";

const ResidentsList = ({ residents }) => {
  return (
    <section className="residents_container">
      {!residents.length && <p style={{fontSize:25, textAlign:"center"}}>No hay residentes en esta localidad</p>}

      {Boolean(residents.length) && (
        <ul className="ul_residents">
          {residents.map((resident) => (
            <li key={resident} className="li_resident">
              <ResidentInfo url={resident} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

ResidentsList.propTypes = {
  residents: PropTypes.array.isRequired,
};
export default ResidentsList;
