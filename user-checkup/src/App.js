
import React from 'react' ;
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { UserContext } from './components/userContext'
import './App.css';
import Login from "./components/Login"
import UserList from "./components/UserList"
import UserProfile from "./components/UserProfile"
import PageNotFound from "./components/PageNotFound"

class App extends React.Component {
  state = {
    user: ""
  }
  setUser() {

  }

  
  render() {
    return <UserContext.Provider value={""}>

      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={props => <Login {...props.setUser()} />} />
            <Route path="/UserList" component={UserList} />
            <Route path="/UserProfile" component={UserProfile} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  }
}

export default App;
