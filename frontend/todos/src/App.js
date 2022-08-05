import React from 'react';
import './App.css';
import axios from 'axios'
import TodoList from './components/Todos';
import Navbar from './components/Navbar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'todos': []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/todos')
        .then(response => {
          const todos = response.data
          this.setState(
            {
              'todos': todos
            }
          )
    }).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Navbar/>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}



export default App;
