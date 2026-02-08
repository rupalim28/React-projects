import { useState,useEffect } from "react";

function UseEffectFunction(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log(count,"count")
    },[count])
    return(
        <>
        <p>count is :{count}</p>
        <button onClick={()=>setCount(count + 1)}>add</button>
        </>
    )
}

export default UseEffectFunction