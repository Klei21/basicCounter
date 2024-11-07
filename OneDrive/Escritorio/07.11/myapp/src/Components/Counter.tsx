import { useState } from "react"

export function Counter():JSX.Element{

    // let num:number = 0;
    const [num, setNum] = useState<number>(0);
    let name:string = "ezequiel"

    function increment(){
        // num++
        setNum(num+1)
    }
    return(
        <div>
            <p>my name is {name}</p>
            <button onClick={increment}>+</button>
            {num}
        </div>
    )
}