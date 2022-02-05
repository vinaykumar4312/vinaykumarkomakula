import { Container } from "react-bootstrap";
import { Carousel } from "react-elastic-carousel";
import Item from "./Item";

export const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export const Testimonials = () => {
  return (
    <>
      <div className="testimonials">
        <Container>
          <h2 className="testi">Testimonials</h2>
          <div className="testi-carousel">
            <Carousel breakPoints={breakPoints}>
              <Item>1</Item>
              <Item>2</Item>
              <Item>3</Item>
              <Item>4</Item>
              <Item>5</Item>
            </Carousel>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;
