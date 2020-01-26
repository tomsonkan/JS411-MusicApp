import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from "@material-ui/core/Grid";


class Online extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          online: true
        }
      }
  
      onlineState = () => {
          if(this.state.online === true)
            this.setState({
              online: false
          }) 
          if (this.state.online === false){
              this.setState({
                online: true
            })
          }
      }
    

    render(){
        if (this.state.online === true) {
            return(
              <Grid item md={3}>
              <Card className='control'>
              <div className='details'>
                <CardContent className='content'>
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
                  value="Status"
                  control={<Switch color="primary" onChange = {this.onlineState} checked = 'true' />}
                  label="Status"
                  labelPlacement="start"
                />
                </FormGroup>
              </FormControl>
              </div>
              <CardMedia
                className='cover'
                image="/static/images/cards/live-from-space.jpg"
                title="Live from space album cover"
              />
                    </Card>
                    <p>
                    <h2>You are now online!</h2>
                    </p>
              </Grid>
            )} else {
                return(
                  <Grid item md={3}>
                  <Card className='control'>
                  <div className='details'>
                    <CardContent className='content'>
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
                      value="Status"
                      control={<Switch color="default" onChange = {this.onlineState}/>}
                      label="Status"
                      labelPlacement="start"
                    />
                    </FormGroup>
                  </FormControl>
                  </div>
                  <CardMedia
                    className='cover'
                    image="/static/images/cards/live-from-space.jpg"
                    title="Live from space album cover"
                  />
                    </Card>
                    <p>
                    <h4>Your application is offline. You won't be able to share or stream music to other devices.</h4>
                    </p>
              </Grid>
            )}
   }
  }

  export default Online