//import { useState } from "react"
//import { visitFunctionBody } from "typescript";
import axios from "axios";
import { ToDoItem } from "../types";
interface Props{
    lastSubmitted: string
  }
interface Props {
  list: ToDoItem[];
  toDoInput: string;
  setToDoInput: React.Dispatch<React.SetStateAction<string>>;
  setLastSubmitted: React.Dispatch<React.SetStateAction<string>>;
  setToDoList: React.Dispatch<React.SetStateAction<ToDoItem[]|undefined>>
}
export function CreateToDoItem({ list, toDoInput, setToDoInput, setLastSubmitted , setToDoList}: Props): JSX.Element {
    
    function postNewToDo(){
        axios.post("http://localhost:4000/list", {
            message:toDoInput
        })
        .then(()=>setLastSubmitted(toDoInput))
        .then(()=>setToDoInput(""));
    }

    async function deleteItem(id:string){
        console.log({id})
        const response = await axios.delete(`http://localhost:4000/list/${id}`)
        const body= await response.data
        setToDoList(body)

    }
    return (
        <>
            <input type="text"
                value={toDoInput}
                onChange={(e) => setToDoInput(e.target.value)}
                placeholder="Enter task here..."></input>
            <button onClick={postNewToDo}>Submit</button>
            
            {list.map((item)=>
                 <button key={item.id} onClick={()=>deleteItem(item.id)} style={{display:"flex"}}>{item.message}</button>
             )}   
        </>
  );
}
