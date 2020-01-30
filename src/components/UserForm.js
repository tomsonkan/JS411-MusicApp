import React, {Component} from 'react'
import FormUserDetails from './FormUserDetails'
import Dashboard from './Dashboard'


//login screen with forms to fill out. loggedIn state starts out as "false"
export class UserForm extends Component {
  state = {
    step: 1,
    username: " ",
    password: " ",
    loggedIn: false,
  }

  //nextStep written for state + 1 in case 1 of the switchcase
  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1,
    })
    
  }

  //previousStep written for state - 1 in case 2 of the switchcase
  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    })
  }

//handleChange to change the state of online along with the input form in the login screen
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value,
      online:!this.state.online
    })
    console.log("online?", this.state.online)
  }

  //handleLogin to set the state of Login to true after submission
  handleLogin = () => {
    this.setState({ loggedIn: true})
    
  }

  //render the login screen initially. Once logged in, proceeds to the Dashboard
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
          onLogin = {this.handleLogin}
         /> 
        )
        case 2:
        return(
          <Dashboard 
          onLine = {this.handleOnline}
          prevStep = {this.prevStep}
          />
        )
    }
  }
}



export default UserForm