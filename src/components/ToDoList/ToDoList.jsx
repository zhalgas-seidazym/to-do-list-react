import './ToDoList.css'
import ToDo from '../ToDo/ToDo'

export default function ToDoList({toDoList, removeToDo, toggleDone}){

    return (
        <div className='to-do-list'>
            {toDoList.map( (toDo, index) => 
                <ToDo key={index} removeToDo = {removeToDo} toggleDone = {toggleDone} toDo = {toDo} index = {index}/>
            )}
        </div>
    )
}