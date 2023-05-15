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

 const loadData = async () => {
  const locationInfo = await getLocationById(getRandomNumber(topIdLocations));
  
  setLocation(locationInfo);
}

  useEffect(() => {
     

     loadData();
  }, [])
  
   
  return (
    <>
      <HeaderPage/>

      <section className='controls_container'>
       <button className='btn_randomLocation' onClick={loadData}>
          Random Location
        </button>
        <div className='seach_container'>
          <input type="text" placeholder="Write the Id"  />
          <button>
              <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </section>
      {location ? (<>
                    <Location location={location}/>
                    <ResidentsList residents={location.residents}/>
                  </>
                  ) 
                : <LoadingPage/>}
    </>
  )
}

export default App
