import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import '../assets/styles/App.scss'
import Categories from '../components/Categories'
import Carrusel from '../components/Carrusel'
import CarruselItem from '../components/CarruselItem'
import Footer from '../components/Footer'
const App = ()=>{
  return(
    <div className='App'>
      <Header/>
      <Search/>
      <Categories title='Peliculas'>
        <Carrusel>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
        </Carrusel>
      </Categories>
      <Categories title='Originals'>
        <Carrusel>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
        </Carrusel>
      </Categories>
      <Categories title='Trending'>
        <Carrusel>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
          <CarruselItem/>
        </Carrusel>
      </Categories>
      <Footer/>
    </div>
  )
}
export default App