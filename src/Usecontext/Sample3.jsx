import react, { useContext } from "react";
import { myContext } from "./Sample1";

function Sample3(props) {
    let stud = useContext(myContext);

    return (
        <>
            <div style={{ border: '2px solid black', padding: '15px',background:"grey" }}>
                <h1>Sample 3</h1>
                {stud.name}
            </div>
        </>
    )
}
export default Sample3;
