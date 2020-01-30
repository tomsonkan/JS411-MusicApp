import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Grid from "@material-ui/core/Grid";
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CardActions from '@material-ui/core/CardActions';


  export default function Online (props) {
    
            return(
              <Grid item md={3}>
              <Card className='control'>
              <div className='details'>
                <CardContent className='content'>
                  <Typography component="h5" variant="h5">
                    Online Mode
                  </Typography>
                </CardContent>
                <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                <FormControlLabel
                  value="Status"
                  control={<Switch 
                    color={ props.online ? "primary" : "default" } 
                    onChange = {props.onlineChange} checked = {props.online} />
                  }
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
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </CardActions>
          
                    </Card>
                   
              </Grid>
              
            )
   }
  // }

  // export default Online

    // onlineState = () => {
      //     if(this.state.online === true)
      //       this.setState({
      //         online: false,
      //         notifications: [...this.state.notifications, "You are now online!"]
      //     }) 
      //     if (this.state.online === false){
      //         this.setState({
      //           online: true,
      //           notifications: [...this.state.notifications, "Your application is offline. You won't be able to share or stream music to other devices."]
      //       })
      //     } console.log(this.state.notifications)
      // }
    

    // render(){

     {/* {
                      this.state.online ? 
                        <p>
                        <h3>System Notification:</h3>
                        <h2>You are now online!</h2>
                        </p> :
                        <p>
                          <h3>System Notification:</h3>
                        <h4>Your application is offline. You won't be able to share or stream music to other devices.</h4>
                        </p> 

                    } */}