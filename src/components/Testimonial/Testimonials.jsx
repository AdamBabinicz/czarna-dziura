import React from "react";
import "./Testimonials.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import img from "../../assets/images/12.jpg";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section id="sagittarius">
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="..." className="w-100" />
              </div>

              <div className="testimonial__content">
                <h2 className="mb-4">Sagittarius A*</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">Obiekt astronomiczny</h6>
                      <p>
                        Jest jasnym i bardzo zwartym źródłem radiowym w centrum
                        Drogi Mlecznej, częścią większej struktury
                        astronomicznej (Sagittarius A).
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Sgr A*</h6>
                        <p>pl.wikipedia.org/wiki/Sagittarius_A*</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Odległość do źródła wynosi około 8 kpc (2,4×1017 km)
                      </h6>
                      <p>
                        Jest supermasywną czarną dziurą o masie około 4,31±0,06
                        milionów mas Słońca (masa Słońca w przybliżeniu wynosi
                        2×1030 kg).
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Sgr A*</h6>
                        <p>pl.wikipedia.org/wiki/Sagittarius_A*</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Kolejne obserwacje przyniosły odkrycie, że źródło
                        rentgenowskie zmienia swoją jasność
                      </h6>
                      <p>
                        Źródło świeci nie tylko radiowo i na falach
                        milimetrowych, odkryto emisję w zakresie podczerwieni, i
                        nawet w obserwacjach wysokiej rozdzielczości źródło jest
                        widoczne jako punktowe. Promieniowanie rentgenowskie
                        Sagittarius A* udało się zaobserwować dopiero przy
                        użyciu teleskopu Chandra.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Sgr A*</h6>
                        <p>pl.wikipedia.org/wiki/Sagittarius_A*</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
