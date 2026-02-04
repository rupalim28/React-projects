function Childcomponentt({ogname,updatedname}){
    return(
        <div>
            <h1>Child Component</h1>
            <button onClick = {()=>updatedname("updated from child as Rupali Patil")}>Update Text</button>
        </div>
    )
}
export default Childcomponentt