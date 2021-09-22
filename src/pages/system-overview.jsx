import React from "react";
import Layout from "../components/Layout";

class IndexRoute extends React.Component {
  render() {
    return (
      <Layout pageTitle="Home" description="Home page">
        <div>
          <div className="content">
            <div className="content__inner">
              <h1>System Overview - Atlas</h1>
              <h2>Storage and Database</h2>
              <p>
                In terms of storage, we use Azure Storage Explorer to store all
                raw images and blob data. MongoDB is used to store all data
                collected from Atlas, such as sidewalk accessibility scores,
                annotations, and participant information (non-personally
                identifiable information) MongoDB is also used to store the
                links to the pre-labeled images and their annotations from
                YOLOv5 and OCR (ResNet-101).
              </p>
              <h2>Backend</h2>
              <p>
                For the backend of the Atlas system, we use Next.js API routes
                for the API responsible for querying the data and saving the
                user inputs to the database. These API routes retrieve the
                pre-labeled images from MongoDB, authenticate users, register
                users, and save user annotation to the database.
              </p>
              <h2>Frontend</h2>
              <p>
                For the frontend, we use Next.js and Tailwind CSS for our
                styling. Next.js is an open-source development framework built
                on top of Node.js enabling React based web applications
                functionalities such as server-side rendering and generating
                static websites. Tailwind CSS is a utility-first CSS framework
                that excels in rapid styling of HTML elements. We built the
                annotation tool by building on top of React Picture Annotation
                and customizing it to our needs.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexRoute;
