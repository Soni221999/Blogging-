import React, { Component } from 'react'
import BloggerService from '../services.js/BloggerService';
import { Route , history} from 'react-router-dom';
import Header from './HeaderComponent';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';


class ListBlogger extends Component {
    constructor(props) {
        super(props)

        this.state = {
                bloggers: []
        }
        this.addBlogger = this.addBlogger.bind(this);
        this.editBlogger = this.editBlogger.bind(this);
        this.deleteBlogger = this.deleteBlogger.bind(this);
    }

    deleteBlogger(id){
        BloggerService.deleteBlogger(id).then( res => {
            this.setState({bloggers: this.state.bloggers.filter(blogger => blogger.id !== id) });
            
        });
    }
    viewBlogger(id){
        this.props.history.push(`/view-blogger/${id}`);
    }
    editBlogger(id){
        this.props.history.push(`/add-blogger/${id}`);
    }

    componentDidMount(){
        BloggerService.getBloggers().then((res) => {
            this.setState({ bloggers: res.data});
        });
    }
    addBlogger(){
        this.props.history.push('/add-blogger/_add');
    }
    render() {
        return (
            <div>
             <Header/>
                 <h2 className="text-center">Bloggers List</h2>
                 <div className = "row">
                    {/* <button className="btn btn-primary" onClick={this.addBlogger}> Add Blogger</button> */}
                    <IconButton aria-label="delete" >
                <AddIcon onClick={this.addBlogger} />
                </IconButton>

                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>Blogger Id</th>
                                    <th> First Name</th>
                                    <th> Last Name</th>
                                    <th> TypeBlogger</th>
                                    <th> Gender</th>
                                    <th> Date </th>
                                    <th> Feedback</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.bloggers.map(
                                        blogger => 
                                        <tr key = {blogger.userId}>
                                            <td> { blogger.userId} </td> 
                                             <td>{blogger.firstname}</td>
                                             <td>{blogger.lastname}</td>
                                             <td>{blogger.typeblogger}</td>
                                             <td>{blogger.gender}</td>
                                             <td>{blogger.dateofBirth}</td>
                                             <td>{blogger.feedback}</td>
                                             <td>
                                                 <button onClick={ () => this.editBlogger(blogger.userId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteBlogger(blogger.userId)} className="btn btn-danger">Delete </button>
                                                 
                                             </td>
                                        </tr>
                                    ) }
                            </tbody>
                        </table>
                 </div>
                 
                  </div>
        )
    }
}

export default ListBlogger
