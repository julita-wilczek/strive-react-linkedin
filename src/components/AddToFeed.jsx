import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./AddToFeed.css";

const AddToFeed = () => {
  return (
    <Container id="feedContainer">
      <div className="d-flex justify-content-between mt-2">
        <div id="titleFeedCard">Add to your feeds</div>
        <i id="infoIcon" class="bi bi-info-square-fill"></i>
      </div>
      <Col>
        <Row className="pl-0 my-3 feedProfile">
          <Image className="imgFeed pl-0" src="https://picsum.photos/200" />
          <div className="ml-2">
            <div className="feedTitle">Foreign Policy</div>
            <div className="feedJobType">Publishing</div>
            <div className="d-flex flex-row">
              <div
                className="rounded-pill ButtonFollow"
                variant="outline-secondary"
              >
                <i class="bi bi-plus"></i>
                Follow
              </div>
            </div>
          </div>
        </Row>
        <Row className="pl-0 my-3 feedProfile">
          <Image className="imgFeed pl-0" src="https://picsum.photos/200" />
          <div className="ml-2">
            <div className="feedTitle">International Group</div>
            <div className="feedJobType">Import-Export</div>
            <div className="d-flex flex-row">
              <div
                className="rounded-pill ButtonFollow"
                variant="outline-secondary"
              >
                <i class="bi bi-plus"></i>
                Follow
              </div>
            </div>
          </div>
        </Row>
        <Row className="pl-0 my-3 feedProfile">
          <Image className="imgFeed pl-0" src="https://picsum.photos/200" />
          <div className="ml-2">
            <div className="feedTitle">Magda Lena</div>
            <div className="feedJobType">Manager-HR</div>
            <div className="d-flex flex-row">
              <div
                className="ButtonFollow"
               
              >
                <i class="bi bi-plus"></i>
                Follow
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <div className="d-flex feedProfile" id="viewAllRecomandation">
            <div className="mt-1">View All Recommandation</div>
            <i class="bi bi-arrow-right ml-2 " id="arrowFeed"></i>
          </div>
        </Row>
      </Col>
    </Container>
  );
};

export default AddToFeed;
