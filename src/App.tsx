import { CreateToDoItem } from "./components/TodoItem";
import { useEffect, useState } from "react";
import { ToDoItem } from "./types";

function App(): JSX.Element {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [todoList, setTodoList] = useState<ToDoItem[]>();
  const loadDataFromEndPoint = async (endpoint: `/${string}`) => {
    try {
      const res = await fetch(`http://localhost:4000${endpoint}`);
      const body = await res.json();
      setTodoList(body);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (isFirstLoad) {
      loadDataFromEndPoint("/list");
      setIsFirstLoad(false);
    }
  }, [isFirstLoad]);
  return (
    <>
      <h1>To Do List</h1>
      {todoList && <CreateToDoItem list={todoList} />}
    </>
  );
}

export default App;
