import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./index.css";
import { Container, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaHome, FaHeartbeat, FaHeart } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";

const Poetry = () => {
  const [poetryData, setPoetryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // **Modals for Images & Icons**
  const [modalState, setModalState] = useState({
    logo1: false,
    logo2: false,
    heart: false,
    cake: false,
  });

  const handleShow = (modalName) => setModalState({ ...modalState, [modalName]: true });
  const handleClose = (modalName) => setModalState({ ...modalState, [modalName]: false });

  // **Fetch JSON Data from Public Folder**
  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((jsonData) => {
        setPoetryData(jsonData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container>
          <div className="main-section text-center">
            <div className="top-nav mt-2">
              <h2 className="text-center">Shiba</h2>
              <div className="right-nav">
                <span className="mian" style={{ marginRight: "10px" }}>
                  <i onClick={() => handleShow("cake")}>🎂</i>
                  <Modal show={modalState.cake} backdrop="static" onHide={() => handleClose("cake")}>
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
                        alt="Birthday"
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="danger" onClick={() => handleClose("cake")}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </span>
                <span>
                  <FaHeartbeat className="mian" onClick={() => handleShow("heart")} />
                  <Modal show={modalState.heart} backdrop="static" onHide={() => handleClose("heart")}>
                    <Modal.Header closeButton>
                      <Modal.Title>Heart For You❤️💗💙</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="text-center">
                      <h1>Toshiba</h1>
                      <FaHeart className="bgHeart" />
                      <h1>Zulfiqar</h1>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="danger" onClick={() => handleClose("heart")}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </span>
                <span className="logo">
                  <img
                    className="logo1"
                    src="/images/logo1.jpeg"
                    alt="logo1"
                    onClick={() => handleShow("logo1")}
                  />
                  <Modal show={modalState.logo1} backdrop="static" onHide={() => handleClose("logo1")}>
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
                      <p>
                        میں نے سمجھا تھا کہ تُو ہے تو درخشاں ہے حیات<br />
                        تیرا غم ہے تو غمِ دہر کا جھگڑا کِیا ہے
                      </p>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="danger" onClick={() => handleClose("logo1")}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </span>
              </div>
            </div>
          </div>

          <div className="card-div-scroller">
            {poetryData.map((item) => (
              <Card
                className="bg-white text-white mt-4"
                style={{
                  border: "2px solid white",
                  borderRadius: "7px",
                  width: "85%",
                  margin: "auto",
                  marginBottom: "20px",
                }}
                key={item.id}
              >
                <Card.Img
                  loading="lazy"
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
        </Container>
      )}
    </>
  );
};

export default Poetry;
