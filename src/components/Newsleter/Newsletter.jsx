import React from "react";
import "./Newsletter.css";
import { Container, Row, Col } from "reactstrap";
import img from "../../assets/images/14.jpg";

const Newsletter = () => {
  return (
    <section>
      <Container className="newsletter">
        <Row>
          <Col lg="12" className="text-center">
            <h2 className="mb-4">
              Wykrycie połączenia się dwóch monstrualnych czarnych dziur
            </h2>
            <div className="subscribe">
              <img src={img} alt="..." />
              {/* <input type="text" placeholder="Email" />
              <button className="btn">Subskrybuj</button> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
