import { useState } from "react";

function UseStateCount(){
    const [count,setCount] = useState(0);

    return(
        <div>
            <p>Count:{count}</p>
            <button onClick={()=>setCount(count + 1)}>add</button>
            <button onClick={()=>setCount(count - 1)}>sub</button>
        </div>
    )
}

export default UseStateCount;


