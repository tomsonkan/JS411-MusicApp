import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from "@material-ui/core/Grid";
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

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
  }
}));

export default function MediaControlCard() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(30)
  const handleChangeVol = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <MuiThemeProvider>
      <React.Fragment>
      <AppBar title = "Please enter User Details"/>
      <br/>
      <h1> Welcome User!</h1> 
      <Grid container justify="center" spacing={6}>
      <Grid item md={3}>
      <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Online Mode
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            *****
          </Typography>
        </CardContent>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
        <FormControlLabel
          checked={state.checkedA}
          onChange={handleChange('checkedA')}
          value="start"
          control={<Switch color="primary" />}
          label="Start"
          labelPlacement="start"
        />
        </FormGroup>
      </FormControl>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
      </Card>
      </Grid>
      <br/>
      <Grid item md={3}>
      <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Master Volume
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
           --   
          </Typography>
        </CardContent>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChangeVol} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
        />
      </Card>
      </Grid>
      <br/>
      <Grid item md={3}>
      <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Online Mode
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            *****
          </Typography>
        </CardContent>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
        <FormControlLabel
          checked={state.checkedA}
          onChange={handleChange('checkedA')}
          value="start"
          control={<Switch color="primary" />}
          label="Start"
          labelPlacement="start"
        />
        </FormGroup>
      </FormControl>
      </div>
      <CardMedia
        className={classes.cover}
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
    </Grid>
    </Grid>
    </React.Fragment>
    </MuiThemeProvider>
  );
}