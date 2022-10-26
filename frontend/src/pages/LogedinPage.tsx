import React from 'react'
import { Bussines } from '../components/Bussines'
import Header from '../components/Header'
import { Reservations } from '../components/Reservations'
import { Restaurants } from '../components/Restaurants'
import { Search } from '../components/Search'
import "./LogedinPage.css";

type Props = {
  currentUser: any;
  signOut: () => void;
};
function LogedinPage({currentUser, signOut}:Props
  ) {
  return (
    <div>
      <Bussines/>
      <Header currentUser={currentUser} signOut={signOut}/>
      <Search />
      <Reservations/>
      <Restaurants/>
    </div>
  )
}

export default LogedinPage