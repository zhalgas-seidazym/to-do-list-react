import './ToDo.css'

export default function ToDo({removeToDo, toggleDone, toDo, index}){
    return (
        <div className="to-do">
            <input 
                className='checkbox' 
                type="checkbox" name="" id="" 
                checked={toDo.done} 
                onChange={() => toggleDone(index)}
            />
            <p 
                className="description completed-text" 
                style={{textDecoration: toDo.done ? 'line-through' : 'none'}
            }>{toDo.description}</p>
            <button className="btn delete-btn" onClick={() =>removeToDo(index)}>❌</button>
        </div>
    )
}