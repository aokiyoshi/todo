import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
    return (
        
        <div class="pure-menu pure-menu-horizontal">
            <a href="/" class="pure-menu-heading pure-menu-link">TODOS</a>
            <ul class="pure-menu-list">
                <li class="pure-menu-item">
                    <Link to="/" class="pure-button">
                        Home
                    </Link>
                </li>
                <li class="pure-menu-item">
                    <Link to="/projects" class="pure-button">
                        Projects
                    </Link>
                </li>
                <li class="pure-menu-item">
                    <Link to="/users" class="pure-button">
                        Users
                    </Link>
                </li>
                <li class="pure-menu-item">
                    <Link to="/wronglink" class="pure-button">
                        Wrong Link
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar