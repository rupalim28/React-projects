import {useState,useRef,useEffect} from 'react'

function UseRefEffectState(){
    const [counts,setCount] = useState(0)
        // count → current value (shown on UI)
        // setCount → updates count
        // When count changes → component re-renders
    const prevCount = useRef(0)
        // prevCount.current stores a value
        // Changing it does NOT cause re-render
        // Perfect for storing previous data
    useEffect(()=>{
        prevCount.current = counts
    },[counts])
        // This effect runs after render
        // Runs every time count changes
        // It saves the old count into prevCount.current

        // we use  useRef instead of useStatetbcoz useState updates trigger a re-render (and can cause repeated or infinite updates), while useRef lets us store the previous value without re-rendering the component.
    return(
        <div>
            <p>current count:{counts}</p>
            <p>Previous count:{prevCount.current}</p>
            <button onClick={()=>setCount(counts => counts + 1)}>Add</button>
        </div>
    )
}

export default UseRefEffectState