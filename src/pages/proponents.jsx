import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import Person from "../components/Person";

class ProponentsRoute extends React.Component {
  render() {
    const { members, advisers } = this.props.data.site.siteMetadata;
    const membersList = [];
    const adviserList = [];

    members.forEach((member, index) => {
      membersList.push(<Person person={member} key={index}></Person>);
    });

    advisers.forEach((adviser, index) => {
      adviserList.push(<Person person={adviser} key={index}></Person>);
    });

    return (
      <Layout pageTitle="Proponents" description="Meet the We The Streets team">
        <div>
          <div className="content">
            <div className="content__inner">
              <h1>Team We The Streets</h1>
              <h2>Members</h2>
              <div className="proponent_card_container">{membersList}</div>
              <h2>Advisers</h2>
              <div className="proponent_card_container">{adviserList}</div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default ProponentsRoute;

export const pageQuery = graphql`
  query proponentsQuery {
    site {
      siteMetadata {
        members {
          name
          email
          imageFileName
        }
        advisers {
          name
          email
          imageFileName
        }
      }
    }
  }
`;
