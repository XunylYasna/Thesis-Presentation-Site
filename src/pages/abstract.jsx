import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

class AbstractRoute extends React.Component {
  render() {
    const { abstract } = this.props.data.site.siteMetadata;

    return (
      <Layout pageTitle="Abstract" description="Abstract of the research page">
        <div>
          <div className="content">
            <div className="content__inner">
              <h1>Abstract</h1>
              <p>{abstract}</p>
              <h2>Table of Contents</h2>
              <ol>
                <li>
                  <a href="/chapters/Chapter 1.pdf" download>
                    Research Description
                  </a>
                </li>
                <li>
                  <a href="/chapters/Chapter 2.pdf" download>
                    Review of Related Literature
                  </a>
                </li>
                <li>
                  <a href="/chapters/Chapter 3.pdf" download>
                    Conceptual Framework
                  </a>
                </li>
                <li>
                  <a href="/chapters/Chapter 4.pdf" download>
                    Research Methodology
                  </a>
                </li>
                <li>
                  <a href="/chapters/Chapter 5.pdf" download>
                    Atlas
                  </a>
                </li>
                <li>
                  <a href="/chapters/Chapter 6.pdf" download>
                    Results and Discussion
                  </a>
                </li>
                <li>
                  <a href="/chapters/Chapter 7.pdf" download>
                    Conclusion and Recommendations
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AbstractRoute;

export const pageQuery = graphql`
  query abstractQuery {
    site {
      siteMetadata {
        abstract
      }
    }
  }
`;
