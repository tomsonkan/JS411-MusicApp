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

export default function Quality() {
  const [state, setState] = React.useState(" ");
  

  const classes = useStyles();
  // const theme = useTheme();
  // const [value, setValue] = React.useState(20)
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);


  const handleChangeForm = event => {
    setAge(event.target.value);
    if(event.target.value === "Low") {
      document.getElementById("text").innerHTML = "Music quality is degraded. Increase quality if your connection allows it.";
    }
    else{
      document.getElementById("text").innerHTML = "";
    }
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
   
      <Grid item md={3}>
      <Card className={classes.card}>
      <div className={classes.details}>
      <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Quality</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChangeForm}
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
    <p>
    <h4 id="text"></h4>
    </p>
    </Grid>
   
  );
}