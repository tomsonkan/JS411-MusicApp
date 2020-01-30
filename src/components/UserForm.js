import React, {Component} from 'react'
import FormUserDetails from './FormUserDetails'
import Dashboard from './Dashboard'

export class UserForm extends Component {
  state = {
    step: 1,
    username: " ",
    password: " ",
    loggedIn: false,
  }

  nextStep = () => {
    const {step} = this.state;
    this.setState({
      step: step + 1,
    })
    
  }

  prevStep = () => {
    const {step} = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value,
      online:!this.state.online
    })
    console.log("online?", this.state.online)
  }

  handleLoggin = () => {
    this.setState({ loggedIn: true})
    
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
          onLoggin = {this.handleLoggin}
         /> 
        )
        case 2:
        return(
          <Dashboard 
          onLine = {this.handleOnline}
          />
        )
    }
  }
}



export default UserForm