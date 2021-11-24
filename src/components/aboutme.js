import React , { Component} from 'react';
import '../css/aboutme.css'

class aboutme extends Component {
   render(){
      return (
         <div className="about_me" id="aboutme">
            <div className="my_dp"></div>
            <div className="intro">
               <div className="intro_title">Front-End Web Developer</div>
               <p className="intro_details">
                  Hi, I am Shubham, a Front-End Web Developer, and a Competitive Programmer. I love solving problems and 
                  developing. I am currently a B. Tech Sophomore at Kalinga Institute of Industrial Technology majoring in 
                  Information Technology. I'd love to combine my passion for problem-solving and developing to build 
                  something awesome which could help to solve some big issues. In my free time, I like to read books.
               </p>
               <a href="https://drive.google.com/file/d/1Qm6JNHFz6JPv6-xgJqTyH3XnwRxlsdiw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="code_button"><i className="fas fa-download"></i> Resume</a>
            </div>
        </div>
      )
   }
}

export default aboutme;