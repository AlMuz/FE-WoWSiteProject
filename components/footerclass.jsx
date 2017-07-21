import React from 'react';
import {Link} from 'react-router';

class FooterClass extends React.Component{
  render(){
    return(
      <footer className="footer">
        <img src="assets/img/blizz_logo.png"/>
        <div className="navdivfoot">
          <ul>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Support</Link></li>
            <li><Link to="/">Feedback</Link></li>
            <li><Link to="/">Press</Link></li>
            <li><Link to="/">Api</Link></li>

          </ul>
        </div>
        <p>©2017 BLIZZARD ENTERTAINMENT, INC. ALL RIGHTS RESERVED.</p>
      </footer>

    );
  }
}

export default FooterClass;
