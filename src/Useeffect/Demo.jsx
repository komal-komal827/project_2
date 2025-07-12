import { use, useEffect, useState } from "react";

function Demo(props) {
    let [count, setCount] = useState(0);
    let [name, setName] = useState(0);

    //     useEffect(()=>{
    //         console.log('component updated')
    //     })

    useEffect(() => {
        console.log('component updated')
    }, [])

    //  useEffect(()=>{
    //   console.log('component updated')
    //},[name,count])


    return (
        <>
            <h1>Use Effect Demo component</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br /><br />
            <input type="text" onChange={(e) => setName(e.target.value)} />
        </>
    )
}
export default Demo;

