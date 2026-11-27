import { useState } from "react"

export const RnD = ({pagetitle}) => {
    const [name, setName] = useState("Vishal");
    //Normal Function
    function clickButton(){
        alert("clicked");
        setName("Amol");
    }
    //Fat Arrow Function
    const clickButtonFArrow=()=>{
        alert("clicked");
        setName("Shekhar");
    }
    return(
        <div>
            <h1 className="page-title">{pagetitle}</h1>
            <h5>{name}</h5>
            <input type="text" onChange={(event)=>setName(event.target.value)} value={name} style={{"width": "100px"}} /> <span>: State Update using onChange event and event.target.value</span>
            <hr />
            <button onClick={clickButton}>Click - function clickButton()</button> <span>: Calls the clickButton function when the button is clicked (without parentheses)</span>
            <hr />
            <button onClick={clickButtonFArrow}>Click - const clickButtonFArrow</button> <span>: Calls the arrow function when the button is clicked</span>
            <hr />
            <button onClick={()=>setName("Sonu")}>Click</button> <span>: Updates the name state to "Sonu" using an inline arrow function onClick</span>
            <hr />
        </div>
    )
}