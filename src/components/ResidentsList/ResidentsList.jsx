import PropTypes from "prop-types";

import "./ResidentsList.css";
import ResidentInfo from "../ResidentInfo/ResidentInfo";
import { useState } from "react";
import { usePagination } from "../../hooks/usePagination";

const ResidentsList = ({ residents = [] }) => {
  
  const [quantityPagination, setQuantityPagination] = useState(10);
  const [numberPage, residentsSlice, changePageTo, pages] = usePagination(residents, quantityPagination);

  return (
    <section className="residents_container">

      {residents.length ? (
                            <section className="pagination_container">
                              <div className="btn_container">
                                <button className="btn_controls" onClick={() => changePageTo(numberPage - 1)}>
                                  Back
                                </button>
                                {pages.map((i)=> <button className="btn_pagination" key={i} onClick={()=>changePageTo(i)} style={{color: numberPage === i ? 'red' : undefined}}>
                                                      {i}</button>)}
                                <button className="btn_controls" onClick={() => changePageTo(numberPage + 1)}>
                                  Next
                                </button> 
                              </div>
                              <div className="select_container">
                                <label htmlFor="quantity_pagination">by </label>
                                <select id="quantity_pagination" name="quantity_pagination" onChange={(e)=>setQuantityPagination(Number(e.target.value))} value={quantityPagination}>
                                  <option>5</option>
                                  <option>10</option>
                                  <option>15</option>
                                  <option>20</option>
                                </select>
                              </div>
                            </section>
                          ) : <p></p> }

      <h2>Residents</h2>

      {!residentsSlice.length && <p style={{fontSize:25, textAlign:"center"}}>No hay residentes en esta localidad</p>}

      {Boolean(residentsSlice.length) && (
        <ul className="ul_residents">
          {residentsSlice.map((resident) => (
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
