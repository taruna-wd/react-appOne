 import './Product.css'

function Product({Title ,description , price}){
    // const list = price.map((prices) => <li>{prices}</li>  )
    const price = [20000 , 60000 , 40000]

    return (
        <div className="product">
        <h3>{Title}</h3>  
        <h5>{price.idx}</h5>
        <p>
           {description} 
        </p>


        </div>
        
        
    )
}

export default Product