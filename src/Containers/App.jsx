import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import '../assets/styles/App.scss'
import Categories from '../components/Categories'
import Carrusel from '../components/Carrusel'
import CarruselItem from '../components/CarruselItem'
import Footer from '../components/Footer'
const App = ()=>{
  const [videos,setVideos] = useState({mylist:[], trends:[], originals:[]});
  useEffect(()=>{
    fetch('http://localhost:3000/initalState')
    .then(response => response.json())
    .then(data => setVideos(data))

  },[])
  
  return(
    <div className='App'>
      <Header/>
      <Search/>
      {videos.mylist.length > 0 &&
        (
          <Categories title='Mi list'>
            <Carrusel>
              
            </Carrusel>
          </Categories>
        )
      }
      <Categories title='Tendencias'>
        <Carrusel>
          {
            videos.trends.map(item=>{
              return(
                <CarruselItem key={item.id} {...item} />
              )
            })
          }
        </Carrusel>
      </Categories>
      <Categories title='Originals'>
        <Carrusel>

        </Carrusel>
      </Categories>
      <Footer/>
    </div>
  )
}
export default App