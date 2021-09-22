import React from "react";

import Menu from "../Menu";
// import Links from "../Links";
import Keyword from "../Keyword";
import "./style.scss";

class Sidebar extends React.Component {
  render() {
    const { author, department, program, keywords, thesisTitle, menu } =
      this.props.siteData.site.siteMetadata;

    const keywordsList = [];
    keywords.forEach((keyword, index) => {
      keywordsList.push(<Keyword keyword={keyword} key={index} />);
    });

    const keywordBlock = (
      <div className="sidebar__keyword-block">
        <h3 className="sidebar__keyword-title">Keywords: </h3>
        <div className="sidebar__keyword-keywords">{keywordsList}</div>
      </div>
    );

    const titleBlock = (
      <div className="sidebar__author-block">
        <h1 className="sidebar__author-title">{author.name}</h1>
        <h2 className="sidebar__author-subtitle">{thesisTitle}</h2>
        {keywordBlock}
      </div>
    );

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">{titleBlock}</div>
          <div className="sidebar__links">
            <Menu data={menu} />
            {/* <Links data={author} /> */}
            <div className="sidebar__footer">
              <p className="sidebar__department">{department}</p>
              <p className="sidebar__program">{program}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
