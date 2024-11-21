import './Header.css'
import React, {useState} from 'react'

export default function Header({addToDoItem}){
    const [description, setDescription] = useState("")
    const [isWrong, setIsWrong] = useState(false)

    function handleOnChange(e){
        setDescription(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(description.length === 0){
            setIsWrong(true)
            setTimeout(() => {
                setIsWrong(false)
            }, 1000)
        }
        else{
            addToDoItem({
                description: description, 
                done: false
            })
            setDescription("")
        }
    }
    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input 
                className='task-input' 
                type="text"  placeholder='Enter task ...' 
                value={description}
                onChange={handleOnChange}
                />
                <button className = {`btn submit-btn ${isWrong ? 'submit-false' : ''}`} type="submit">+</button>
            </form>
        </header>
    )
}