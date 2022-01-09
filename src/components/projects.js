import React , { Component} from 'react';
import REPO from '../icons/repo.png';
import HTML from '../icons/html.png';
import CSS from '../icons/css.png';
import JAVASCRIPT from '../icons/javaScript.png';
import NPM from '../icons/npm.png';
import REACT from '../icons/react.png';
import TAILWIND from '../icons/tailwindcss.png';
import '../css/projects.css';


class projects extends Component {
   render(){
      return (
        <div className="projects" id="project">
            <div className="projects_title">Projects</div>
            <div className="project_card">
                <a href="#" target="_blank" rel="noopener noreferrer" className="project_title"> <img src={REPO} alt="Repo" className="project_git_repo" /> My Portfolio</a>
                <div className="project_date">31<sup>st</sup> Jan,2021 (Released)</div>
                <div className="project_content">Portfolio's are a great way to demonstrate the competencies we would list on our resume . Portfolio help us to showcase our work potentials and learnings.</div>
                <a href="#" target="_blank" rel="noopener noreferrer" className="code_button">&#60;&#x2f;&#62; Code</a>
                <div className="project_language">
                    <img src={NPM} alt="TechLogo" className="project_tech_logo" title="npm"/>
                    <img src={REACT} alt="TechLogo" className="project_tech_logo" title="React Js"/>
                    <img src={CSS} alt="TechLogo" className="project_tech_logo" title="CSS"/>
                    <img src={HTML} alt="TechLogo" className="project_tech_logo" title="HTML"/>
                </div>
            </div>
            <div className="project_card2">
                <a href="https://shubhamsinghblog.netlify.app/" target="_blank" rel="noopener noreferrer" className="project_title"> <img src={REPO} alt="Repo" className="project_git_repo" /> Blog</a>
                <div className="project_date">2<sup>nd</sup> August,2021 - 6<sup>th</sup> September,2021</div>
                <div className="project_content">This project is my first React based project. In this project we totally focused on better user experience.</div>
                <a href="https://github.com/Shubham8545/Blog" target="_blank" rel="noopener noreferrer" className="code_button">&#60;&#x2f;&#62; Code</a>
                <div className="project_language">
                    <img src={REACT} alt="TechLogo" className="project_tech_logo" title="React Js"/>
                    <img src={JAVASCRIPT} alt="TechLogo" className="project_tech_logo" title="JavaScript"/>
                    <img src={CSS} alt="TechLogo" className="project_tech_logo" title="CSS"/>
                    <img src={HTML} alt="TechLogo" className="project_tech_logo" title="HTML"/>
                </div>
            </div>
            <div className="project_card">
                <a href="https://nextgenui.in/" target="_blank" rel="noopener noreferrer" className="project_title"> <img src={REPO} alt="Repo" className="project_git_repo" />Next Gen UI</a>
                <div className="project_date">1<sup>st</sup> December,2021 (Released)</div>
                <div className="project_content">Next Gen UI is a home for front-end &amp; UI/Ux developers. We provide all the necessary components required to build a scalable front-end application.</div>
                <a href="https://github.com/AnkitRajCode/Component-UI.git" target="_blank" rel="noopener noreferrer" className="code_button">&#60;&#x2f;&#62; Code</a>
                <div className="project_language">
                    <img src={NPM} alt="TechLogo" className="project_tech_logo" title="npm"/>
                    <img src={REACT} alt="TechLogo" className="project_tech_logo" title="React Js"/>
                    <img src={JAVASCRIPT} alt="TechLogo" className="project_tech_logo" title="JavaScript"/>
                    <img src={TAILWIND} alt="TechLogo" className="project_tech_logo" title="Tailwind-CSS"/>
                    <img src={HTML} alt="TechLogo" className="project_tech_logo" title="HTML"/>
                </div>
            </div>
        </div>
       )
    }
}

export default projects;