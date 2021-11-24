import React , { Component} from 'react';
import KIIT from '../img/kiitlogo.png';
import JNV from '../img/jnv.jpg';
import TAI from '../img/tai.jpg';
import GENESIS from '../img/genesis.jpg';
import '../css/journey.css';

class journey extends Component {
   render(){
      return (
        <div className="journey" id="journey">
            <div className="journey_title">JOURNEY</div>
            <div className="journey_sub_division">
                <div className="journey_sub_title">Education</div>
                <div className="timeline">
                    <a href="https://kiit.ac.in/" target="_blank" rel="noopener noreferrer"><img src={KIIT} alt="logo" className="timeline_logo"/></a>
                    <div className="line"></div>
                    <a href="https://thearyaninternationalschool.com/" target="_blank" rel="noopener noreferrer"><img src={TAI} alt="logo" className="timeline_logo"/></a>
                    <div className="line"></div>
                    <a href="https://www.navodaya.gov.in/nvs/nvs-school/VARANASI/en/home/" target="_blank" rel="noopener noreferrer"><img src={JNV} alt="logo" className="timeline_logo"/></a>
                </div>
                <div className="timeline_detail_kiit">
                    <div className="institute_title">Kalinga Institute of Industrial Technology,</div>
                    <div className="institute_location">Bhubaneshwar, Odisha, India.</div>
                    <li className="details">Pursuing B-tech in Information Technology</li>
                    <li className="details">Batch : 2019 - 2023</li>
                </div>
                <div className="timeline_detail_tai">
                    <div className="institute_title">The Aryan International School,</div>
                    <div className="institute_location">Varanasi, U.P., India.</div>
                    <li className="details">Senior Secondary Education,CBSE</li>
                    <li className="details">Batch : 2016 - 2018</li>
                    <li className="details">Stream : PCM + Arts</li>
                    <li className="details">Percentage : 70.0%</li>
                </div>
                <div className="timeline_detail_jnv">
                    <div className="institute_title">Jawahar Navodaya Vidyalaya,</div>
                    <div className="institute_location">Varanasi, U.P., India.</div>
                    <li className="details">Secondary Education,CBSE</li>
                    <li className="details">Batch : 2014 - 2016</li>
                    <li className="details">CGPA : 9 (i.e. 85%)</li>
                </div>
            </div>
            <div className="journey_sub_division_exp">
                <div className="journey_sub_title">Experience</div>
                <div className="timeline">
                    <a href="https://instagram.com/genesis.journey?igshid=1lbfzyfu3zztj" target="_blank" rel="noopener noreferrer"><img src={GENESIS} alt="logo" className="timeline_logo"/></a>
                </div>
                <div className="timeline_detail_genesis">
                    <div className="institute_title">Genesis</div>
                    <div className="institute_location">Founder</div>
                    <li className="details">June,2020 - Present</li>
                    <li className="details">Coding Club Head</li>
                    <li className="details">Conducted Coding Event Successfully</li>
                </div>
            </div>
        </div>
       )
    }
}

export default journey;