function PureChildtoParent({valuetoupdate}){
    return(
        <div>
            <button onClick = {()=>valuetoupdate('hello from child')}>Update text</button>
        </div>
    )
}
export default PureChildtoParent