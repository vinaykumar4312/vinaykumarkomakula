import { Col, Container, Row } from "react-bootstrap";
import {
  FaPencilAlt,
  FaShoppingCart,
  FaDesktop,
  FaBullhorn,
} from "react-icons/fa";

const WhatIDo = () => {
  return (
    <div className="whatido">
      <Container>
        <h2 className="wid">What I Do</h2>
        <Row>
          <Col md={6}>
            <div className="wid-icon-box">
              <div className="wid-icon">
                <FaPencilAlt stykle={{ marginTop: "0px" }} />
              </div>
              <div className="wid-content">
                <h5>Copywrite</h5>
                <p>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed
                  tellus. Mauris convallis dictum elit id volutpat. Vivamus
                  blandit, dolor vitae lacinia maximus, risus velit vehicula
                  odio, a tincidunt turpis turpis tempus ex.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="wid-icon-box">
              <div className="wid-icon">
                <FaShoppingCart />
              </div>
              <div className="wid-content">
                <h5>Ecommerce</h5>
                <p>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed
                  tellus. Mauris convallis dictum elit id volutpat. Vivamus
                  blandit, dolor vitae lacinia maximus, risus velit vehicula
                  odio, a tincidunt turpis turpis tempus ex.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="wid-icon-box">
              <div className="wid-icon">
                <FaDesktop />
              </div>
              <div className="wid-content">
                <h5>Web Design</h5>
                <p>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed
                  tellus. Mauris convallis dictum elit id volutpat. Vivamus
                  blandit, dolor vitae lacinia maximus, risus velit vehicula
                  odio, a tincidunt turpis turpis tempus ex.
                </p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="wid-icon-box">
              <div className="wid-icon">
                <FaBullhorn />
              </div>
              <div className="wid-content">
                <h5>Marketing</h5>
                <p>
                  Mauris neque libero, aliquet vel mollis nec, euismod sed
                  tellus. Mauris convallis dictum elit id volutpat. Vivamus
                  blandit, dolor vitae lacinia maximus, risus velit vehicula
                  odio, a tincidunt turpis turpis tempus ex.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhatIDo;
