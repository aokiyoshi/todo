import React from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie';

import './App.css';

import TodoList from './components/Todos';
import Navbar from './components/Navbar';
import ProjectList from './components/Projects';
import UserList from './components/Users';
import NotFound from './components/NotFound';
import LoginForm from './components/Auth';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'todos': [],
      'projects': [],
      'users': [],
      'token': '',
    };
  }

  set_token(token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    this.setState({'token': token}, () => this.load_data())
  }

  
  is_authenticated() {
    // eslint-disable-next-line
    return this.state.token != ''
  }

  logout() {
    console.log('!!!!!!!!!!!!!!!!!')
    this.set_token('')
  }

  get_token_from_storage() {
    const cookies = new Cookies()
    const token = cookies.get('token')
    this.setState({'token': token}, () => this.load_data())
  }

  get_token(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', 
        {
            username: username,
            password: password
        }
    ).then(response => 
        {
            this.set_token(response.data['token'])
        }
    ).catch(error => alert('Неверный логин или пароль'))
  }

  load_data() {
    const headers = this.get_headers()
    axios.get('http://127.0.0.1:8000/api/todos', {headers})
        .then(response => {
          this.setState(
            {
              'todos': response.data.results
            }
          )
    }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/api/projects', {headers})
        .then(response => {
          this.setState(
            {
              'projects': response.data.results
            }
          )
    }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/api/users', {headers})
        .then(response => {
          this.setState(
            {
              'users': response.data.results
            }
          )
    }).catch(error => console.log(error));

  }
  
  get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.is_authenticated())
    {
      headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }


  componentDidMount() {
    this.get_token_from_storage()
  }

  render() {
    return (
      <div class="center">
        <Router>
          <Navbar is_login={this.is_authenticated()} _logout={() => this.logout()} />
          <Routes>
            <Route exact path="/" element={<TodoList todos={this.state.todos} />} />
            <Route exact path="/projects" element={<ProjectList projects={this.state.projects} />} />
            <Route exact path="/users" element={<UserList users={this.state.users} />} />
            <Route exact path="/login" element={<LoginForm get_token={(username, password) => this.get_token(username, password)}/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}



export default App;
