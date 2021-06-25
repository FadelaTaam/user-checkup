import React from 'react';
import React, { UserContext} from 'react'
import './App.css';
import Login from "./components/Login"
import UserList from "./components/UserList"
import UserProfile from "./components/UserProfile"
import PageNotFound from "./components/PageNotFound"

class App extends React.Component {
  state = {
    user : ""
  }
  setUser(){

  }
  render() {
    return <UserContext.Provider value={}>

    <BrowserRouter>
    <Route exact path="/" component={Login} onClick={this.setUser} />
    <Route exact path="/UserList" component={UserList} />
    <Route exact path="/UserProfile" component={UserProfile} />
    <Route exact path="/PageNotFound" component={PageNotFound} />
    </BrowserRouter>
    
    </UserContext.Provider>
  }
}

export default App;
