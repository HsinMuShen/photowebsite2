import React from "react";

class Picture extends React.Component {
  render(props) {
    return (
      <div className="picture">
        <p>Photographer: {this.props.data.photographer}</p>
        <div className="imageContainer">
          <img src={this.props.data.src.large} alt="" />
        </div>
        <p>
          Dowmload Image:
          <a target="_blank" href={this.props.data.src.large}>
            Click Here
          </a>
        </p>
      </div>
    );
  }
}

export default Picture;
