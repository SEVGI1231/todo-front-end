//import { useState } from "react"
//import { visitFunctionBody } from "typescript";
import { ToDoItem } from "../types";

interface Props {
  list: ToDoItem[];
}
export function CreateToDoItem({ list }: Props): JSX.Element {
  return (
    <>
      <input placeholder="Enter task here..."></input>
      <button>Submit</button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.message}</li>
        ))}
      </ul>
    </>
  );
}
