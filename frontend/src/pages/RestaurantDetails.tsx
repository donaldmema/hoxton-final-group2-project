import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Bussines } from '../components/Bussines'
import Description from '../components/Description'
import Header from '../components/Header'
import "./RestaurantDetails.css"

function RestaurantDetails() {

  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:3005/restaurants/${params.id}`)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])

  return (
    <>
      <Bussines />
      <Header />
      <Description />
    </>
  )
}

export default RestaurantDetails