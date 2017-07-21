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
      <div>
        <button onClick={this.disLike.bind(this)}>-</button>
        <p>{this.state.likes}</p>
        <button onClick={this.addLike.bind(this)}>+</button>
      </div>

    );
  }
}

export default Like;
