import React, { Component } from 'react'
import CommunityService from '../services.js/CommunityService';
import Button from '@material-ui/core/Button';
import '../components.js/Post.css'
import Header from './HeaderComponent';

class CreateCommunity extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            communityId: this.props.match.params.id,
            communityDescription:'',
            title:'',
            image:'',
            createdOn:''

        }
        this.changeCommunityDescriptionHandler = this.changeCommunityDescriptionHandler.bind(this);
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeCreatedOnHandler = this.changeCreatedOnHandler.bind(this);
        this.saveOrUpdateCommunity = this.saveOrUpdateCommunity.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            CommunityService.getCommunityById(this.state.communityId).then( (res) =>{
                let community = res.data;
                this.setState({ communityDescription : community.communityDescription,
                    title: community.title,
                    image: community.image,
                    createdOn: community.createdOn
                });
            });
        }        
    }
   
    saveOrUpdateCommunity = (e) => {
        e.preventDefault();
        let community = {communityDescription: this.state.communityDescription,
            title: this.state.title,
            image: this.state.image,
            createdOn: this.state.createdOn
          };

        let community1 = {communityId:this.state.communityId,
            communityDescription: this.state.communityDescription,
            title: this.state.title,
            image: this.state.image,
            createdOn: this.state.createdOn };
        console.log('community => ' + JSON.stringify(community1));

        // step 5
        if(this.state.communityId === '_add'){
            CommunityService.createCommunity(community).then(res =>{
                this.props.history.push('/getCommunitys');
            });
        }else{
            CommunityService.updateCommunity(community1).then( res => {
                this.props.history.push('/getCommunitys');
            });
        }
    }
    
    changeCommunityDescriptionHandler = (event) =>{
        this.setState({communityDescription : event.target.value});
    }

    changeTitleHandler =(event) => {
        this.setState({title : event.target.value});
    }

    changeImageHandler = (event) =>{
        this.setState({image : event.target.value});
       
    }

    changeCreatedOnHandler =(event) =>{
        this.setState({createdOn : event.target.value});
    } 
    
    cancel(){
        this.props.history.push('/getCommunitys');
    }

    getTitle(){
        if(this.state.userId === '_add'){
            return <h3 className="text-center">Add Community</h3>
        }else{
            return <h3 className="text-center">Update Community</h3>
        }
    }
    render() {
        return (
            <div className="write">
                <Header/>
              
           

           <form className="writeForm">
           <div className = "id">
                    <label> Id: </label>
                    <input  placeholder="Id" name="communityId"  value={this.state.communityId} />
                </div>

                <div className="writeFormGroup">
                   <label className=""> Image </label>
                    <input type="file" defaultValue={this.state.image}  onChange={this.changeImageHandler} />
                </div>
                
                <div>
                  <label className='date'>Title: </label> 
                  <input  type="text" placeholder="Title" className="writeFormGroup"  autoFocus={true} value={this.state.title} onChange={this.changeTitleHandler}/>
                 </div>
               
               
               <div  id="Description">
                   <label className='date'>Description:</label>
                   <br></br>
                   <textarea placeholder="Community Description....." type="text" className="desc"
                   value={this.state.communityDescription} onChange={this.changeCommunityDescriptionHandler}></textarea>
              </div>

              <div className = "Date">
                <label className='date'> CreatedOn: </label>
                <input type="date"  name="createdOn"  value={this.state.createdOn} onChange={this.changeCreatedOnHandler} />
              </div>

              <div className="button">
              <Button variant="contained" color="primary"  component="span" onClick={this.saveOrUpdateCommunity}> Save </Button>

              <Button variant="contained" component="span" color="secondary" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel </Button>
              </div>
                 
           </form>
       </div>
        )
    }
}

export default CreateCommunity
