import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
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

export default function Sliders() {
  const [state, setState] = React.useState({
    volume: 20,
  });
  

  const classes = useStyles();
  const [value, setValue] = React.useState(20)

  const handleChangeVol = (e, newValue) => {
    setValue(newValue)
  }
  console.log(value)

  
if (value < 80){
  return (
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
          <Slider 
          defaultValue={20}
          valueLabelDisplay="on"
          step={10}
          marks
          min={0}
          max={100}
          value={value} 
          onChange={handleChangeVol} 
          aria-labelledby="continuous-slider" />
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
      )
    } else if (value === 80 || value > 80) {
    return ( <Grid item md={3}>
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
          <Slider 
          defaultValue={20}
          valueLabelDisplay="on"
          step={10}
          marks
          min={0}
          max={100}
          value={value} 
          onChange={handleChangeVol} 
          aria-labelledby="continuous-slider" />
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
      <p>
      <h2>Listening to volumes of 80 or higher may result in hearing damage!</h2>
    </p>
      </Grid>
      )
    }
  }
