import React , { Component} from 'react';
import C from '../icons/C.webp';
import CPLUS from '../icons/C++.png';
import PYTHON from '../icons/py.png';
import JAVA from '../icons/java.png';
import HTML from '../icons/html.png';
import CSS from '../icons/css.png';
import BOOTSTRAP from '../icons/bootstrap.png';
import JAVASCRIPT from '../icons/javaScript.png';
import REACT from '../icons/react.png';
import MYSQL from '../icons/mysql.png';
import GIT from '../icons/git.png';
import NETLIFY from '../icons/netlify.png';
import '../css/techTool.css';


class tech_tools extends Component {
   render(){
      return (
        <div className="tech_tool" id="tech_tool">
            <div className="tech_tool_title">Tech. and Tools I use</div>
            <a href="https://devdocs.io/c/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={C} alt="tech_tools" className="tech_logo" /><span className="title_track">C</span></a>
            <a href="https://devdocs.io/cpp/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={CPLUS} alt="tech_tools" className="tech_logo" /><span className="title_track">C++</span></a>
            <a href="https://devdocs.io/cpp/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={PYTHON} alt="tech_tools" className="tech_logo" /><span className="title_track">Python</span></a>
            <a href="https://devdocs.io/cpp/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={JAVA} alt="tech_tools" className="tech_logo" /><span className="title_track">Java</span></a>
            <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={HTML} alt="tech_tools" className="tech_logo" /><span className="title_track">HTML 5</span></a>
            <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={CSS} alt="tech_tools" className="tech_logo" /><span className="title_track">CSS 3</span></a>
            <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={BOOTSTRAP} alt="tech_tools" className="tech_logo" /><span className="title_track">Bootstrap</span></a>
            <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={JAVASCRIPT} alt="tech_tools" className="tech_logo" /><span className="title_track">JavaScript</span></a>
            <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={REACT} alt="tech_tools" className="tech_logo" /><span className="title_track">React Js</span></a>
            <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={MYSQL} alt="tech_tools" className="tech_logo" /><span className="title_track">MySQL</span></a>
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={GIT} alt="tech_tools" className="tech_logo" /><span className="title_track">Git</span></a>
            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={NETLIFY} alt="tech_tools" className="tech_logo" /><span className="title_track">Netlify</span></a>
        </div>
      )
   }
}

export default tech_tools;