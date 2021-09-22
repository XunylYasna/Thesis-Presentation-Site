import React from "react";
import "./style.scss";

class Keyword extends React.Component {
  render() {
    const { keyword } = this.props;

    return <p className="keyword">{keyword}</p>;
  }
}

export default Keyword;
