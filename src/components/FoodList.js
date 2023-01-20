import React from 'react'
import FoodItem from './FoodItem'

const FoodList = () => {
  return (
    <ul>
        <FoodItem foodname = "짜짱면쓰" price = {1000}/>
        <FoodItem foodname = "짬뿅" price = {2000}/>
        <FoodItem foodname = "뽂음빱" price = {4000}/>
        <FoodItem foodname = "땅쑤윢" price = {8000}/>
    </ul>
  )
}

export default FoodList