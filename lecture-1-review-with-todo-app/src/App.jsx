import { useState } from "react"
import produce from "immer"

import "./App.css"

const initialState = ["cook dinner", "feed cat"]

export function App() {
    const [todos, setTodos] = useState(initialState)

    return (
        <div className="App">
            <TodoForm setTodos={setTodos} />
            <TodoList todos={todos} />
        </div>
    )
}

function TodoForm(props) {
    const [todoInputValue, setTodoInputValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        // console.log(e.target)

        // without immer
        // props.setTodos((todos) => {
        //     const newState = [...todos, todoInputValue]
        //     return newState
        // })

        // with immer
        props.setTodos((todos) => {
            const newState = produce(todos, (draft) => {
                draft.push(todoInputValue)
            })

            return newState
        })

        // with immer and without immer is equivalent. But immer is the better DX (developer experience)

        setTodoInputValue("")
    }

    return (
        <div className="TodoForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="todo">Todo</label>
                    <input
                        name="todo"
                        type="text"
                        value={todoInputValue}
                        onChange={(e) => setTodoInputValue(e.target.value)}
                    />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

function TodoList(props) {
    const lst = props.todos.map((el) => {
        return <li key={`todo-item-${Math.random()}`}>{el}</li>
    })

    return (
        <div className="TodoList">
            <ul>{lst}</ul>
        </div>
    )
}
