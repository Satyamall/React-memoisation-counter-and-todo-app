import React from "react";
import { useMemo } from "react";
import randomColor from "randomcolor";

const delay=(time)=>{
    const start = Date.now();
  while (Date.now() - start < time) {
    continue;
  }
  return start;
}

const areEqual = (prevProps, nextProps) => {
    if (prevProps.status === nextProps.status) {
      return true;
    }
    return false;
};

function TodoItem({title,body,id,verify,onVerify}){

    const time = useMemo(()=>delay(1000),[]);
    var colors = "black";
    if(!verify){
        colors= randomColor();
    }
    return (
        <div style={{ width: "400px", border: "2px solid black", padding: "30px", margin: "20px"}}>
            <div style={{display: "flex", gap: "2rem", alignItems: "center"}}>
            <div style={{width: "30px", height:"30px", border: "2px solid black",background: `${colors}`}}></div>
           <div>
               <h1>Title: {title}</h1>
               <h1>Body: {body}</h1>
           </div>
            </div>
           <div>
               <button onClick={()=>onVerify(id)} style={{padding: "10px 20px", fontSize: "25px", fontWeight: "bold",cursor: "pointer"}}>Verify</button>
           </div>
        </div>
    )
}

export const MemoisedTodoItem = React.memo(TodoItem, areEqual);

// export default TodoItem;
