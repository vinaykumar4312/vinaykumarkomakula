import { Container } from "react-bootstrap";
import Slider from "react-slick";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
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
    <div className="testimonials">
      <Container>
        <h2 className="testi">Testimonials</h2>
        <Slider {...settings}>
          <div className="card-box">
            <div className="card-body">
              <p>
                Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
                Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
                vitae lacinia maximus, risus velit vehicula odio, a tincidunt
                turpis turpis tempus ex.
              </p>
              <h5>manoj</h5>
            </div>
          </div>
          <div className="card-box">
            <div className="card-body">
              <p>
                Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
                Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
                vitae lacinia maximus, risus velit vehicula odio, a tincidunt
                turpis turpis tempus ex.
              </p>
              <h5>ravi</h5>
            </div>
          </div>
          <div className="card-box">
            <div className="card-body">
              <p>
                Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
                Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
                vitae lacinia maximus, risus velit vehicula odio, a tincidunt
                turpis turpis tempus ex.
              </p>
              <h5>ramesh</h5>
            </div>
          </div>
          <div className="card-box">
            <div className="card-body">
              <p>
                Mauris neque libero, aliquet vel mollis nec, euismod sed tellus.
                Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor
                vitae lacinia maximus, risus velit vehicula odio, a tincidunt
                turpis turpis tempus ex.
              </p>
              <h5>gopi</h5>
            </div>
          </div>
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonial;
