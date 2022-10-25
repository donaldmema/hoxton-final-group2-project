import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Bussines } from '../components/Bussines'
import Description from '../components/Description'
import Header from '../components/Header'
import { Restaurant } from '../utils/types'
import "./RestaurantDetails.css"

function RestaurantDetails() {
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

  return (
    <>
      <Bussines />
      <Header /> 
      <Description restaurant={restaurant} />
    </>
  )
}

export default RestaurantDetails