import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {login: '', password: ''}
    }

    
    
    handleChange(event){
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    handleSubmit(event) {
        this.props.get_token(this.state.login, this.state.password);
        event.preventDefault();
    }

    render() {
        return (
        <form onSubmit={(event)=> this.handleSubmit(event)}  class="pure-form-stacked">
            <fieldset>
                <legend>Login form</legend>
                <input for="text" name="login" placeholder="login"
                    value={this.state.login} onChange={(event)=>this.handleChange(event)} />

                <input type="password" name="password" placeholder="password"
                    value={this.state.password} onChange={(event)=>this.handleChange(event)} />

                <input type="submit" class="pure-button pure-button-primary" value="Login"/>
            </fieldset>
        </form>
        );
    }
        
}

export default LoginForm