import React, { Component } from 'react'
import CommentService from '../services.js/CommentService';
import Header from './HeaderComponent';
/* import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button
} from '@material-ui/core' */;

class CreateCommentComponent extends Component {
    
        constructor(props) {
            super(props)
    
            this.state = {
                // step 2
                commentId: this.props.match.params.id,
                commentDescription:'',
                voteUp:'',
                votes:'',
            // blogger:'',
            // post:'',
          
            
        }
        this.changeCommentDescriptionHandler = this.changeCommentDescriptionHandler.bind(this);
         this.changeVoteUpHandler = this.changeVoteUpHandler.bind(this);
         this.changeVotesHandler = this.changeVotesHandler.bind(this);
        // this.changeBloggerHandler =this.changeBloggerHandler.bind(this);
        // this.changePostHandler = this.changePostHandler.bind(this);
        this.saveOrUpdateComment = this.saveOrUpdateComment.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            CommentService.getCommentById(this.state.commentId).then( (res) =>{
                let comment = res.data;
                this.setState({ commentDescription: comment.commentDescription,
                    voteUp: comment. voteUp,
                     votes:comment.votes,
                    //  blogger: comment.blogger,
                    //  post: comment.post,
                                      
                                    });
            });
        }        
    }
    saveOrUpdateComment = (e) => {
        e.preventDefault();
        let comment = {commentDescription:this.state.commentDescription,
        //  post: this.state.post,
        //  blogger:this.state.blogger,
         voteUp: this.state.voteUp,
         votes:this.state.votes,
        };

        let comment1 = {commentId:this.state.commentId,
            commentDescription:this.state.commentDescription,
          voteUp: this.state.voteUp,
            votes:this.state.votes,
            // blogger:this.state.blogger,
            // posts: this.state.posts,
          };
        console.log('comment => ' + JSON.stringify(comment1));

        // step 5
        if(this.state.commentId === '_add'){
            CommentService.createComment(comment).then(res =>{
                this.props.history.push('/getComments');
            });
        }else{
            CommentService.updateComment(comment1).then( res => {
                this.props.history.push('/getComments');
            });
        }
    }
    
    changeCommentDescriptionHandler = (event) =>
    {
        this.setState({commentDescription : event.target.value});
    }

    //  changePostHandler = (event) =>
    //  {
    //      this.setState({post : event.target.value});
    //  }

    //  changeBloggerHandler = (event) =>
    //  {
    //      this.setState({blogger : event.target.value});
    //  }

     changeVoteUpHandler = (event) =>
     {
         this.setState({voteUp : event.target.value});
     }

    changeVotesHandler =(event)=>
    {
        this.setState({votes:event.target.value});
    }
    cancel(){
        this.props.history.push('/getComments');
    }

    getTitle(){
        if(this.state.commentId === '_add'){
            return <h3 className="text-center">Add Comment</h3>
        }else{
            return <h3 className="text-center">Update Comment</h3>
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> CommentId: </label>
                                            <input placeholder="Id" name="commentId" className="form-control" 
                                                value={this.state.commentId} />
                                        </div>
                                        <div className = "form-group">
                                            <label>Comment Description: </label>
                                            <input placeholder="Comment Description" name="commentDescription" className="form-control" 
                                                value={this.state.commentDescription} onChange={this.changeCommentDescriptionHandler}/>
                                        </div>
                                         {/* <div className = "form-group">
                                            <label> Post: </label>
                                            <input placeholder="Post" name="post" className="form-control" 
                                                value={this.state.post} onChange={this.changePostHandler}/>
                                        </div> */}
                                        <div className = "form-group">
                                            <label>VoteUp: </label>
                                            <input placeholder="VoteUp" name="voteUp" className="form-control" 
                                                value={this.state.voteUp} onChange={this.changeVoteUpHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Votes: </label>
                                            <input placeholder="votes" name="votes" className="form-control" 
                                                value={this.state.votes} onChange={this.changeVotesHandler}/>
                                        </div>
                                        {/* <div className = "form-group">
                                            <label> Blogger: </label>
                                            <input placeholder="Blogger" name="blogger" className="form-control" 
                                                value={this.state.blogger} onChange={this.changeBloggerHandler}/>
                                        </div> */}

                                       
                                        <button className="btn btn-success" onClick={this.saveOrUpdateComment}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
    
export default CreateCommentComponent