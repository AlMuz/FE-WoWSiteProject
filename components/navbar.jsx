import React from 'react';
import {Link} from 'react-router';

class Navbar extends React.Component{
  render(){
    return(
      <div className="navdiv">
        <ul>
          <li><Link to="/"><img src="assets/img/favicon.png" id="Logo"></img></Link></li>
          <li><Link to="/">Game</Link></li>
          <li><Link to="/">Story</Link></li>
          <li><Link to="/">News</Link></li>
          <li><Link to="/">Forums</Link></li>
          <li><Link to="/">Shop</Link></li>
          <li><Link to="/">Esports</Link></li>
          <li><Link to="/">Log in</Link></li>
          <li><Link to="/">Try free</Link></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
