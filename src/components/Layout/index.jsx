import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Sidebar from "../Sidebar";
import "../../assets/scss/init.scss";
import "./style.scss";

export default function Layout({ children, pageTitle, description }) {
  return (
    <StaticQuery
      query={graphql`
        query layoutQuery {
          site {
            siteMetadata {
              department
              program
              thesisTitle
              title
              subtitle
              copyright
              keywords
              menu {
                label
                path
              }
              author {
                name
                email
                telegram
                twitter
                github
                rss
                vk
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="layout_main">
          <Helmet defaultTitle="Thesis Site">
            <title>{pageTitle}</title>
            <meta name="description" content={description} />
          </Helmet>
          <div className="layout_main_container">
            <Sidebar siteData={data} />
            <section className="layout_main_content">{children}</section>
          </div>
        </div>
      )}
    />
  );
}
