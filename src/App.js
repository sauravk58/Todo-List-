 import './App.css';
import Navbar from "./components/Navbar"
import TodoForm from './components/TodoForm';
import {useState,useEffect} from "react"
import TodoList from "./components/TodoList"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [todo,setTodo]=useState([]);
  //on rendering we want to store todos form localstorage into storetodos.
  useEffect(()=>{
    const storedTodos=JSON.parse(localStorage.getItem("todos"))||[];
    setTodo(storedTodos);
  },[])
  const addTask=(text)=>{
    //creating object
    const newTask={
      id:Date.now(),
      text
    };
    //The unshift() method adds new elements to the beginning of an array.
    setTodo(todo.unshift(newTask));
    //save into local storage for that use setItem where key as todos.
    localStorage.setItem("todos",JSON.stringify(todo));
    // alert("New task added")
    toast.success("New Task Added");
    //after adding add new storage.
    setTodo(JSON.parse(localStorage.getItem("todos")));
  };
  const deleteTask=(id)=>{
    //filter all delete items
    const filteredTodos=todo.filter(item=>item.id!==id);
    //update item
    localStorage.setItem("todos",JSON.stringify(filteredTodos));
    setTodo(filteredTodos);
    toast.success("Task Deleted");
  }
  return (
    <>
    <Navbar/>
    <TodoForm text={todo} add={addTask}/>
    <TodoList todo={todo} deleteTask={deleteTask} ></TodoList>
    {/* to show alert message */}
    <ToastContainer position='top-right' theme="dark"/>
    </>
  );
}

export default App;
