import react, { useEffect, useState } from "react";

function Demo1(props) {
    let [count, setCount] = useState(0);

    useEffect(( ) => {
        console.log("component is render")
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    })

    return (
        <>
            <h1>I've rendered {count} times!</h1>
        </>
    )
}
export default Demo1;
