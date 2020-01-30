import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';

export class FormUserDetails extends Component {
  
  //continue function to proceed to the nextStep (assigned to submit button)
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  //twoCalls function including changing onLogin 
  twoCalls = e => {
    this.props.onLogin(e)
    this.continue(e)
  }
  
  //render the form and properties for the login screen
  render() {
  const { values, handleChange } = this.props;

  return (
    <MuiThemeProvider>
      <React.Fragment>
      <AppBar title = "Please enter User Details"/>
      <TextField
        hintText = "Enter Username"
        floatingLabelText="Username"
        onChange={handleChange('firstName')}
        defaultValue={values.firstName}
      />
      <br/>
      <TextField
        hintText = "Enter Password"
        floatingLabelText="Password"
        onChange={handleChange('lastName')}
        defaultValue={values.lastName}
      />
      <br/>
      <RaisedButton
        label = "Submit"
        primary = {true}
        style={styles.button}
        onClick = {this.twoCalls} 
      />
      </React.Fragment>
    </MuiThemeProvider>
  );
}
}

const styles = {
  button: {
    margin: 25
  }
}
export default FormUserDetails;
