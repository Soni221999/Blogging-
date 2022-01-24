import React, { Component } from 'react'
import CommentService from '../services.js/CommentService'
 import { Route , history} from 'react-router-dom';
import Header from './HeaderComponent';
import { IconButton } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';



class ListCommentComponent extends Component {
   constructor(props) {
        super(props)

        this.state = {
                comments: []
        }
        this.editComment=this.editComment.bind(this);
        this.addComment = this.addComment.bind(this);
        this.deleteComment= this.deleteComment.bind(this);
    }

    deleteComment(id){
        CommentService.deleteComment(id).then( res => {
            this.setState({comments: this.state.comments.filter(comment => comment.id !== id) });
            
        });
    }
    viewComment(id){
        this.props.history.push(`/view-comment/${id}`);
    }
    editComment(id){
        this.props.history.push(`/add-comment/${id}`);
    }

    componentDidMount(){
        CommentService.getComments().then((res) => {
            this.setState({ comments: res.data});
        });
    }
    addComment(){
        this.props.history.push('/add-comment/_add');
    }
    render() {
        return (
            <div>
                <Header/>
                <h2 className="text-center">Comment List</h2> 
                 <div className = "row">
                    {/* <button className="btn btn-primary" onClick={this.addComment}> Add Comment</button> */}
                 </div>
                 <IconButton onClick={this.addComment}>
                     <AddIcon />
                 </IconButton>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>Comment Id</th>
                                    <th> Comment Description</th>
                                    <th> VoteUp</th>
                                    <th> Votes</th>
                                    {/* <th> Post</th>
                                    <th> Blogger</th>   */}
                                  <th> Actions</th>  
                                      

                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.comments.map(
                                        comment => 
                                        <tr key = {comment.commentId}>
                                            <td> { comment.commentId} </td> 
                                             <td> { comment.commentDescription} </td>   
                                             {/* <td> { comment.post}</td>
                                             <td> {comment.blogger}</td> */}
                                             <td> {comment.voteUp}</td>
                                             <td> {comment.votes}</td>
                                            <td>
                                            {/* <button onClick={ () => this.editComment(comment.commentId)} className="btn btn-info">Update </button> */}
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteComment(comment.commentId)} className="btn btn-danger">Delete </button>
                                                 {/* <button style={{marginLeft: "10px"}} onClick={ () => this.viewComment(comment.commentId)} className="btn btn-info">View </button> */}
                                             </td>
                                        </tr>
                                    ) }
                            </tbody>
                        </table>
                 </div> </div>
        )
    }
}
 export default ListCommentComponent