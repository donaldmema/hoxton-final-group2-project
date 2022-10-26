import React from 'react'
import "./HomePage.css";
import { Bussines } from '../components/Bussines'
import Header from '../components/Header'
import { Search } from '../components/Search'
import { Restaurants } from '../components/Restaurants';
import JoinUs from '../components/ JoinUs';
type Props = {
  currentUser: any;
  signOut: () => void;
};
function HomePage({currentUser, signOut}:Props) {
  return (
    <div>
      <Bussines/>
         <Header currentUser={currentUser} signOut={signOut} />
         <Search />
         <Restaurants/>
         <JoinUs/>
    </div>
  )
}

export default HomePage