import React, {Component} from 'react'
import FormUserDetails from './FormUserDetails'
import Dashboard from './Dashboard'

export class UserForm extends Component {
  state = {
    step: 1,
    username: " ",
    password: " ",
    loggedIn: false,
    online:false
  }

  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({[input]: e.target.value})
  }

  render() {
    const {step} = this.state
    const{username, password} = this.state
    const values = {username, password}
    switch(step) {
      case 1:
        return(
          <FormUserDetails
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values = {values}
         /> 
        )
        case 2:
        return(
          <Dashboard />
        )
        case 3:
        return(
          <h1>Confirm</h1>
        )
        case 4:
        return(
          <h1>Success</h1>
        )
    }
  }
}



export default UserForm