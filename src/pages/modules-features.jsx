import React from "react";
import Layout from "../components/Layout";

class IndexRoute extends React.Component {
  render() {
    return (
      <Layout pageTitle="Home" description="Home page">
        <div>
          <div className="content">
            <div className="content__inner">
              <h1>Major Modules and System Features</h1>
              <div>
                <h2>Computer Vision Model</h2>
                {/* <a href="">Github Repository</a> */}
                <h3>Object Detection - YOLO v5</h3>
                <p>
                  For training YOLOv5, its main purpose is to detect objects
                  situated on Philippine sidewalks, and to reduce the need for
                  our crowdworkers to locate these obstructions and draw a
                  bounding box when using our crowdsourcing platform. We
                  filtered out the objects which YOLOv5 can already detect out
                  of the box, and it can be seen at the table on the left. We
                  downloaded twenty four thousand eight hundred sixty six images
                  from the Common Objects in Context or COCO Dataset which
                  contains the instances of the objects specified on the table.
                  On the other hand, we wanted to add to our list additional
                  objects that can be found on Philippine sidewalks. At the
                  table on the right, we crowdsourced annotations from
                  volunteers and received a total of twelve thousand three
                  hundred seventy two annotated images which contain instances
                  of the objects found on our streetview images.
                </p>
                <h3>Semantic Segmentation</h3>
                <p>
                  After detecting objects through YOLOv5, we use semantic
                  segmentation in order to separate the sidewalk from the road.
                  We ran the OCR (Resnet-101) model on all the collected images.
                  Unfortunately, the results of the semantic segmentation model
                  were not accurate on majority of the images. The semantic
                  segmentation model would often mislabel portions of the road
                  as sidewalk even if there was no sidewalk in the picture.
                  Other than this, it would also produce incomplete sidewalks.
                  While the semantic segmentation model also produced images
                  that are accurate and complete, these were few in comparison
                  to the incomplete and mislabeled sidewalks. These problems
                  could be caused by poor lighting conditions, wide field of
                  view, unclear borders between sidewalks and roads. We
                  considered morphological transformation to correct this but it
                  would not solve images with mislabeled sidewalks. Because of
                  this, we decided to not implement the semantic segmentation as
                  an additional process in filtering images that would go on the
                  annotation platform.
                </p>
              </div>
              <div>
                <h2>Atlas</h2>
                {/* <a href="">Github Repository</a> */}
                <p>
                  We set out to develop a crowdsourcing platform wherein users
                  can give their inputs on sidewalk accessibility, pavement
                  type, and those they consider as an obstruction to the
                  sidewalk given the preprocessed image. For our objectives,
                  there are three relevant tables: users, annotations, and
                  images. The user table contains all relevant information in
                  building a demographic of crowdworkers and authentication for
                  logging in the platform. The images table contains our
                  pre-processed images: this include the blob link url,
                  longitude and latitude, direction, city, and the bounding
                  boxes for the objects that our computer vision model detected.
                  Lastly, the annotation tables are where user annotations are
                  stored when they contribute to our platform. The web
                  application itself was built using a react based development
                  framework called Next.js where we utilize the API module for
                  the Get and Post requests.
                </p>
              </div>
              <div>
                <h2>Accessibility Score Model</h2>
                {/* <a href="">Github Repository</a> */}
                <p>
                  We tested different models such as scikit-learn’s linear
                  regressor, and XGBoost classifier and regressor and chose the
                  best performing model. We also used GridSearchCV to obtain the
                  configuration with the most optimal hyperparameters for the
                  XGBoost models. We use the 5-fold cross validation score and
                  root mean squared error to measure the performance of the
                  models. After getting the most optimal parameters for the
                  XGBoost models, we compared the performance of the 5 different
                  models. Tthe tuned XGBRegressor has the highest 5-fold cross
                  validation score among all models. The linear regression model
                  has the same RMSE but lower 5-Fold Cross Validation score.
                  While the XGBClassifier, both tuned and untuned, had higher
                  RMSE values with 2.7 and had a noticeably less accuracy than
                  the XGBRegressor. Surprisingly, the RMSE of the base
                  XGBRegressor is lower than the tuned XGBRegressor by .03. But
                  the 1.48% difference in the 5-Fold Cross Validation score made
                  us choose the tuned XGBRegressor as the best performing model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexRoute;
