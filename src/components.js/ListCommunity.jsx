import React, { Component } from 'react'
import CommunityService from '../services.js/CommunityService.js';
// import { Route , history} from 'react-router-dom';
import Header from './HeaderComponent';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';

class ListCommunity extends Component {
    constructor(props) {
        super(props)

        this.state = {
                communitys: []
        }
        this.addCommunity = this.addCommunity.bind(this);
        this.editCommunity = this.editCommunity.bind(this);
        this.deleteCommunity = this.deleteCommunity.bind(this);
    }

    deleteCommunity(id){
        CommunityService.deleteCommunity(id).then( res => {
            this.setState({communitys: this.state.communitys.filter(community => community.id !== id) });
            
        });
    }
    viewCommunity(id){
        this.props.history.push(`/view-community/${id}`);
    }
    editCommunity(id){
        this.props.history.push(`/add-community/${id}`);
    }

    componentDidMount(){
        CommunityService.getCommunitys().then((res) => {
            this.setState({ communitys: res.data});
        });
    }
    addCommunity(){
        this.props.history.push('/add-community/_add');
    }
    render() {
        return (
            
            <div>
             <Header/>
                 <h2 className="text-center">CommunityList</h2>
                 <div className = "row">
                    {/* <button className="btn btn-primary" onClick={this.addBlogger}> Add community</button> */}
                    <IconButton aria-label="delete" onClick={this.addCommunity} >
                <AddIcon  />
                </IconButton>

                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th>Community Id</th>
                                    <th>Community Description</th>
                                    <th>Title</th>
                                    <th> Image</th>
                                    <th> Date</th>
                                  
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.communitys.map(
                                        community => 
                                        <tr key = {community.communityId}>
                                            <td> { community.communityId} </td> 
                                             <td>{community.communityDescription}</td>
                                             <td>{community.title}</td>
                                             <td>{community.image}</td>
                                             <td>{community.createdOn}</td>
                                             <td>
                                                 <button onClick={ () => this.editCommunity(community.communityId)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCommunity(community.communityId)} className="btn btn-danger">Delete </button>
                                                 
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

export default ListCommunity
