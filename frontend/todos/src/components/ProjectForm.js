import React from 'react'


class ProjectForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'title': '',
            'repo': '',
            'users': []
        };
      }
    
    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    //Изменение чекбоксов с юзерами
    handleChangeUsers(event){
      if (event.target.checked) {
        this.state.users.push(`http://127.0.0.1:8000/api/users/${event.target.id}/`)
      } else {
        this.state.users.pop(`http://127.0.0.1:8000/api/users/${event.target.id}/`)
      }
    }

    //Отправка формы
    handleSubmit(event) {
        this.props.createProject(this.state.title, this.state.repo, this.state.users)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={(event)=> this.handleSubmit(event)} class="pure-form pure-form-stacked">
                <fieldset>
                    <legend>Создать заметку</legend>
                    <input type="text" placeholder="Заголовок" name="title" value={this.state.title} onChange={(event)=>this.handleChange(event)} />
                    <input type="text"  placeholder="Репозиторий" name="repo" value={this.state.repo} onChange={(event)=>this.handleChange(event)} />
                    <title for="todo-users">Пользователи: </title>
                    {this.props.users.map(
                            (user) => 
                            <div> <input type="checkbox" id={user.id} onChange={(event) => this.handleChangeUsers(event)} /> {user.username} </div>
                    )}
                    <button type="submit" class="pure-button pure-button-primary">Создать</button>
                </fieldset>
            </form>
        )
    }
}

export default ProjectForm;