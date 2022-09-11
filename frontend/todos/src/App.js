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
import ProjectForm from './components/ProjectForm';
import TodoForm from './components/TodoForm';

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

  deleteTodo(id) {
    const headers = this.get_headers();
    axios.delete(`http://127.0.0.1:8000/api/todos/${id}`, {headers})
      .then(response => {
        this.setState({todos: this.state.todos.filter((item) => item.id !== id)})
      }).catch(error => console.log(error))
  }

  deleteProject(id){
    const headers = this.get_headers();
    axios.delete(`http://127.0.0.1:8000/api/projects/${id}`, {headers})
      .then(response => {
        this.setState({projects: this.state.projects.filter((item) => item.id !== id)})
      }).catch(error => console.log(error))
  }

  createProject(title, repo, users){
    const headers = this.get_headers();
    const data = {
      title: title,
      repo: repo,
      users: users
    }
    axios.post('http://127.0.0.1:8000/api/projects/', data, {headers})
  }

  createTodo(title, text, user, project) {
    const headers = this.get_headers();
    const data = {
      title: title,
      text: text,
      user: user,
      project: project
    }
    axios.post('http://127.0.0.1:8000/api/todos/', data, {headers})
  }

  render() {
    return (
      <div class="center">
        <Router>
          <Navbar is_login={this.is_authenticated()} _logout={() => this.logout()} />
          <Routes>
            {/* Руты */}
            {/* Заметки */}
            <Route exact path="/" element={<TodoList todos={this.state.todos}  deleteTodo={(id)=>this.deleteTodo(id)}/>} />

            <Route exact path="/todos/create" 
              element={<TodoForm users={this.state.users} projects={this.state.projects}
              createTodo={(title, text, user, project) => this.createTodo(title, text, user, project)}/>} />

            {/* Проекты */}
            <Route exact path="/projects" element={<ProjectList projects={this.state.projects} deleteProject={(id) => this.deleteProject(id)}/>} />

            <Route exact path="/projects/create" 
              element={<ProjectForm users={this.state.users} 
              createProject={(title, repo, users) => this.createProject(title, repo, users)}/>} />

            {/* Пользователи */}
            <Route exact path="/users" element={<UserList users={this.state.users} />} />

            {/* Логин */}
            <Route exact path="/login" element={<LoginForm get_token={(username, password) => this.get_token(username, password)}/>}/>

            {/* 404 */}
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}


export default App;
