import React, { Component } from 'react'
import "./SocialCard.scss";
export default class SocialCard extends Component {
    state = {
        expanded:false
    }
  render() {
      let contentClasses = ["social--content"]
      let indicatorClasses = ["fas","fa-angle-left"]
      if(this.state.expanded === true){
        indicatorClasses.push("rotate");
      } else {
        contentClasses.push("hidden");
      }
    return (
      <div className="social-card">
        <div className="social--header">
        <span><img src="http://conferenceoeh.com/wp-content/uploads/profile-dummy-girl.jpg" alt=""/><h5><a href="#">Username</a></h5></span>
        <span><small>timestamp</small><i className={indicatorClasses.join(" ")} onClick={() => {this.setState({expanded:!this.state.expanded})}}></i></span></div>
        <div className={contentClasses.join(" ")}>
                <hr/>
                <div className="social--body">
                    <p>is this real life?</p>
                    <img src="https://i.ebayimg.com/images/g/HKIAAOSwtOZcaqpW/s-l1600.jpg" alt="1 nice picture"/>
                </div>
                <div className="social--footer">
                <div className="social--action-box">
                    <i className="fas fa-heart"></i>
                </div>
                <div className="social--action-box">
                    <i className="fas fa-share-alt"></i>
                </div>
                <div className="social--action-box">
                    <i className="fas fa-comments"></i>
                </div>
                </div>
              </div>
      </div>
    )
  }
}
