import { useState } from "react";


export  default function LikeButton(){
     let [likebtn , setLikebtn] = useState(0)
     let [plusbtn , setPlusbtn] = useState(false)


     let chnge = () =>{
        setLikebtn((curValue)=>{
            return curValue +1

        })
        setPlusbtn(!plusbtn)

        

     }

     return (
        <>
         <div>
            <p> plus chnage to minus</p>
   <button onClick={chnge}>count is {likebtn}</button>

            <p onClick={chnge}> {plusbtn ? (<i class="fa-solid fa-minus"></i>):(<i class="fa-solid fa-plus"></i>)}
</p>
         </div>
        
        </>
     )
}