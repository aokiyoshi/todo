import React from 'react'
import {Link} from "react-router-dom"


function TodoItem({todo, deleteTodo}) {
    return (
        <tr>
            <td>
                {todo.title}
            </td>
            <td>
                {todo.text}
            </td>
            <td>
                {todo.user}
            </td>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.status}
            </td>
            <td>
                <button onClick={() => deleteTodo(todo.id)} type='button'>Delete</button>
            </td>
        </tr> 
    )
}


function TodoList({todos, deleteTodo}) {
    return (
        <div>
            <button>
                <Link to="/todos/create/" class="pure-button">
                    Создать
                </Link>
            </button>
            <table class="pure-table">
                <thead>
                    <th>
                        Title
                    </th>
                    <th>
                        Text
                    </th>
                    <th>
                        User
                    </th>
                    <th>
                        Project
                    </th>
                    <th>
                        Status
                    </th>
                    <th></th>
                </thead>
                <tbody>
                    {todos.map((item) => <TodoItem todo={item} deleteTodo={deleteTodo} />)}
                </tbody>
            </table>
        </div>
    )
}

export default TodoList