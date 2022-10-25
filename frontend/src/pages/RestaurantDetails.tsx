import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Bussines } from '../components/Bussines'
import Description from '../components/Description'
import Header from '../components/Header'
import { Restaurant } from '../utils/types'
import "./RestaurantDetails.css"

type Props = {
  restaurants: Restaurant[]
}

function RestaurantDetails( {restaurants}: Props) {

  const params = useParams()

  return (
    <>
      <Bussines />
      <Header />
      {restaurants.filter(restaurant => restaurant.id === params.id ).map((restaurant) => 
        <Description restaurant={restaurant} />
      )}
      
    </>
  )
}

export default RestaurantDetails