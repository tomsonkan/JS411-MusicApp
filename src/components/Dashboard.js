import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Grid from "@material-ui/core/Grid";
import Volume from "./dashComps/Volume"
import Online from "./dashComps/Online"
import Quality from "./dashComps/Quality"


export default function MediaControlCard() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    online: true,
    volume: 20,
    notifications: [],
    quality: "Normal"
  });
  
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
            notifications: [...state.notifications, "Listening to volumes of 80 or higher may result in hearing damage!"],
          
          });
          console.log("***", state.volume)
      }
      console.log("**//*", state.volume)
  }

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
