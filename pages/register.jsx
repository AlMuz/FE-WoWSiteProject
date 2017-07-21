import React from 'react';
import Navbar from '../components/navbar';
import VideoClass from '../components/video';
import FooterClass from '../components/FooterClass';


class Register extends React.Component{
  pushthebutton(){
    
  }
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
              <h1>Registration page</h1>
              <form action = "" >
                <label htmlFor="user">Username:  </label>
                <br/>
                <input type="text" name="Username" id="user" className="user"/>
                <br/>

                <label htmlFor="pass">Password:  </label>
                <br/>
                <input type="password" name="password" id="pass" className="pass"/>
                <br/>

                <label htmlFor="pass2">Repeat your password:  </label>
                <br/>
                <input type="password" name="password2" id="pass2" className="pass2"/>
                <br/>

                <button  onclick="pushthebutton()" type="submit" className="myButton">Register!</button>
              </form>
            </div>
          </main>
          <FooterClass/>

      </div>
    );
  }
}

export default Register;
