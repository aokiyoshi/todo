import React from 'react'


function TodoItem({todo}) {
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
        </tr> 
    )
}


function TodoList({todos}) {
    return (
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
            </thead>
            <tbody>
                {todos.map((item) => <TodoItem todo={item} />)}
            </tbody>
        </table>
    )
}

export default TodoList