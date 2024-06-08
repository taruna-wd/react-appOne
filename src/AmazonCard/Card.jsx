


function Card ({Title ,benefit1,oldPrice,price}){
    return (
        <>
        <div className="card">
            <h3>{Title}</h3>
            <p>{benefit1}</p>
            <span style={{textDecoration:" line-through"}}>{oldPrice}</span>
            <button>{price}</button>
        </div >
        
        </>
    )
}
export default Card 