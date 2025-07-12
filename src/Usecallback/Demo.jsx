import  React,{ useMemo, useState } from "react";

import { useCallback } from "react";

// function Demo(props) {
//  let[count,setCount]=useState(0)   

//  let show = useMemo(()=>{
//     console.log('re-render')
//     console.log('useMemo function memoized this show.')
//     let a=100+200
//     return a
//  },[])

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Click</button>
//             <h3>computed value:{show}</h3>
//         </div>
//     )
// }
// export default Demo;


// function  Demo1(props) {
//     let[count,setCount]=useState(0)

//     let show=useCallback(()=>{
//         console.log('re-render')
//         console.log('Usecallback function memoized this show.')
//     },[])
    

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>setCount(count+1)}>Click</button>
//             <button onClick={show}>Click 2</button>
            
//         </div>
//     )
// }
// export default Demo1;

let Show=React.memo(()=>{
    console.log('re-render')
    console.log('React.memo function memoized this show.')
    return(
        <h1>Hello world</h1>
    )

})
function Demo2(props) {
    
let[count,setCount]=useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
            <Show/>
            
        </div>
    )
}
export default Demo2;


