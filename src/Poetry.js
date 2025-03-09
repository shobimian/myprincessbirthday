import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./index.css";
import { Container, Button, Modal, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Data from "./Data.json";
import {
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
  FaHome,
  FaHeartbeat,
  FaHeart,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Poetry = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer); // Cleanup function
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          {/* Navigation Section */}
          <div className="main-section text-center">
            <div className="top-nav mt-2">
              <h2 className="text-center">Shiba</h2>
              <div className="right-nav">
                <span className="mian" style={{ marginRight: "10px" }}>
                  <i onClick={() => setActiveModal("cake")}>🎂</i>
                </span>
                <span>
                  <FaHeartbeat className="mian" onClick={() => setActiveModal("heart")} />
                </span>
                <span className="logo">
                  <img
                    className="logo1"
                    src="/images/logo1.jpeg"
                    alt="logo1"
                    onClick={() => setActiveModal("logo1")}
                  />
                </span>
                <span className="logo">
                  <img
                    className="logo2"
                    src="/images/logo2.jpeg"
                    alt="logo2"
                    onClick={() => setActiveModal("logo2")}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Poetry Cards */}
          <div className="card-div-scroller">
            {Data.map((item, index) => (
              <Card
                key={index}
                className="bg-white text-dark mt-4"
                style={{
                  border: "2px solid white",
                  borderRadius: "7px",
                  width: "85%",
                  margin: "auto",
                  marginBottom: "20px",
                }}
              >
                <Card.Img
                  src={item.image}
                  alt="Poetry"
                  style={{
                    width: "100%",
                    height: "450px",
                    borderRadius: "7px",
                  }}
                />
                <Card.ImgOverlay>
                  <Card.Text className="card-p">{item.poetry}</Card.Text>
                </Card.ImgOverlay>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="shobimian">
            <Link to="/wishes">
              <FaAngleDoubleLeft style={{ color: "#2ed573" }} />
            </Link>
            <Link to="/">
              <FaHome style={{ color: "#dddddd" }} />
            </Link>
            <Link to="/poetry">
              <FaAngleDoubleRight style={{ color: "black" }} />
            </Link>
          </div>

          {/* Modals Section */}
          <Modal show={activeModal === "cake"} onHide={() => setActiveModal(null)} backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>Best Wishes For You 🍰🧁</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img
                src="/images/modalimg.gif"
                alt="Cake"
                style={{
                  width: "90%",
                  boxShadow: "1px 2px 20px black",
                  borderRadius: "20px",
                  border: "2px solid cyan",
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setActiveModal(null)}>Close</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={activeModal === "heart"} onHide={() => setActiveModal(null)} backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>Heart For You ❤️💗💙</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <h1>Toshiba</h1>
              <FaHeart className="bgHeart" />
              <h1>Zulfiqar</h1>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setActiveModal(null)}>Close</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={activeModal === "logo1"} onHide={() => setActiveModal(null)} backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>Love❤️Your Eyes👁️</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
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
              <p className="Eyes">
                میں نے سمجھا تھا کہ تُو ہے تو درخشاں ہے حیات<br /> تیرا غم ہے تو غمِ دہر کا جھگڑا کِیا ہے<br />
                تیری صورت سے ہے عالم میں بہاروں کو ثبات<br /> تیری آنکھوں کے سوا دنیا میں رکھا کیا ہے
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setActiveModal(null)}>Close</Button>
            </Modal.Footer>
          </Modal>

          <Modal show={activeModal === "logo2"} onHide={() => setActiveModal(null)} backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>Your Hand ❤️💗💝</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
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
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setActiveModal(null)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </>
  );
};

export default Poetry;
