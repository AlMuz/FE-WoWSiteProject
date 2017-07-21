import React from 'react';
import Navbar from '../components/navbar';
import FooterClass from '../components/FooterClass';



class Userinfo extends React.Component{
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
          <div className="regcontent">
            <p></p>

          </div>
        </main>
        <FooterClass/>
      </div>
    );
  }
}

export default Userinfo;
