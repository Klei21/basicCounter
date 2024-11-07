import { useState } from "react"
import css from "./Counter.module.css"

export function Counter():JSX.Element{

    // let num:number = 0;
    const [num, setNum] = useState<number>(0);
    let name:string = "ezequiel"

    function increment(){
        // num++
        setNum(num+1)
    }
    return(
        <div className={css.container}>
            <h1 className={css.title}>My counter </h1>
            <p>my name is {name}</p>
            <button className={css.btn} onClick={increment}>+</button>
            {num}
        </div>
    )
}