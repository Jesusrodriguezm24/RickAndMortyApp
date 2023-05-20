import LoadingPage from './components/LoadingPage/LoadingPage'
import { useEffect, useState } from 'react'
import { getLocationById } from './services/getLocationById'

import getRandomNumber from './utils/getRandomNumber'
import Location from './components/Location/Location'
import ResidentsList from './components/ResidentsList/ResidentsList'
import HeaderPage from './components/HeaderPage/HeaderPage'
import Footer from './components/Footer/Footer'
import SearchByLetter from './components/SearchByLetter/SearchByLetter'
import SearchById from './components/SearchById/SearchById'

import './App.css'

//Tope de ubicaciones por Id.
const topIdLocations = 126;

//let elementLocations = [];

function App() {
 const [location, setLocation] = useState(null);
 const [numId, setNumId] = useState('');


 const loadData = async () => {
  const locationInfo = await getLocationById(getRandomNumber(topIdLocations));
  
  setLocation(locationInfo);
}

  useEffect(() => {
     loadData(getRandomNumber(topIdLocations));

     // Construyendo la busqueda por letras//
     
    //  const loadAllLocation = async () => {
    //     const allLocation = [];

    //     for (let i = 1; i <= 7; i++) {
    //       allLocation.push(getLocationByName(i)) ;
    //     }
    //     const locations = await Promise.allSettled(allLocation);
    //     elementLocations = locations.flat().map((item)=>item.value).flat();
    //    console.log(elementLocations);
    //  }

     //loadAllLocation();
  }, [])
  
  return (
    <>
     <HeaderPage/>

     {/* <SearchByLetter dimension={elementLocations}/> */}

     <SearchById numId={numId} setNumId={setNumId} setLocation={setLocation} location={location} topIdLocations={topIdLocations}/>

      {location ? (<>
                    <Location location={location}/>
                    
                    <ResidentsList residents={location.residents}/>
                  </>
                  ) 
                : <LoadingPage/>}
      <Footer/>
    </>
  )
}
export default App