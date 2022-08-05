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
            </thead>
            <tbody>
                {todos.map((item) => <TodoItem todo={item} />)}
            </tbody>
        </table>
    )
}

export default TodoList