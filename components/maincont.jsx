import React from 'react';
import {Link} from 'react-router';
import Like from './like';

class Maincontent extends React.Component{

  render(){
    return(
      <div className="maincont">
        <h1>{this.props.name}</h1>
        <p>{this.props.text}</p>
        <Like/>
        <hr/>
      </div>
    );
  }
}

export default Maincontent;
