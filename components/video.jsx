import React from 'react';
import {Link} from 'react-router';

class VideoClass extends React.Component{
  render(){
    return(
      <div className="textvideo">
        <video playsInline autoPlay muted loop id="bgvid">
            <source src="assets/img/fon.mp4" type="video/mp4" />
        </video>
        <h2>
          <span>
            <span className="bigsize">THE TOMB OF SARGERAS IS OPEN</span>
            <br/>The Armies of Legionfall are ready.
            <br/> The Tomb of Sargeras has been breached.
            <br/> Venture into the Tomb, face nine epic bosses and take the fight to the Legion!
          </span>
            <a href="https://www.youtube.com/watch?v=ZDlEWMYts50">Watch survival guide</a>
        </h2>
      </div>
    );
  }
}

export default VideoClass;
