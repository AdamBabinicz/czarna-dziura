import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./CompanySection.css";

const CompanySection = () => {
  return (
    <section>
      <Row className="company-section">
        <Col lg="2" md="3">
          <h3 className="d-flex align-items-center gap-1 justify-content-center">
            <i class="ri-facebook-line"></i>
          </h3>
        </Col>
        <Col lg="2" md="3">
          <h3 className="d-flex align-items-center gap-1 justify-content-center">
            <i class="ri-pinterest-line"></i>
          </h3>
        </Col>
        <Col lg="2" md="3">
          <h3 className="d-flex align-items-center gap-1 justify-content-center">
            <i class="ri-google-fill"></i>
          </h3>
        </Col>
        <Col lg="2" md="3">
          <h3 className="d-flex align-items-center gap-1 justify-content-center">
            <i class="ri-twitter-line"></i>
          </h3>
        </Col>
        <Col lg="2" md="3">
          <h3 className="d-flex align-items-center gap-1 justify-content-center">
            <i class="ri-youtube-line"></i>
          </h3>
        </Col>
        <Col lg="2" md="3">
          <h3 className="d-flex align-items-center gap-1 justify-content-center">
            <i class="ri-instagram-line"></i>
          </h3>
        </Col>
      </Row>
    </section>
  );
};

export default CompanySection;
