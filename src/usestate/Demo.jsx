import React, { useState } from "react";

function Demo(props) {
    let [no1, setno1] = useState(0)
    let [no2, setno2] = useState(0)
    let [res, setres] = useState(0)
    let [city, setcity] = useState('')

    function add() {
        setres(Number(no1) + Number(no2))
    }

    function sub() {
        setres(Number(no1) - Number(no2))
    }

    return (
        <>
            <h1>Demo component</h1>
            <hr />
            select city:  <select name="" id="" onChange={(e)=>setcity(e.target.value)}>
                <option value="Nashik">Nashik</option>
                <option value="shirdi">shirdi</option>
            </select>
            <hr />

            No1:<input type="text" onChange={(e) => setno1(e.target.value)} />
            <br /><br />
            No2:<input type="text" onChange={(e) => setno2(e.target.value)} />
            <br /><br />
            Result:{res}
            <br /><br />
            <button onClick={add}>Add</button>
            <button onClick={sub}>sub</button>




        </>
    )
}
export default Demo;
