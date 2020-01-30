import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import FormControl from '@material-ui/core/FormControl';
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

//via makeStyles from material-ui to format the card
const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(1),
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
    justifyContent: 'center'
  },
  button: {
    display: 'block',
    marginLeft: theme.spacing(5),
    fontSize: 20
  },
  formControl: {
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function Quality (props) {
  

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  //setting state when quality menu is closed
  const handleClose = () => {
    setOpen(false);
  };

  //setting state when quality menu is open
  const handleOpen = () => {
    setOpen(true);
  };

  // value based on "quality" state. onChange tied to handleQualityChange 
  // which fires a notification when value is "Low"
  return (
      <Grid item md={3}>
      <Card className={classes.card}>
        <div className={classes.details}>
        <Button className={classes.button} onClick={handleOpen}>
          Open the select
        </Button>
        <FormControl className={classes.formControl} >
          <InputLabel id="demo-controlled-open-select-label">Quality</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={props.quality}
            onChange={props.onChange}
            >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'Low'}>Low</MenuItem>
            <MenuItem value={'Normal'}>Normal</MenuItem>
            <MenuItem value={'High'}>High</MenuItem>
          </Select>
        </FormControl>
        </div>
        <CardMedia
            className={classes.cover}
            image="/static/images/cards/live-from-space.jpg"
            title="Live from space album cover"
        />
      </Card>
      </Grid>
  );
}