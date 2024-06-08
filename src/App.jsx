
// import './App.css'
import { useState } from 'react'
import CardTab from './AmazonCard/CardTab'
// import Product from './Product'
import './Product.css'
import LikeButton from './LikeButton';

function App() {
  let [count , setCount] = useState(0);
  let [mul , setMul] = useState(1);



  function incount (){
   setCount(count+1);
  }
  function mulcount(){
    setMul(mul * 2);
  }
  return (
    <>
        {/* <Product Title ="mobile"   description ="Enternment" price={idx[0]}/>
        <Product Title ="AC"  description ="cool air" price={price}/>
        <Product Title = "Fridge" description="Drink chilled water" price={price}/> */}
        <CardTab/>
        <h2>plus by 1 </h2>

        <button onClick={incount}> count {count}</button>
        <h2>multiply by 2 </h2>
        <button onClick={mulcount}> count {mul}</button>
       <LikeButton/>

    </>
  )
}

export default App
