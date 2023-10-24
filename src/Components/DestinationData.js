import { Component } from "react";
import "./DestinationStyles.css";
class DestinationData extends Component {
  render() {
    return (
      <div className="{this.props.className}">
        {this.props.name === "mittal" ? (
          <div className="first-des">
            <div className="des-text">
              <h2>{this.props.heading}</h2>
              <p>{this.props.text}</p>
            </div>
            <div className="image">
              <img alt="img" src={this.props.img1} />
              <img alt="img" src={this.props.img2} />
            </div>
          </div>
        ) : (
          <div className="first-des-reverse">
            <div className="image">
              <img alt="img" src={this.props.img1} />
              <img alt="img" src={this.props.img2} />
            </div>
            <div className="des-text">
              <h2>{this.props.heading}</h2>
              <p>{this.props.text}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default DestinationData;
