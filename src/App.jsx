import './App.css'
import React, {useState} from 'react';
import Header from './components/Header/Header'
import ToDoList from './components/ToDoList/ToDoList';



function App() {
  const [toDoList, setToDoList] = useState([])

  const addToDo = (toDo) => {
    setToDoList((prevToDoList) => [...prevToDoList, toDo])
  }

  const removeToDo = (toDoIndex) => {
    setToDoList((prevToDoList) => prevToDoList.filter((_, index) => index !== toDoIndex))  
  }

  const toggleDone = (toDoIndex) => {
    const update = [...toDoList]
    update[toDoIndex] = {
      description: update[toDoIndex].description,
      done: !update[toDoIndex].done
    }    
    setToDoList(update)
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
