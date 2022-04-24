import { useState } from "react"

export default function TodoInput({onAdd}){

    const [text,setText]=useState("");
    const [description,setDescription]=useState("");
    const handleClick=()=>{
        onAdd({text,description});
        setText("");
        setDescription("");
    }
    return (
        <div style={{ width: "400px", border: "2px solid black", padding: "30px", margin: "20px"}}>
            <div>
                <input type="text" placeholder="Title" value={text} onChange={(e)=>setText(e.target.value)} style={{width:"400px", border: "2px solid black", marginTop: "10px"}}/>
            </div>
            <div>
                <textarea placeholder="Body" value={description} onChange={(e)=>setDescription(e.target.value)}  style={{width:"400px", border: "2px solid black", marginTop: "10px"}}/>
            </div>
            <div style={{display: "flex", justifyContent: "end"}}>
                <button style={{ fontSize: "25px", fontWeight: "bold", margin: "10px"}} onClick={handleClick}>ADD</button>
            </div>
        </div>
    )
}