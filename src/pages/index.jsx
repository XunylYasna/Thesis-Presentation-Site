import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";

class IndexRoute extends React.Component {
  render() {
    const { publicURL } = this.props.data.allFile.edges[0].node;

    console.log(publicURL);
    return (
      <Layout pageTitle="Conference Paper" description="Conference Paper">
        <div>
          <div className="content">
            <div className="content__inner">
              <iframe
                title="Conference Paper"
                src={publicURL}
                className="pdf-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexRoute;

export const pageQuery = graphql`
  query IndexQuery {
    allFile(filter: { extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;
