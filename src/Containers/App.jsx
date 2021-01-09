import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import '../assets/styles/App.scss'
import Categories from '../components/Categories'
import Carrusel from '../components/Carrusel'
import CarruselItem from '../components/CarruselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'
const API = 'http://localhost:3000/initalState'
const App = ()=>{
  const videos = useInitialState(API);
  return(
    <div className='App'>
      <Header/>
      <Search/>
      {videos.mylist.length > 0 &&
        (
          <Categories title='Mi list'>
            <Carrusel>
              {videos.mylist.map(item=>{
                return(
                  <CarruselItem key={item.id} {...item} />
                )
              })}
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
          {
            videos.originals.map(item => {
              return(
                <CarruselItem key={item.id} {...item} ></CarruselItem>
              )
            })
          }
        </Carrusel>
      </Categories>
      <Footer/>
    </div>
  )
}
export default App