import React from 'react';
import axios from "axios";
import '../components.js/Signin.css';
import { Button, Card, CardContent, Grid, TextField, Typography ,Link} from "@material-ui/core";

class Signin extends React.Component { 
  constructor(props){
    super(props);
    this.state ={
    
      username:'',
      password:'',
      role:''
    }

  }
  
  render(){
  return (
    <div class="Inimg">   
    <div class="Intransparent-card">
    <Card>
    <div class="Inuser-login-box">
      
    <div class="Inuser-name">
     <div> 
            <h4 >Login</h4>
          <br></br>
                           <div>
                            <TextField label="User Name" placeholder="Max 10 chars" variant="outlined" inputProps={{ maxLength: 10 }} fullWidth required  type="text" />

                            </div>
                            <br></br>
        
                            <div>
                            <TextField label="password" placeholder="Only Numbers Max 6" variant="outlined" inputProps={{maxLength:6}} onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '') }} fullWidth required type="text" />

                            </div>
                            <br></br>
                            <br></br>

                            <Button  variant="contained"> <a href="/">Submit</a></Button>
                          
                            <br></br>
                            
                            </div>
                            </div>
                            </div>
                            </Card>
                            </div>
                            </div>
  );
  }
}

export default Signin;
