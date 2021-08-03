import { Component } from "react";
import UserLogo from './../images/right-panel/user-logo.svg';

export default class UserCard extends Component{

  render(){
    return (
      <div className="user-card">
        <div className="user-logo"><img src={UserLogo} alt=""/></div>
        <div className="user-info">
          <h3>{this.props.userName}</h3>
          <p>{`Joined ${this.props.userTime} ago`}</p>
        </div>
      </div>
    );
  }
}