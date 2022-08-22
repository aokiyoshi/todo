import React from 'react';
import './App.css';
import axios from 'axios'
import TodoList from './components/Todos';
import Navbar from './components/Navbar';
import ProjectList from './components/Projects';
import UserList from './components/Users';
import NotFound from './components/NotFound';

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
      'users': []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/todos')
        .then(response => {
          this.setState(
            {
              'todos': response.data.results
            }
          )
    }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/api/projects')
        .then(response => {
          this.setState(
            {
              'projects': response.data.results
            }
          )
    }).catch(error => console.log(error));

    axios.get('http://127.0.0.1:8000/api/users')
        .then(response => {
          this.setState(
            {
              'users': response.data.results
            }
          )
    }).catch(error => console.log(error));

  }

  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<TodoList todos={this.state.todos} />} />
            <Route exact path="/projects" element={<ProjectList projects={this.state.projects} />} />
            <Route exact path="/users" element={<UserList users={this.state.users} />} />
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </Router>
      </div>
    )
  }
}



export default App;
