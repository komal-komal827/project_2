import { useEffect, useRef, useState } from "react";

function Demo2(props) {
 let[count,setCount]=useState(0);
 let count2=useRef(1)
 
 useEffect(()=>{
    console.log('render')
    console.log(count2.current)
 })

    return (
        <>
        <h1>useref component</h1>
        <h1>count-{count}</h1>
        <h1>count2-{count2.current}</h1>

        <button onClick={()=>setCount(count+1)}>click 1</button>
        <button onClick={()=>{count2.current+=1}}>click 2</button>
            
        </>
    )
}
export default Demo2;