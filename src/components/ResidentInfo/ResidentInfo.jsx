import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { getCharacterByUrl } from "../../services/getCharacterByUrl";

import "./ResidentInfo.css";

const ResidentInfo = ({ url }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    const loadResidents = async () => {
      const residentData = await getCharacterByUrl(url);
      setResident(residentData);
      console.log(residentData)
    };

    loadResidents();

  }, [url]);

  return (
    <section className="residentInfo_container">

      {resident ? (
        <section className="residents_card">
          <div>
            <img src={resident.image} alt={resident.name} />
          </div>
          <h3>{resident.name}</h3>
          <ul>
            <li>
              <b>Specie: </b> {resident.species}
            </li>
            <li>
              <b>Origin: </b> {resident?.origin.name }
            </li>
            <li>
              <b>Status: </b> {resident.status}
            </li>
            <li> 
              <b>Appearances: </b>{resident?.episode.length}
            </li>
          </ul>
        </section>
    ): <p>LoadingData...</p>}
      
    </section>
  );
};

ResidentInfo.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ResidentInfo;
