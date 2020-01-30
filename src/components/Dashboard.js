import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Grid from "@material-ui/core/Grid";
import Volume from "./dashComps/Volume"
import Online from "./dashComps/Online"
import Quality from "./dashComps/Quality"


export default function MediaControlCard() {
  //hook used for state and setState. Different from using class
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    online: true,
    volume: 20,
    notifications: [],
    quality: "Normal"
  });
  

  //notification function for QualityChange. Need to ensure to have updated states for 
  //Volume and Online included in the setState.
  function handleQualityChange (event) {
    console.log(event.target.value)
    event.preventDefault()
    if(event.target.value === "Low") {
        setState({
          online: state.online,
          volume:state.volume,
          notifications: [...state.notifications, "Music quality is degraded. Increase quality if your connection allows it."],
        })
      }
  }

  //notification function for OnlinceChange. Need to ensure to have updated states for 
  //Volume and Online included in the setState.
  function handleOnlineChange (event) {
      if(state.online === true) 
      setState({
          online: false,
          volume:state.volume,
          notifications: [...state.notifications, "Your application is offline. You won't be able to share or stream music to other devices."]
      })
      if (state.online === false){
      setState({
          online: true,
          volume:state.volume,
          notifications: [...state.notifications, "You are now online!"],
      })
    }
    console.log(state.online)
  }

  //notification function for VolChange. e has to be included as a parameter. Need to ensure to have updated states for 
  //Volume and Online included in the setState. state.notifications only updated when value > 80
  function handleVolChange (e , value) {
      console.log(e)
      setState({
        online: state.online,
        volume: value,
        notifications: state.notifications,
      })
      console.log("---", state.volume)
      if(parseInt(value) > 80) {
          setState({
            online: state.online,
            volume: value,
            notifications: [...state.notifications, "Listening to music at a high volume could result in hearing damage!"],
          
          });
          console.log("***", state.volume)
      }
      console.log("**//*", state.volume)
  }

  //return AppBar and Grid containing card components. Div for system notifications placed 
  //below Grid. Notifications displayed as list via li
  return (
    <MuiThemeProvider>
      <React.Fragment>
      <AppBar title = "Enjoy!"/>
      <br/>
      <h1> Welcome User!</h1> 
      <Grid container justify="center" spacing={6}>
        <Online 
          onlineChange = {handleOnlineChange}
        />
        <br/>
        <Volume 
          volChange = {handleVolChange} 
          volume = {state.volume}
        />
        <br/>
        <Quality 
          onChange = {handleQualityChange}
        />
    </Grid>
      <div>
        <h1>System Notifications</h1>
        <ul>
          {state.notifications.map((item, index) => {
            return (
            <li key={index}>
              {item}
            </li>
            )
          })}
          </ul>
      </div>
    </React.Fragment>
    </MuiThemeProvider>
  );
}
