import {useRef} from 'react'

function UseRefFunction(){
    const inputRef = useRef(null)

    return(
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={()=>inputRef.current.focus()}>focus input</button>
        </div>
    )
}

export default UseRefFunction