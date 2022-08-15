import { CreateToDoItem } from "./components/TodoItem";
import { useEffect, useState } from "react";
import { ToDoItem } from "./types";
import axios from "axios";



function App(): JSX.Element {
  //const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [todoList, setTodoList] = useState<ToDoItem[]>();
  const [toDoInput, setToDoInput]=useState<string>("")
  const [lastSubmitted, setLastSubmitted]=useState<string>("")

  async function loadDataFromEndPoint(endpoint: `/${string}`) {
    try {
      const response = await axios.get(`http://localhost:4000${endpoint}`);
      const body = await response.data;
      console.log(response);
      setTodoList(body);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    //if (isFirstLoad) {
      loadDataFromEndPoint("/list");
      //setIsFirstLoad(false);
    //}
    }, [lastSubmitted]);
  return (
    <>
      <h1>To Do List</h1>
      {todoList && <CreateToDoItem  list={todoList} setToDoInput={setToDoInput} toDoInput={toDoInput} setLastSubmitted={setLastSubmitted} lastSubmitted={lastSubmitted} setToDoList={setTodoList}/>}
    </>
  );
}

export default App;
