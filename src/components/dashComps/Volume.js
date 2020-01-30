import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';


//via makeStyles from material-ui to format the card
const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(1),
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

export default function Volume (props) {
  
  // value based on "volume" state. onChange tied to handleVolChange 
  // which fires a notification when value > 80
  const classes = useStyles();
  return (
      <Grid item md={3}>
      <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Master Volume
          </Typography>
        </CardContent>
        <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider 
          defaultValue={20}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={0}
          max={100}
          value={props.volume} 
          onChange={props.volChange} 
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
}
