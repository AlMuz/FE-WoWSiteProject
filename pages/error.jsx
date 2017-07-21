import React from 'react';
import Navbar from '../components/navbar';
import VideoClass from '../components/video';
import FooterClass from '../components/FooterClass';



class Err extends React.Component{
  render(){
    return(
      <div className="container">
        {/* Header dont need this, because logo is in navigation bar
        */}
        <header className="header"></header>
        <nav className="navigation">
          <Navbar />
        </nav>

        <main className="content">
          <div className="errcontent">
            <h1>
              Page not found error
              <br/>
              ERROR 404
            </h1>
          </div>
        </main>
        <FooterClass/>
      </div>
    );
  }
}

export default Err;
