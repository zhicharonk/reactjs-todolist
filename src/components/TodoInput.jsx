import { useState } from "react"

export default function TodoInput(props) {
    const {handleAddTodos, todoValue, setTodoValue} = props
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter to-do..." type="text" />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')}}>
                Add
            </button>
        </header>
    )
}