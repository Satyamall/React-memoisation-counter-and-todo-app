import { useState } from "react";
import TodoInput from "./TodoInput";
import { v4 as uuid } from "uuid";
import { MemoisedTodoItem } from "./TodoItems";

export default function Todo() {
    const [data, setData] = useState([
        // {
        //     title:"",
        //     body:"",
        //     verify: false
        // }
    ])

    const handleAdd = ({ text, description }) => {
        const payload = {
            id: uuid(),
            title: text,
            body: description,
            verify: false
        }
        setData([...data, payload]);
    }
    console.log(data);

    const handleVerify = (id) => {
        setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, verify: !item.verify } : item
      )
    );
    }
    return (
        <div>
            <TodoInput onAdd={handleAdd} />
            {
                data?.map((item) => {
                    return <MemoisedTodoItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        body={item.body}
                        verify={item.verify}
                        onVerify={handleVerify}
                    />
                })
            }
        </div>
    )
}