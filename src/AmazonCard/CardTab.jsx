

import Card from './Card'

function onClick(event){
    console.log("hello ")
    console.log(event)
}
function CardTab(){
    
    return (
        <>
            <div>
            <h2> All are the most selling card</h2>

            <div className="collection">

            <Card Title="Design Delight" benefit1="long" oldPrice={1200} price={4000}/>
            <Card Title="Invention Ventures" benefit1="long" oldPrice={1500} price={4000}/>
            <Card Title="Creative Commodities" benefit1="long" oldPrice={2300} price={4000}/>
            <Card Title="Tech Transformations" benefit1="long" oldPrice={2500} price={4000}/>
            <button onMouseEnter={onClick}> click me</button>

            </div>
           
        </div>
        </>
    )
}
export default CardTab