import react, { useState } from "react";

function Demo(props) { 
    let[count,setCount]=useState(0);
    let sum=()=>{
        let res=0;
        for(let i=1; i<=10;i++)
            {
                res+=i;
            }
            console.log(res)
    }

    return (
        <>
        {sum()}
           <h1>usememo component</h1> 
           <h2>{count}</h2>
           <button onClick={()=>setCount(count+1)}>Click</button>
        </>
    )
}
export default Demo;
