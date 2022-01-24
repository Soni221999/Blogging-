import React from 'react';
import axios from "axios";
import '../components.js/Signup.css';
import { Button, Card, CardContent, Grid, TextField, Typography } from "@material-ui/core";

class Signup extends React.Component { 
  constructor(props){
    super(props);
    this.state ={
    
      username:'',
      password:'',
      role:''
    }

  }
  componentDidMount(){
      this.setState({
        id:0,
        username:'',
        password:'',
        role:''
      })
  }
  submit(event,id){
    event.preventDefault();
    if(id === 0){
      axios.post("http://localhost:8080/api/addUsernames",{
        username:this.state.username,
        password:this.state.password,
        role:this.state.role
      })
      .then(()=>{
        this.componentDidMount();
      })
    }else{
      axios.put("http://localhost:8080/api/updateUsername",{
        id:this.state.id,
        username:this.state.username,
        password:this.state.password,
        role:this.state.role
      }).then(()=>{
        this.componentDidMount();
      })

    }
  }
  render(){
  return (
    <div class="img">   
    <div class="transparent-card">
    <Card>
    <div class="user-login-box">
      
    <div class="user-name">
    <form onSubmit={(e)=>this.submit(e,this.state.id)}>
     <div> 
            <h4 >Register</h4>
          <br></br>
                           <div>
                            <TextField label="User Name" placeholder="Max 10 chars" variant="outlined" inputProps={{ maxLength: 10 }} fullWidth required  onChange={(e)=>this.setState({username:e.target.value})} value={this.state.username} type="text" />

                            </div>
                            <br></br>
        
                            <div>
                            <TextField label="password" placeholder="Only Numbers Max 6" variant="outlined" inputProps={{maxLength:6}} onInput={(e) => { e.target.value = e.target.value.replace(/[^0-9]/g, '') }} fullWidth required onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password} type="text" />

                            </div>
                            <br></br>
        
                            <div>
                            <TextField label="role" placeholder="Max 8 char" variant="outlined" inputProps={{maxLength:8}} fullWidth required onChange={(e)=>this.setState({role:e.target.value})} value={this.state.role} type="text" />

                            </div>
                            <br></br>
                            <br></br>

       
                            <Button variant="contained" type='submit'> SUBMIT</Button>
                            <br></br>
                            <div class="hint-text">Already have an account? <br></br><a href="/signin">Login here</a></div>
                            </div>
                            </form>
                            </div>
                            </div>
                            </Card>
                            </div>
                            </div>
  );
  }
}

export default Signup;
