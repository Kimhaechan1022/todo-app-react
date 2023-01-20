import React from 'react'

const FoodItem = ({foodname, price}) => {
    console.log(foodname, price);
  return (
    <li>
        <a href="#">{foodname} ({price}원)</a>
    </li>
  )
}

export default FoodItem