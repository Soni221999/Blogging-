import React, { Component } from 'react'
import BloggerService from '../services.js/BloggerService';
import { Link } from "react-router-dom";
import '../components.js/Blogger.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Container, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import Header from './HeaderComponent';


class CreateBlogger extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            userId: this.props.match.params.id,
            firstname:'',
            lastname:'',
            typeblogger:'',
            dateofBirth:'',
            gender:'',
            feedback:''
    
        }
        this.changeFirstnameHandler =this.changeFirstnameHandler.bind(this);
        this.changeLastnameHandler = this.changeLastnameHandler.bind(this);
        this.changeTypebloggerHandler =this.changeTypebloggerHandler.bind(this);
        this.changeDateofBirthHandler = this.changeDateofBirthHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeFeedbackHandler = this.changeFeedbackHandler.bind(this);
        this.saveOrUpdateBloggerHandler = this.saveOrUpdateBloggerHandler.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            BloggerService.getBloggerById(this.state.userId).then( (res) =>{
                let blogger = res.data;
                this.setState({firstname: blogger.firstname,
                    lastname: blogger.lastname,
                    typeblogger: blogger.typeblogger,
                    dateofBirth: blogger.dateofBirth,
                    gender : blogger.gender,
                    feedback: blogger.feedback
                });
            });
        }        
    }

    
    saveOrUpdateBloggerHandler = (e) => {
        e.preventDefault();
        let blogger = {firstname:this.state.firstname,
        lastname:this.state.lastname,
        typeblogger: this.state.typeblogger,
        dateofBirth: this.state.dateofBirth,
        gender: this.state.gender,
        feedback: this.state.feedback
     };

        let blogger1 = {userId:this.state.userId,
            firstname:this.state.firstname,
        lastname:this.state.lastname,
        typeblogger: this.state.typeblogger,
        dateofBirth: this.state.dateofBirth,
        gender: this.state.gender,
        feedback: this.state.feedback };
        
        console.log('blogger => ' + JSON.stringify(blogger1)); 

        // step 5
        if(this.state.userId === '_add'){
            BloggerService.createBlogger(blogger).then(res =>{
                this.props.history.push('/getBloggers');
            });
        }else{
            BloggerService.updateBlogger(blogger1).then( res => {
                this.props.history.push('/getBloggers');
            });
        }
    }

    
    changeFirstnameHandler = (event) =>{
        this.setState({firstname: event.target.value});
    }

    changeLastnameHandler =(event) =>{
        this.setState({lastname: event.target.value});
    }

    changeTypebloggerHandler = (event) => {
        this.setState({typeblogger: event.target.value});
    }

    changeDateofBirthHandler =(event) =>
    {
        this.setState({dateofBirth: event.target.value});
    }

    changeGenderHandler =(event) =>
    {
        this.setState({gender:event.target.value});
    }

    changeFeedbackHandler = (event) =>{
        this.setState({feedback : event.target.value});
    }

    cancel(){
        this.props.history.push('/getBloggers');
    }

    getTitle(){
        if(this.state.userId === '_add'){
            return <h3 className="text-center">Add Blogger</h3>
        }else{
            return <h3 className="text-center">Update Blogger</h3>
        }
    }
    render() {
        return (
            <div>
                <Header/>
                 {/* <img className="photo"
                  src="https://media.istockphoto.com/photos/bloggingblog-concepts-ideas-with-worktable-picture-id922745190?b=1&k=20&m=922745190&s=170667a&w=0&h=0lBPWualF5SE8Khy1uRoGOcMZry55ZiUUWvPUPIZ3H0=" />
                 */}

                 <div className="sidebar">
                    
                    <div className="sidebarItem">
                        <span className="sidebarTitle">ABOUT ME</span>
                        <img
                        src="https://1.bp.blogspot.com/-Fng9m1wLhu0/YJOOUrTZvJI/AAAAAAAAD_8/OxST-xtE8vYh7S-_jqeHPfp2RjOE7GTDgCLcBGAsYHQ/s554/images-min.jpeg"/>
                    </div>
                    <div className="sidebarItem">
                        <span className="sidebarTitle">BLOGGER DETAILS</span>
                        <ul className="sidebarList">
                        <li className="sidebarListItem">
                        <div className="feild">
                        <div className = "form-group">
                                            <label> Id: </label>
                                            <input placeholder="Id" name="userId"
                                                value={this.state.userId} />
                                        </div>

                    <label>First Name:</label>
                    <input type="text" placeholder="FirstName"  name="firstname" value={this.state.firstname} onChange={this.changeFirstnameHandler}></input>
                </div>
                        </li>
                        <li className="sidebarListItem">
                        <div className="feild">
                    <label>Last Name:</label>
                    <input type="text" placeholder="Last Name"  name="lastname" value={this.state.lastname} onChange={this.changeLastnameHandler}></input>
                </div>
                        </li>
                        <li className="sidebarListItem">
                        <div className="feild">
                    <label>Type Blogger:</label>
                    <input type="text" placeholder="Type Blogger"  name="typeblogger" value={this.state.typeblogger} onChange={this.changeTypebloggerHandler}></input>
                </div> 
                        </li>
                        <li className="sidebarListItem">
                        <div className="feild">
                    <label>Gender:</label>
                    <input type="text" placeholder="Gender"  name="gender" value={this.state.gender} onChange={this.changeGenderHandler}></input>
                </div>
                    
                        </li>
                        <li className="sidebarListItem">
                        <div className="feild">
                    <label>Date of Birth:</label>
                    <input type="date" placeholder=" Date"  name="dateofBirth" value={this.state.dateofBirth} onChange={this.changeDateofBirthHandler}></input>
                </div>
                        </li>
                        <li className="sidebarListItem">
                        <div className="feild">
                    <label>Feedback:</label>
                    <input type="text" placeholder="FeedBack"  name="feedback" value={this.state.feedback} onChange={this.changeFeedbackHandler}></input>
                </div>
                 </li> 
                 </ul>

                 <button className="btn btn-success" onClick={this.saveOrUpdateBloggerHandler}>Save</button>
                 <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                    </div>

                    <div className="sidebarItem">
                        <span className="sidebarTitle">MORE ABOUT ME</span>
                        <div>
                        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
                        </div>
                    <div className="sidebarItem">
                        <span className="sidebarTitle">FOLLOW ME</span>
                        <div className="sidebarSocial">
                          <IconButton aria-label="twitter"  >
                            <TwitterIcon /> 
                            </IconButton> Twitter
                            <br></br>

                            <IconButton aria-label="instagram"  >
                            <InstagramIcon/> 
                            </IconButton> Instagram
                        <br></br>
                            <IconButton aria-label="Youtube"  >
                            <YouTubeIcon /> 
                            </IconButton> Youtube

                            <IconButton aria-label="Youtube"  >
                            <FacebookIcon /> 
                            </IconButton> Facebook
                        </div>
                    </div>
                    
                    </div>
                   
            </div>
            </div>
        )
    }
}

export default CreateBlogger
