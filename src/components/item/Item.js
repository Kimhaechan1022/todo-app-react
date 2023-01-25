import React from 'react'

// props는 부모컴포넌트가 속성값으로 전달한 데이터 객체
const Item = ({ foodInfo }) => {

//   console.log('props: ', props.foodInfo);
//   console.log('foodInfo: ', foodInfo);

  const { foodName, price, quantity } = foodInfo;

  return (
    <li key={foodName}>음식명: {foodName}, 가격: {price}, 수량: {quantity}</li>
  )
}

export default Item