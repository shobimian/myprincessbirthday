import "./index.css";
import { Container } from "react-bootstrap";
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaHome } from "react-icons/fa";
import { Carousel } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
        <Container>
          <div className="main">
            <Carousel style={{ borderRadius: "20px" }}>
              <Carousel.Item interval={8000}>
                <img
                  className="d-block w-100"
                  src="../slider/slider1.gif"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h1 align="center">Happy Birthday</h1>
                  <h3>
                    T<span>O</span>S<span>H</span>I<span>B</span>A{" "}
                    <span>Z</span>U<span>F</span>I<span>Q</span>A<span>R</span>
                  </h3>
                  <p>Many many happy returns of the day My Best Friend❤️</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={8000}>
                <img
                  className="d-block w-100"
                  src="../slider/slider2.gif"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h1>Happy Birthday</h1>
                  <h3>
                    S<span>H</span>I<span>B</span>A <span>P</span>R
                    <span>I</span>N<span>C</span>E<span>S</span>S
                  </h3>
                  <p>
                    I feel so lucky to have you as my friend. Hope your birthday
                    is as special as you are. May all of your dreams come true.
                    Thanks for being such a great friend.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../slider/slider3.gif"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h1>Happy Birthday</h1>
                  <h3>
                    💙J<span>A</span>N<span>E</span>❤️ D<span>E</span>L
                    <span>-</span>A<span>M</span>
                  </h3>
                  <p>
                    Happy birthday is just a wish,But, I will pray that you get
                    everything my bestie,Because you deserve the best in
                    life,And, I pray you don't have to strive,So, stay
                    blessed,Wish you a very happy birthday!
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="text-center">
            <div className="shobimian">
              <span>
                <FaAngleDoubleLeft style={{ color: "black" }} />
              </span>
              <span>
                <Link to="/">
                  <FaHome style={{ color: "#dddddd" }} />
                </Link>
              </span>
              <span className="nextBtn">
                <Link to="/wishes">
                  <FaAngleDoubleRight style={{ color: "#2ed573" }} />
                </Link>
              </span>
            </div>
          </div>
        </Container>
    </div>
  );
};

export default Home;
