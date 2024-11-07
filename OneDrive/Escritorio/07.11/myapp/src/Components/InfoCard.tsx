import { useState } from "react"

export function InfoCard():JSX.Element{

    const [name,setName] = useState<string>("Pablo")
    const [age,setAge] = useState<number>(32)
    const [hobbie,setHobbie] = useState<string>("Basketball")
    const [visible,setVisible] = useState<boolean>(true)
    function hideorshow(){
        setVisible(!visible)
    }
    return(
        <div>
            <button onClick={hideorshow}>   {visible?"Hide":"Show"}  </button>
            {
                visible && <div>
                <p> My name is {name}</p>
                <p> My hobbies are: {hobbie}</p>
                <p> im {age} years old</p>
            </div>   
            }
        </div>
    )
}