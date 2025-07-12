import react, { useMemo, useState,use } from "react";

function Demo1(props) {

    let [count, setCount] = useState(0);
    let sum = useMemo(() => {
        console.log('re-render')
        let res = 0;
        for (let i = 1; i <= 10; i++) {
            res += i;
        }
        return res;
    }, [])
    return (
        <>
            <div>
                {sum}
                <h1>Usememo component</h1>
                <h2>{count}</h2>
                <button onClick={() => setCount(count + 1)}>Click</button>
            </div>

        </>
    )
}
export default Demo1;


