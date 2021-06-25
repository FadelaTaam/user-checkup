import React, { Component } from 'react';
import Button from 'bootstrap';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
            userList: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/users');
            const result_JSON = await result.json();
            this.setState({ userList: result_JSON })
            console.log(this.state.userList);

        }
        catch (error) {
            console.error(error)
        }
        onUserNameChange = (e) => {
            this.setState({ userName: e.target.value })
        }
        onPassWordChange = (e) => {
            this.setState({ passWord: e.target.value })
        }
        handleClick = () => {
            const { userList } = this.state
            for (let i = 0; i < userList.lenght; i++) {
                const element = userList[i]
                console.log(element.username, this.state.userName)
                console.log(element.address.city, this.state.passWord)
                if (element.username === this.state.userName && element.address.city === this.state.password) {
                    this.props.setUser({ username: this.state.userName })
                    this.props.history.push('/userlist')
                    console.log("Good")
                    return
                }
            };
        };
        console.log("Username ou Password incorrect")
    };
    render() {
        return <div className="container">
            <h2>Login</h2>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">@</span>
                <input onChange={this.OnUserNameChange} value={this.state.userName} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
                </input>
            </div>
            <input onChange={this.OnPasswordChange} value={this.state.passWord} type="text" class="form-control" placeholder="Password" aria-label="Password">
            </input>

            <Button onClick={this.handleClick} type="button" class="btn btn-dark btn-lg" type='submit'>Valider</Button>
        </div>
    };
};

export default Login
