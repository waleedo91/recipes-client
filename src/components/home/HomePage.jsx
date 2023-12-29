import { Carousel } from "react-bootstrap";
import food from "../../assets/images/bunch-of-food.jpg";
import pasta from "../../assets/images/pasta.jpg";
import steak from "../../assets/images/steak-burger.jpg";
import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="carousel">
        <Carousel>
          <Carousel.Item className="carousel-item" interval={1000}>
            <img src={food} alt="A bunch of food" className="picture" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={500}>
            <img src={pasta} alt="fork with pasta" className="picture" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img src={steak} alt="steak sandwich" className="picture" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
