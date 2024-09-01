import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './Components/Search'
import Result from './Components/Result'
import axios from 'axios'

function App() {
  const [search, setSeacrh] = useState("")
  const [weather , setWeather] = useState([])
  const [history , setHistory] = useState([])

  const changeSearch = (value)=> {
      setSeacrh(value)
  }


  // const getWeatherData = ()=>{

  //   axios.get(
  //     https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=df3dccadd0393cd9d236c322ef90b9b5
  //   ).then((response)=>{
  //       console.log('response=>' , response);
        
  //   }).catch((err)=>{
  //       console.log(err);
        
  //   })


  // }

 const historySearchHandlor = async (data)=> {
   await setSeacrh(data)
    searchWeatherHandler();

    if(data !== ""){
      axios.get(
         `https://api.openweathermap.org/data/2.5/weather?q=${data}&appid=df3dccadd0393cd9d236c322ef90b9b5`
      ).then((response)=>{
          // console.log('response=>' , response);
          if(history.indexOf(data) === -1) {
            setHistory(
              [
                ...history,
                data
              ]
            )
          }
          setWeather(response.data)
          
      }).catch((err)=>{
          console.log(err);
          
      })
    }
 }



  const searchWeatherHandler = ()=> {
    
    if(search !== ""){
      axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=df3dccadd0393cd9d236c322ef90b9b5`
      ).then((response)=>{
          // console.log('response=>' , response);
          if(history.indexOf(search) === -1) {
            setHistory(
              [
                ...history,
                search
              ]
            )
          }
          setWeather(response.data)
          
      }).catch((err)=>{
          console.log(err);
          
      })
    }

    }
   

  return (
    <div className='max-w-[1240px] mx-auto mt-2 p-3  shadow-orange-100 '>
     <Search searchData = {search} eventHandler = {changeSearch} searchWeather={searchWeatherHandler}/>
     <Result weatherData = {weather} historyData={history} historySearch={historySearchHandlor}/>
    </div>
  )
}

export default App
