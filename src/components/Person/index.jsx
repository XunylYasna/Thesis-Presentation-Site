import React from "react";
// import { StaticQuery, graphql } from "gatsby";
// import imageTest from "../../static/proponents/Lynux.png";
import "./style.scss";

class Keyword extends React.Component {
  render() {
    const { person } = this.props;
    const imagePath = `/proponents/${person.imageFileName}`;
    return (
      <div className="person">
        <img src={imagePath} alt={`${person.name}`}></img>
        <p>{person.name}</p>
        <p>{person.email}</p>
      </div>
    );
  }
}

export default Keyword;
