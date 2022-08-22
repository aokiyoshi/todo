import React from 'react'


function UserItem({user}) {
    return (
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
            </td>
            <td>
                {user.email}
            </td>
        </tr> 
    )
}


function UserList({users}) {
    return (
        <table class="pure-table">
            <thead>
                <th>
                    Username
                </th>
                <th>
                    Frist Name
                </th>
                <th>
                    Last Name
                </th>
                <th>
                    Email
                </th>
            </thead>
            <tbody>
                {users.map((item) => <UserItem user={item} />)}
            </tbody>
        </table>
    )
}

export default UserList