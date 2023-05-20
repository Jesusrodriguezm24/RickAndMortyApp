
import { useState } from 'react';
import { getLocationById } from '../../services/getLocationById';
import getRandomNumber from '../../utils/getRandomNumber';

import './SearchById.css'

const SearchById = ({numId, setNumId, setLocation, topIdLocations }) => {

    const [errorIdLocation, setErrorIdLocation] = useState('');

    const handlerChange = (e) => {
        const idValue = e.target.value;
        
          if (idValue && !/[0-9]/.test(Number(idValue))) {
            setErrorIdLocation('El Id debe ser numeros');
          }else if(idValue && Number(idValue) < 1) {
            setErrorIdLocation('El menor Id es 1');
          }else if(idValue && Number(idValue) > 126) {
            setErrorIdLocation('El Id maximo es 126');
          }else {
            setErrorIdLocation('');
          }
          setNumId(idValue);
      }

    const handlerSubmit = async (e) => {
        e.preventDefault();
      
        if (errorIdLocation) return;
      
        if (!numId) { 
          setLocation(await getLocationById(getRandomNumber(topIdLocations)));
        }else{
          setLocation(await getLocationById(numId));
        }
      
      }

    const handlerKeyPress = (e) => {
        if (e.key === "Enter") {
          handlerSubmit(e);
        }
      }

  return (
    <>
     <form className='form_container' onSubmit={handlerSubmit}>
        <div className='seach_container'>
          <input type="text" value={numId} onKeyDown={handlerKeyPress} onChange={handlerChange} placeholder="Write the Id (1 to 126)"  />
          <button type='submit'>
            {!numId ? <i className="fa-solid fa-repeat"></i> : <i className="fa-solid fa-magnifying-glass"></i>}  
          </button>
        </div>
      </form>
     <p style={{color: 'red'}}>{errorIdLocation}</p>
    
    </>
   
  )
}

export default SearchById