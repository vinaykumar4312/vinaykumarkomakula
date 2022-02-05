import { useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "manoj",
      body: "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
      id: 1,
    },
    {
      name: "ravi",
      body: "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
      id: 2,
    },
    {
      name: "ramesh",
      body: "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
      id: 3,
    },
    {
      name: "gopi",
      body: "Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.",
      id: 4,
    },
  ]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
  };
  return (
    <div className="testimonials">
      <Container>
        <h2 className="testi">Testimonials</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div className="card-box" key={testimonial.id}>
              <div className="card-body">
                <p>{testimonial.body}</p>
                <h5>{testimonial.name}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Testimonial;
