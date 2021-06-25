import React, { Component } from 'react';
import Button from 'bootstrap';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            userList: []
        }
    }
    fetchUser = async function (componentDidMount) {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users');
            const profile = await response.json();
            this.setState({userList:response_JSON})
            return profile;
        }
        catch (error) {
            console.error(error)
        };
        userNameOnChange=(e)=>{
            this.setState({userName:e.target.value})
        }
        passWordOnChange=(e)=>{
            this.setState({passWord:e.target.value})
        }
        handleClick = () => {
            const { userList } = this.state
            for (let i = 0; i < userList.lenght; i++) {
                const element = userList[i]
                if (element.username === this.state.userName && element.address.city === this.state.password) {
                    { this.props.history.push('/userlist') }
                    return
                } else {
                    console.log("Username ou Password incorrect")
                }
            };
        };
    };

    render() {
        return <div className="container">
            <h2>Login</h2>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={this.passwordOnChange}>
                </input>
            </div>
            <input type="text" class="form-control" placeholder="Password" aria-label="Password" onChange={this.userNameOnChange} >
            </input>

            <Button onClick={this.handleClick} type="button" class="btn btn-dark btn-lg" type='submit'>Valider</Button>
        </div>
    }
};

export default Login
