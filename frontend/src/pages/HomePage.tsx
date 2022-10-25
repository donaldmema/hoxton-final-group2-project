import React from 'react'
import "./HomePage.css";
import { Bussines } from '../components/Bussines'
import Header from '../components/Header'
import { Search } from '../components/Search'
import { Restaurants } from '../components/Restaurants';

function HomePage() {
  return (
    <div>
      <Bussines/>
         <Header />
         <Search />
         <Restaurants/>
    </div>
  )
}

export default HomePage