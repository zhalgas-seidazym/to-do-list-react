import './App.css'
import React, {useState} from 'react';
import Header from './components/Header/Header'
import ToDoList from './components/ToDoList/ToDoList';



function App() {
  const [toDoList, setToDoList] = useState([])

  const addToDo = (toDo) => {
    setToDoList([...toDoList, toDo])
  }

  const removeToDo = (toDoIndex) => {
    setToDoList(toDoList.filter((_, index) => index !== toDoIndex))  
  }

  const toggleDone = (toDoIndex) => {   
    setToDoList(toDoList.map((toDo, index) => index === toDoIndex ? {...toDo, done: !toDo.done} : toDo))
  }
  return (
    <>
      <Header addToDoItem = {addToDo}/>
      <main>
        <ToDoList toDoList = {toDoList} removeToDo = {removeToDo} toggleDone = {toggleDone}/>
      </main>
    </>

  );
}

export default App;
