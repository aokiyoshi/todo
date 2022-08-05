import React from 'react'


function Navbar() {
    return (
        <div class="pure-menu pure-menu-horizontal">
            <a href="/" class="pure-menu-heading pure-menu-link">TODOS</a>
            <ul class="pure-menu-list">
                <li class="pure-menu-item">
                    <a href="/" class="pure-menu-link">Main page</a>
                </li>
                <li class="pure-menu-item">
                    <a href="#" class="pure-menu-link">Contacts</a>
                </li>
                <li class="pure-menu-item">
                    <a href="#" class="pure-menu-link">Something else</a>
                </li>
                <li class="pure-menu-item">
                    <a href="#" class="pure-menu-link">Login</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar