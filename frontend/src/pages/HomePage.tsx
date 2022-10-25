import React from 'react'
import "./HomePage.css";
import { Bussines } from '../components/Bussines'
import Header from '../components/Header'
import { Search } from '../components/Search'

function HomePage() {
  return (
    <div>
      <Bussines/>
         <Header />
         <Search />
    </div>
  )
}

export default HomePage