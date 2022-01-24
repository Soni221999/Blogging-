import React, { Component } from 'react'
import PostService from '../services.js/PostServices';
import { Route , history} from 'react-router-dom';
import Header from './HeaderComponent';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

class ListPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
                posts: []
        }
        this.addPost = this.addPost.bind(this);
        this.editPost = this.editPost.bind(this);
        this.deletePost = this.deletePost.bind(this);
    }

    deletePost(id){
        PostService.deletePost(id).then( res => {
            this.setState({posts: this.state.posts.filter(post => post.id !== id) });
            
        });
    }
    viewPost(id){
        this.props.history.push(`/view-post/${id}`);
    }
    editPost(id){
        this.props.history.push(`/add-post/${id}`);
    }

    componentDidMount(){
        PostService.getPosts().then((res) => {
            this.setState({ posts: res.data});
        });
    }
    addPost(){
        this.props.history.push('/add-post/_add');
    }
    render() {
        return (
            <div>
                <Header/>
                 <h2 className="text-center">Post List</h2>
                 <div className = "row">
                    {/* <button className="btn btn-primary" onClick={this.addPost}> Add Post</button> */}
                    <IconButton aria-label="delete" >
                <AddIcon onClick={this.addPost} />
                </IconButton>
                 </div>
                 
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>Post Id</th>
                                    <th> Title</th>
                                    <th> DatenTime</th>
                                    <th> voteup</th>
                                    <th> votedown</th>

                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.posts.map(
                                        post => 
                                        <tr key = {post.postId}>
                                            <td> { post.postId} </td> 
                                            <td>{post.title}</td>
                                             <td> {post.createdDateTime}</td>
                                             <td> {post.voteup}</td>
                                             <td> {post.votedown}</td>
                                             
                                             

                                             <td>
                                                 <button onClick={ () => this.editPost(post.postId)} className="btn btn-primary" >Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePost(post.postId)} className="btn btn-danger" >Delete </button>
                                                
                                             </td>
                                        </tr>
                                    ) }
                            </tbody>
                        </table>
                 </div> </div>
        )
    }
}

export default ListPost
