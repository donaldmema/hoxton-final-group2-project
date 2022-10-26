import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Bussines } from "../components/Bussines";
import Description from "../components/Description";
import Header from "../components/Header";
import { Restaurants } from "../components/Restaurants";
import { Restaurant } from "../utils/types";

type Props = {
    currentUser: any;
    signOut: () => void;
  };
export function ProfilePage({currentUser, signOut}:Props){
    const [restaurant, setRestaurant] = React.useState<Restaurant | null>(null)

    const params = useParams()
  
    useEffect(() => {
      fetch(`http://localhost:3005/restaurants/${params.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          setRestaurant(result)
        }
      )
    }, [])
  
    if (!restaurant) {
      return <div>Loading...</div>
    }
    return(
        <>
        <Bussines/>
        <Header currentUser={currentUser} signOut={signOut}/>
        {/* <Description restaurant={restaurant}/> */}
        </>
    )
}