import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./index.css";
import { Container, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaHome, FaHeartbeat, FaHeart } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css"; 

const Poetry = () => {
  const [logo1, setLogo1] = useState(false);
  const logo1Close = () => setLogo1(false);
  const logo1Show = () => setLogo1(true);

  const [logo2, setLogo2] = useState(false);
  const logo2Close = () => setLogo2(false);
  const logo2Show = () => setLogo2(true);

  const [heart, setHeart] = useState(false);
  const heartClose = () => setHeart(false);
  const heartShow = () => setHeart(true);

  const [cake, setCake] = useState(false);
  const cakeClose = () => setCake(false);
  const cakeShow = () => setCake(true);

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // Fetch JSON Data from Public Folder
  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error loading JSON:", error));

    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <div className="main-section">
            <div className="text-center">
              <div className="top-nav mt-2">
                <ul className="Left-Nav">
                  <h2 className="text-center">Shiba</h2>
                </ul>
                <ul className="right-nav">
                  <span className="mian" style={{ marginRight: "10px" }}>
                    <i onClick={cakeShow}>🎂</i>
                    <Modal show={cake} backdrop="static" onHide={cakeClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Best Wishes For You 🍰🧁</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="text-center">
                          <img
                            src="/images/modalimg.gif"
                            style={{
                              width: "90%",
                              boxShadow: "1px 2px 20px black",
                              borderRadius: "20px",
                              border: "2px solid cyan",
                            }}
                            alt="Birthday Cake"
                          />
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={cakeClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </span>

                  <span>
                    <FaHeartbeat className="mian" onClick={heartShow} />
                    <Modal show={heart} backdrop="static" onHide={heartClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Heart For You ❤️💗💙</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="killer">
                        <div className="text-center heartmodal">
                          <h1>Toshiba</h1>
                          <FaHeart className="bgHeart" />
                          <h1>Zulfiqar</h1>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={heartClose}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </span>

                  <span className="logo">
                    <img className="logo1" src="/images/logo1.jpeg" alt="logo1" onClick={logo1Show} />
                    <Modal show={logo1} backdrop="static" onHide={logo1Close}>
                      <Modal.Header closeButton>
                        <Modal.Title>Love❤️Your Eyes👁️</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="text-center">
                          <img
                            src="/images/logo1.jpeg"
                            alt="logo1"
                            style={{
                              width: "90%",
                              boxShadow: "1px 2px 20px black",
                              borderRadius: "20px",
                              border: "5px solid #ee5253",
                            }}
                          />
                        </div>
                        <p className="Eyes">
                          میں نے سمجھا تھا کہ تُو ہے تو درخشاں ہے حیات<br /> تیرا غم
                          ہے تو غمِ دہر کا جھگڑا کِیا ہے<br /> تیری صورت سے ہے عالم
                          میں بہاروں کو ثبات<br /> تیری آنکھوں کے سوا دنیا میں رکھا
                          کیا ہے
                        </p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={logo1Close}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </span>

                  <span className="logo">
                    <img className="logo2" src="/images/logo2.jpeg" alt="logo2" onClick={logo2Show} />
                    <Modal show={logo2} backdrop="static" onHide={logo2Close}>
                      <Modal.Header closeButton>
                        <Modal.Title>Your Hand❤️💗💝</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="text-center">
                          <img
                            src="/images/logo2.jpeg"
                            alt="logo2"
                            style={{
                              width: "90%",
                              boxShadow: "1px 2px 20px black",
                              borderRadius: "20px",
                              border: "5px solid #ee5253",
                            }}
                          />
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="danger" onClick={logo2Close}>
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </span>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-div-scroller">
            {data.map((items) => (
              <Card
                className="bg-white text-white mt-4"
                style={{
                  border: "2px solid white",
                  borderRadius: "7px",
                  width: "85%",
                  margin: "auto",
                  marginBottom: "20px",
                }}
                key={items.id}
              >
                <Card.Img
                  src={items.image}
                  style={{
                    width: "100%",
                    height: "450px",
                    borderRadius: "7px",
                  }}
                  alt="Card image"
                />
                <Card.ImgOverlay>
                  <Card.Text className="card-p">{items.poetry}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            ))}
          </div>

          <div className="shobimian">
            <span>
              <Link to="/wishes">
                <FaAngleDoubleLeft style={{ color: "#2ed573" }} />
              </Link>
            </span>
            <span>
              <Link to="/">
                <FaHome style={{ color: "#dddddd" }} />
              </Link>
            </span>
            <span className="nextBtn">
              <Link to="/poetry">
                <FaAngleDoubleRight style={{ color: "black" }} />
              </Link>
            </span>
          </div>
        </Container>
      )}
    </>
  );
};

export default Poetry;
