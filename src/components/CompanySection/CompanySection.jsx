import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./CompanySection.css";

const CompanySection = () => {
  return (
    <section>
      <Row className="company-section">
        <Col lg="2" md="3">
          <h3 className="d-flex align-items-center gap-1 justify-content-center">
            <a
              href="//www.facebook.com/watch/?ref=search&v=419829542909727&external_log_id=2f37c8e8-2194-4a72-8483-418e1fa502a0&q=czarna%20dziura"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="ri-facebook-line"></i>
            </a>
          </h3>
        </Col>
        <Col lg="2" md="3">
          <h3 className="d-flex align-items-center gap-1 justify-content-center">
            <a
              href="//pl.pinterest.com/levy0528/czarne-dziury"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="ri-pinterest-line"></i>
            </a>
          </h3>
        </Col>
        <Col lg="2" md="3">
          <h3 className="d-flex align-items-center gap-1 justify-content-center">
            <a
              href="//brainboss.pl/kosmos/czarna-dziura-czym-jest-i-jak-powstaje"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="ri-google-fill"></i>
            </a>
          </h3>
        </Col>
        <Col lg="2" md="3">
          <h3 className="d-flex align-items-center gap-1 justify-content-center">
            <a
              href="//twitter.com/cnkopernik/status/1115969180522680320"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="ri-twitter-line"></i>
            </a>
          </h3>
        </Col>
        <Col lg="2" md="3">
          <h3 className="d-flex align-items-center gap-1 justify-content-center">
            <a
              href="//www.youtube.com/watch?v=SgK0A0ijXvs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="ri-youtube-line"></i>
            </a>
          </h3>
        </Col>
        <Col lg="2" md="3">
          <h3 className="d-flex align-items-center gap-1 justify-content-center">
            <a
              href="//www.instagram.com/explore/tags/czarnadziura"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="ri-instagram-line"></i>
            </a>
          </h3>
        </Col>
      </Row>
    </section>
  );
};

export default CompanySection;
