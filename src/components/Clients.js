import { Container, Image } from "react-bootstrap";
import Slider from "react-slick";

const Clients = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
  };
  return (
    <div className="clientss">
      <Container>
        <h2 className="client">Clients</h2>
        <Slider {...settings}>
          <div>
            <Image
              src={process.env.PUBLIC_URL + "/images/rw47.png"}
              style={{ width: "200px", marginTop: "29px" }}
            />
          </div>
          <div>
            <Image
              src={process.env.PUBLIC_URL + "/images/vasavi-logo.jpg"}
              style={{ width: "200px", marginTop: "29px" }}
            />
          </div>
          <div>
            <Image
              src={process.env.PUBLIC_URL + "/images/logos.png"}
              style={{ width: "150px" }}
            />
          </div>
          <div>
            <Image
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              style={{ width: "150px" }}
            />
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Clients;
