import React, { Component } from 'react';
import Button from 'bootstrap';


class Login extends React.Component {


    fetchUser = async function () {
        try {
            const users = await fetch('https://jsonplaceholder.typicode.com/users');
            const profile = await response.json();
            return profile;
        }
        catch (error) {
            console.error(error)
        }
   

    if (username !== users.username) {
         console.log("Username ou Password incorrect")
    
     } else if (password !== users.address.city) {
         console.log("Username ou Password incorrect")
    
     } else {
         //{props.setUser}//
         { this.props.history.push('/userlist') }
     } 
 }
    render() {
        return <div className="container">
            <h2>Login</h2>
            <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">@</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping">
                </input>
            </div>
            <input type="text" class="form-control" placeholder="Password" aria-label="Password" >
            </input>




            <Button type="button" class="btn btn-dark btn-lg" type='submit' onClick={this.props.setUser}>Valider</Button>
        </div>
    }
}

export default Login;
