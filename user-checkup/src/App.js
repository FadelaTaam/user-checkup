
import React, {createContext} from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import UserContext from './components/userContext.js'
import './App.css';
import Login from "./components/Login"
import UserList from "./components/UserList"
import UserProfile from "./components/UserProfile"
import PageNotFound from "./components/PageNotFound"

class App extends React.Component {
  state = {
    user: {},
  }
  setUser = user=>this.setState({user})


  render() {
    return <UserContext.Provider value={null}>

      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/UserList">UserList</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/UserProfile">UserProfile</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/PageNotFound">PageNotFound</Link></li>
            <li className="text-white">Connecter avec User?</li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={props => <Login setUser={this.setUser}{...props} />} />
          <Route path="/UserList" component={UserList} />
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="*" component={PageNotFound} />
        </Switch>

      </BrowserRouter>
    </UserContext.Provider>
  }
}

export default App;
