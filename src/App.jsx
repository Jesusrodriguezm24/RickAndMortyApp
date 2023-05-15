import LoadingPage from './components/LoadingPage/LoadingPage'
import { useEffect, useState } from 'react'
import { getLocationById } from './services/getLocationById'
import getRandomNumber from './utils/getRandomNumber'
import Location from './components/Location/Location'
import ResidentsList from './components/ResidentsList/ResidentsList'
import HeaderPage from './components/HeaderPage/HeaderPage'



import './App.css'
//Tope de ubicaciones por Id.
const topIdLocations = 126;


function App() {
 const [location, setLocation] = useState(null)
  useEffect(() => {
     const loadData = async () => {
       const locationInfo = await getLocationById(getRandomNumber(topIdLocations));
       
       setLocation(locationInfo);
     }

     loadData();
  }, [])
  
   
  return (
    <>
      <HeaderPage/>
  

      {location ?  <Location location={location}/> : <LoadingPage/>}

      
      {location ? <ResidentsList residents={location.residents}/> : <LoadingPage/>}
    </>
  )
}

export default App
