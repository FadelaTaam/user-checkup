import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            passWord: '',
            userList: [],
        }
        this.handleClick = this.handleClick.bind(this);
    }
    async componentDidMount() {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/users');
            const result_JSON = await result.json();
            this.setState({ userList: result_JSON })
            console.log(this.state.userList);
        } catch (error) {
            console.log(error);
        }
    }
    onUserNameChange = (e) => {
        this.setState({ userName: e.target.value })
    }
    onPassWordChange = (e) => {
        this.setState({ passWord: e.target.value })
    }
    handleClick = () => {
        const { userList } = this.state
        for (let i = 0; i < userList.length; i++) {
            const element = userList[i]
            console.log(element.username, this.state.userName)
            console.log(element.address.city, this.state.passWord)
            if (element.username === this.state.userName && element.address.city === this.state.passWord) {
                this.props.setUser({ username: this.state.userName })
                this.props.history.push("/userList")
                return;
            }
        };
        console.log('Username ou Password incorrect')
    }
    render() {
        return (<div className="container">
            <div className="row">
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">@</span>
                    <input onChange={this.onUserNameChange} value={this.state.userName} type="text" className="form-control border-dark " placeholder="UserName" aria-label="Username" />
                </div>
                <div className="col">
                    <input onChange={this.onPassWordChange} value={this.state.passWord} type="text" className="form-control border-dark" placeholder="PassWord" aria-label="Password" />
                </div>
                <button onClick={this.handleClick} type="button" type='submit'>Valider</button>
            </div>
        </div>
        )
    }
}
export default Login