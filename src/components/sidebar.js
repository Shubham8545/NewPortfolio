import React, { Component } from "react";
import '../css/sidebar.css';
import facebook from '../icons/facebook.png';
import instagram from '../icons/instagram.png';
import twitter from '../icons/twitter.png';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';
import {Link} from 'react-scroll';

class sidebar extends Component {
   render(){
      return(
         <div>
            <Link to="header" smooth={true} duration={1000} className="logo"></Link>
            <div>
               <Link to="aboutme" smooth={true} duration={1000}><i className="far fa-address-card fa-1x" title="Resume"></i></Link>
               <Link to="tech_tool" smooth={true} duration={1000}><i className="fas fa-tools fa-1x" title="Tech & Tools"></i></Link>
               <Link to="projects" smooth={true} duration={1000}><i className="fas fa-laptop-code fa-1x" title="Projects"></i></Link>
               <Link to="journey" smooth={true} duration={1000}><i className="fas fa-university fa-1x" title="Journey"></i></Link>
            </div>
            <div className="social">
               <a href="https://www.facebook.com/profile.php?id=100007324811199" target="_blank" rel="noopener noreferrer" title="Facebook"><img src={facebook}  alt="socialMediaLogo" className="social_logo"/></a>
               <a href="https://instagram.com/_shubhamsinghrajpoot_?utm_medium=copy_link" target="_blank" rel="noopener noreferrer" title="Instagram"><img src={instagram}  alt="socialMediaLogo" className="social_logo"/></a>
               <a href="https://www.linkedin.com/in/shubham-singh-0700631b1/" target="_blank" rel="noopener noreferrer" title="Linkedin"><img src={linkedin}  alt="socialMediaLogo" className="social_logo"/></a>
               <a href="https://twitter.com/_rajpootShubham?t=IbGlAxlMfYRpw1UEugXT4A&s=09" target="_blank" rel="noopener noreferrer" title="Twitter"><img src={twitter}  alt="socialMediaLogo" className="social_logo"/></a>
               <a href="https://github.com/Shubham8545" target="_blank" rel="noopener noreferrer" title="Github"><img src={github}  alt="socialMediaLogo" className="social_logo"/></a>
            </div>
         </div>
      )
   }
}
export default sidebar;