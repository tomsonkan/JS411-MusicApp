import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Grid from "@material-ui/core/Grid";
import Volume from "./dashComps/Volume"
import Online from "./dashComps/Online"
import Quality from "./dashComps/Quality"

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  root: {
    width: 200,
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function MediaControlCard() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    online: true,
    volume: 20,
    notifications: []
  });
  

  // const toggleNotification = (alert) => {
	// 	const baseCall = this.state.notifications.indexOf(alert); 

	// 	if (state.notifications.includes(alert)) {
	// 	  state.notifications.splice(baseCall, 1);
	// 	} else {
	// 		this.setState({ notifications: [alert] });
	// 	}
  // }


  return (
    <MuiThemeProvider>
      <React.Fragment>
      <AppBar title = "Enjoy!"/>
      <br/>
      <h1> Welcome User!</h1> 
      <Grid container justify="center" spacing={6}>
      <Online />
      <br/>
      <Volume />
      <br/>
      <Quality />
    </Grid>
    {/* <div>
      <h1>System Notifications</h1>
			 <p>{state.toggleNotification}</p>
		</div> */}

    </React.Fragment>
    </MuiThemeProvider>
  );
}