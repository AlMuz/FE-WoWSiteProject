import React from 'react';
import Navbar from '../components/navbar';
import VideoClass from '../components/video';
import FooterClass from '../components/FooterClass';



class Main extends React.Component{
  render(){
    return(
      <div className="container">
        <header className="header"></header>
        <nav className="navigation">
          <Navbar />
        </nav>
        <main className="content">
          <VideoClass/>
          <p>main</p>
        </main>
        <FooterClass/>
      </div>
    );
  }
}

export default Main;
