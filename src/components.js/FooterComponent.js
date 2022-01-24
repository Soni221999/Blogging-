import React, { Component } from 'react';
import '../App.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Container, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GroupIcon from '@mui/icons-material/Group';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import CopyrightIcon from '@mui/icons-material/Copyright';
import RuleIcon from '@mui/icons-material/Rule';





class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {            
        }
    }
    render() {
        return (
            <div>
              
               <footer  className='footer'>
            <nav>
            <div >
            
            <div class="nav1">
                <h1>Useful Links</h1>
                 <IconButton aria-label="About us"  >
                <PrivacyTipIcon/> 
                </IconButton> Privacy Pocily
               <br></br>
                <IconButton aria-label="contact us"  >
                <RuleIcon /> 
                </IconButton> Terms use
                <br></br>
                <IconButton aria-label="contact us"  >
                <CopyrightIcon /> 
                </IconButton> Copy Right
                    
                  </div>
                 
                

               <div class="nav2">
                  <h1>Website</h1>
                  

                <IconButton aria-label="About us"  >
                <GroupIcon/> 
                </IconButton> About Us
               <br></br>
                <IconButton aria-label="contact us"  >
                <ContactSupportIcon /> 
                </IconButton> Contact Us
              </div>
              

              

               <div class="nav3">
                  <h1>Follow Us On</h1>
                  
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
              </div>
            
             
            </div>
            
          </nav>
       
               </footer>
            </div>
        )
    }
}
export default FooterComponent