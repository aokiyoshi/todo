import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'title': '',
            'text': '',
            'user': '',
            'project': ''
        };
      }
    
    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleChangeUser(event){
      this.setState(
        {
            'user': `http://127.0.0.1:8000/api/users/${event.target.value}/`
        }
      );
    }

    handleChangeProject(event){
        this.setState(
          {
              'project': `http://127.0.0.1:8000/api/projects/${event.target.value}/`
          }
        );
    }

    //Отправка формы
    handleSubmit(event) {
        this.props.createTodo(this.state.title, this.state.text, this.state.user, this.state.project);
        event.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={(event)=> this.handleSubmit(event)} class="pure-form pure-form-stacked">
            <fieldset>
                <legend>Создать заметку</legend>
                <input type="text" name="title" placeholder="Заголовок" value={this.state.title} onChange={(event)=>this.handleChange(event)}/>
                <input type="text" name="text" placeholder="Описание" value={this.state.text} onChange={(event)=>this.handleChange(event)}/>
                <label for="user">Пользователь</label>
                <select id="user" onChange={(event)=>this.handleChangeUser(event)}>
                    <option disabled selected value> -- select an option -- </option>
                    {this.props.users.map(
                            (user) => <option value={user.id}>{user.username}</option>
                    )}
                </select>
                <label for="project">Проект</label>
                <select id="project" onChange={(event)=>this.handleChangeProject(event)} >
                    <option disabled selected value> -- select an option -- </option>
                    {this.props.projects.map(
                            (project) => <option value={project.id}>{project.title}</option>
                    )}
                </select>
                <button type="submit" class="pure-button pure-button-primary">Создать</button>
            </fieldset>
        </form>
        )
    }
}

export default TodoForm;