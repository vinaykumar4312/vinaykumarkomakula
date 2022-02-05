import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Clients from "./components/Clients";
import Testimonial from "./components/Testimonial";
import WhatIDo from "./components/WhatIDo";

const About = () => {
  return (
    <div>
      <div className="about">
        <Container>
          <Row>
            <Col>
              <div className="abt-img">
                <Image
                  src={process.env.PUBLIC_URL + "/images/vinaykumar.jpg"}
                  roundedCircle
                  style={{
                    border: "10px solid #444",
                    boxShadow: "0 0 25px 0 rgba(0, 0, 0, .8)",
                  }}
                />
              </div>
            </Col>
            <Col>
              <div className="abt-content">
                <span>Frontend developer</span>
                <h1>Vinaykumar Komakula</h1>
                <p>
                  I think you’ve got a good idea about Complete Web Solution.
                  I‘m an expert freelance Web Designer and Developer and Digital
                  Marketing in Hyderabad.
                </p>
                <Button
                  variant="outline-primary"
                  style={{ borderRadius: "20px", marginRight: "10px" }}
                >
                  Download CV
                </Button>{" "}
                <Button variant="outline-dark" style={{ borderRadius: "20px" }}>
                  Hire Me
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <WhatIDo />
      <Testimonial />
      <Clients />
    </div>
  );
};

export default About;
