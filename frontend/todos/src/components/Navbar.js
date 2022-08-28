import React from 'react'
import {Link} from "react-router-dom"

function Navbar({is_login, _logout}) {

    return (
        
        <div class="pure-menu pure-menu-horizontal">
            <Link to="/" class="pure-menu-heading pure-menu-link">
                        TODOS
            </Link>
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
                {!is_login &&
                <li class="pure-menu-item">
                    <Link to="/login" class="pure-button">
                        Войти
                    </Link>
                </li>
                }
                {is_login &&
                    <li class="pure-menu-item" >
                        <a href="/login" onClick={_logout} class="pure-button">
                            Выйти
                        </a>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Navbar