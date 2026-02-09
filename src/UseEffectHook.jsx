import {useEffect} from "react";

function UseEffectHook (){
    useEffect(()=>{
        console.log("rerendered");
        
        //this is cleanup function
        return() => {
            console.log("unmounted")
        }
         //this is cleanup function
    },[]);

    return (
        <div>
            <p>UseEffect HookExample</p>
        </div>
    )
}

export default UseEffectHook;

// Note:-
// This component uses useEffect to run code once when the component loads
// and run cleanup code when the component is removed (unmounted).


// This function runs when:
// the component is removed from the screen
// or before the effect runs again (not here, because [])
// Example situations:
// navigating to another page
// conditional rendering hides this component
// This is where you:
// clear timers
// remove event listeners
// cancel API calls