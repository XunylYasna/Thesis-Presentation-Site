import React from "react";
import Layout from "../components/Layout";

class IndexRoute extends React.Component {
  render() {
    return (
      <Layout pageTitle="Home" description="Home page">
        <div>
          <div className="content">
            <div className="content__inner">
              <h1>Research Overview</h1>
              <p>
                The development of the study follows a 7-stage pipeline namely
                image collection, preparing data for crowdsourcing,
                crowdsourcing platform development, crowdsourcing, sidewalk
                width collection, accessibility score modeling and validation,
                and improving the pipeline of Atlas.
              </p>
              <h2>Image Collection</h2>
              <p>
                An initial collection of Google Street View images was conducted
                in order to provide data to our research processes, namely
                running YOLOv5 on the GSV images and preparing it for deployment
                to the website. We collected unannotated GSV images representing
                streets in Makati and Manila City. For this task, we utilized
                PostgreSQL, PostGIS, OpenStreetMap (OSM), and Google Street View
                to implement a semi-automatic method of collecting images.
              </p>
              <h2>Preparing Data for Crowdsourcing</h2>
              <p>
                Before the Google Street View images are uploaded to Atlas for
                crowdsourcing, we first needed to train our version of YOLOv5 to
                detect objects that are situated on Philippine sidewalks. This
                is to reduce the need for our crowdworkers to locate
                obstructions and draw a bounding box when using Atlas, our
                crowdsourcing platform.
              </p>
              <h2>Atlas Development</h2>
              <p>
                Atlas is an online crowdsourcing platform we developed to
                facilitate the crowdsourcing of accessibility scores by
                presenting pre-labeled sidewalk images to volunteers.
              </p>
              <h2>Crowdsourcing through Atlas</h2>
              <p>
                In Atlas, crowdworkers can annotate in our platform by
                registering, identifying objects, and scoring sidewalk
                accessibility.The annotation process is designed to be simple
                and convenient for crowdworkers to encourage them to score as
                many images as possible. The simple design also contributes to
                the speed of data collection so crowdworkers will not feel
                overworked from annotating multiple images.The crowdsourcing
                platform was disseminated through online community forums,
                schools, and urban planning groups.
              </p>
              <h2>Sidewalk Width Collection</h2>
              <p>
                In addition to collecting sidewalk accessibility scores,
                annotations, and surface types, we collected the widths of the
                annotated sidewalks due to its effect on sidewalk accessibility.
                The width of the sidewalk is a feature that contributes to its
                overall accessibility. The collection of sidewalk widths was
                done through the use of the measure distance feature on Google
                Earth.
              </p>
              <h2>Model Creation and Validation</h2>
              <p>
                After collecting accessibility scores, annotations, surface
                types, and sidewalk widths, we begin with modeling sidewalk
                accessibility. With the use of XGBoost, we created a regression
                model in order to see which features affect the accessibility of
                a sidewalk. The model was also used to predict the accessibility
                score of an entry given the features such as surface type,
                sidewalk width, and obstructions.
              </p>
              <h2>Improving the Pipeline of Atlas</h2>
              <p>
                We initially collected a total of 109,832 street view images
                from the Google Street View API. However, we encountered
                resource problems earlier on when training YOLOv5. With this, we
                used the 12,372 images we collected from manual annotations and
                combined it with the annotations from the YOLOv5 trained on the
                COCO 2017 annotations. We proceeded with our crowdsourcing on
                Atlas by only using the 12,372 street view images. However,
                training YOLOv5 would be helpful so that we can utilize all the
                109,832 street view images that we initially collected.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexRoute;
