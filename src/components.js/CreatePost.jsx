import React, { Component } from 'react'
import PostService from '../services.js/PostServices';
import Button from '@material-ui/core/Button';
import img from '../images/food.jpg';
import Header from './HeaderComponent';
import './Post.css';


class CreatePost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            postId: this.props.match.params.id,
            title:'',
            createdDateTime:'',
            voteup:'',
            votedown:'',
            clicks: 0,
             show: true

        }
        
        this.changeTitleHandler =this.changeTitleHandler.bind(this);
        this.changeCreatedDateTimeHandler = this.changeCreatedDateTimeHandler.bind(this);  
        this.changeVoteupHandler = this.changeVoteupHandler.bind(this); 
        this.changeVotedownHandler =this.changeVotedownHandler.bind(this);
        this.saveOrUpdatePostHandler = this.saveOrUpdatePostHandler.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            PostService.getPostById(this.state.postId).then( (res) =>{
                let post = res.data;
                this.setState({ title:this.state.title,
                    createdDateTime: this.state.createdDateTime,
                    voteup: this.state.voteup,
                    votedown: this.state.votedown

                });
            });
        }        
    }
    saveOrUpdatePostHandler = (e) => {
        e.preventDefault();
        let post = {title:this.state.title,
            createdDateTime: this.state.createdDateTime,
            voteup: this.state.voteup,
            votedown: this.state.votedown
          };

        let post1 = {postId:this.state.postId,
            title:this.state.title,
            createdDateTime: this.state.createdDateTime,
            voteup: this.state.voteup,
            votedown: this.state.votedown
             };
        console.log('post => ' + JSON.stringify(post1));

        // step 5
        if(this.state.postId === '_add'){
            PostService.createPost(post).then(res =>{
                this.props.history.push('/getPosts');
            });
        }else{
            PostService.updatePost(post1).then( res => {
                this.props.history.push('/getPosts');
            });
        }
    }
    
    changeTitleHandler = (event) =>
    {
        this.setState({title : event.target.value});
    }

    changeCreatedDateTimeHandler = (event) =>
    {
        this.setState({createdDateTime : event.target.value});
    }
    
    changeVoteupHandler = (event) =>
    {
        this.setState({voteup: event.target.value});
    }
    changeVotedownHandler = (event) =>
    {
        this.setState({votedown : event.target.value});
    }
      

    cancel(){
        this.props.history.push('/getPosts');
    }

    getTitle(){
        if(this.state.postId === '_add'){
            return <h3 className="text-center">Add Post</h3>
        }else{
            return <h3 className="text-center">Update Post</h3>
        }
    }
    render() {
        return (
            <div>
              <Header/>
                

                {/* <div className='date'>
                    <label> Id: </label>
                    <input placeholder="Id" name="postId" 
                    value={this.state.postId} />
                </div> */}

                <div className='date'>
                    <label> Title: </label>
                    <input type="text" placeholder="title" name="title" 
                    value={this.state.title} onChange={this.changeTitleHandler}/>
                </div>

                <div className='date'>
                    <label> createdDateTime: </label>
                       <input type="date" placeholder="createdDateTime" name="createdDateTime"  
                        value={this.state.createdDateTime}  onChange={this.changeCreatedDateTimeHandler}/>
                </div>

                 <div className='date'>
                                            <label> voteUp: </label>
                                            <input type="number"  placeholder="voteup" name="voteup"  
                                                value={this.state.voteup} onChange={this.changeVoteupHandler}/>
                                        </div>


                                        <div className='date'>
                                            <label > voteDown: </label>
                                            <input type="number" placeholder="votedown" name="votedown"  
                                                value={this.state.votedown} onChange={this.changeVotedownHandler}/>
                                        </div>

                                        <div className='date'>
                                        <button className="btn btn-success" onClick={this.saveOrUpdatePostHandler}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </div>
                <div></div>
                
                
            </div>
        )
    }
}

export default CreatePost
