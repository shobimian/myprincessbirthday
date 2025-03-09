import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./index.css";
import { Container, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Data from "./Data.json";
import {
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
  FaHome,
  FaHeartbeat,
  FaHeart,
} from "react-icons/fa";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

const Poetry = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer); // Cleanup timeout
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
                </ul>
              </div>
            </div>
          </div>

          <div className="card-div-scroller">
            {Data.map((item) => (
              <Card
                key={item.id}
                className="bg-white text-white mt-4"
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
                  style={{
                    width: "100%",
                    height: "450px",
                    borderRadius: "7px",
                  }}
                  alt="Card"
                />
                <Card.ImgOverlay>
                  <Card.Text className="card-p">{item.poetry}</Card.Text>
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

          {/* Modals */}
          <Modal show={activeModal === "cake"} onHide={() => setActiveModal(null)} backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>Best Wishes For You 🍰🧁</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img
                src="/images/modalimg.gif"
                style={{
                  width: "90%",
                  boxShadow: "1px 2px 20px black",
                  borderRadius: "20px",
                  border: "2px solid cyan",
                }}
                alt="Cake"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setActiveModal(null)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={activeModal === "heart"} onHide={() => setActiveModal(null)} backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>Heart For You❤️💗💙</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <h1>Toshiba</h1>
              <FaHeart className="bgHeart" />
              <h1>Zulfiqar</h1>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={() => setActiveModal(null)}>
                Close
              </Button>
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
              <Button variant="danger" onClick={() => setActiveModal(null)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={activeModal === "logo2"} onHide={() => setActiveModal(null)} backdrop="static">
            <Modal.Header closeButton>
              <Modal.Title>Your Hand❤️💗💝</Modal.Title>
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
              <Button variant="danger" onClick={() => setActiveModal(null)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </>
  );
};

export default Poetry;
