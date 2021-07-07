import React from 'react'

class Signup extends React.Component {
    render(){
        return (
            <form>
            <h1>Signup</h1>
            <label htmlFor="email">email</label>
            <input type="text" name="email" placeholder="email" />
            <label htmlFor="password">password</label>
            <input type="password" name="password" />
          </form>
        )
    }
}

export default Signup