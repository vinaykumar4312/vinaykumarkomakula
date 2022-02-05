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

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
