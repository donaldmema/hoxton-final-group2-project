import React from 'react'
import { Bussines } from '../components/Bussines'
import Header from '../components/Header'
import { Reservations } from '../components/Reservations'
import { Restaurants } from '../components/Restaurants'
import { Search } from '../components/Search'
import "./LogedinPage.css";

function LogedinPage() {
  return (
    <div>
      <Bussines/>
      <Header/>
      <Search />
      <Reservations/>
      <Restaurants/>
    </div>
  )
}

export default LogedinPage