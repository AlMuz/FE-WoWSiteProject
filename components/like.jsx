import React from 'react';

class Like extends React.Component{
  constructor(){
    super();
    this.state = {
      likes: 0
    }
  }

  addLike(){
    this.setState({likes: this.state.likes + 1 })
  }
  disLike(){
    this.setState({likes: this.state.likes - 1 })
  }
  render(){
    return(
      <div className="forlike">
        <h1>Rate this news please!</h1>
        <ul>
          <li><button onClick={this.disLike.bind(this)}>-</button></li>
          <li><p>{this.state.likes}</p></li>
          <li><button onClick={this.addLike.bind(this)}>+</button></li>
        </ul>
      </div>

    );
  }
}

export default Like;
