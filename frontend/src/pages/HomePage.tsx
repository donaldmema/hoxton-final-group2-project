import React from 'react'
import "./HomePage.css";
import { Bussines } from '../components/Bussines'
import Header from '../components/Header'
import { Search } from '../components/Search'
import { Restaurants } from '../components/Restaurants';
import JoinUs from '../components/ JoinUs';

function HomePage() {
  return (
    <div>
      <Bussines/>
         <Header />
         <Search />
         <Restaurants/>
         <JoinUs/>
    </div>
  )
}

export default HomePage