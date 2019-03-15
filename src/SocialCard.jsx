import React, { Component } from 'react'
import "./SocialCard.scss";
export default class SocialCard extends Component {
    state = {
        expanded:false,
        article:{
          author:"Yannik",
          profilePic:"http://conferenceoeh.com/wp-content/uploads/profile-dummy-girl.jpg",
          timestamp:"15-03-2019",
          text:"Is this real-life?",
          imgUrl:"https://i.ebayimg.com/images/g/HKIAAOSwtOZcaqpW/s-l1600.jpg"
        }
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
        <span><img src={this.state.article.profilePic} alt=""/><h5><a href="#">{this.state.article.author}</a></h5></span>
        <span><small>{this.state.article.timestamp}</small><i className={indicatorClasses.join(" ")} onClick={() => {this.setState({expanded:!this.state.expanded})}}></i></span></div>
        <div className={contentClasses.join(" ")}>
                <hr/>
                <div className="social--body">
                    <p>{this.state.article.text}</p>
                    <img src={this.state.article.imgUrl} alt=""/>
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
