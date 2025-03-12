import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./index.css";
import { Container, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaHome, FaHeartbeat, FaHeart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

const Poetry = () => {
  const [modals, setModals] = useState({
    logo1: false,
    logo2: false,
    heart: false,
    cake: false,
  });

  const toggleModal = (modalName) => {
    setModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  };

  const [poetryData, setPoetryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);

    // Fetch JSON Data
    fetch("/Data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load JSON");
        }
        return response.json();
      })
      .then((data) => {
        setPoetryData(data);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <div className="main-section">
        <div className="text-center">
          <div className="top-nav mt-2">
            <h2 className="text-center">Shiba</h2>
            <ul className="right-nav">
              <span style={{ marginRight: "10px" }}>
                <i onClick={() => toggleModal("cake")}>🎂</i>
                <Modal show={modals.cake} backdrop="static" onHide={() => toggleModal("cake")}>
                  <Modal.Header closeButton>
                    <Modal.Title>Best Wishes For You 🍰🧁</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center">
                    <img
                      src="../images/modalimg.gif"
                      alt="Cake"
                      loading="lazy"
                      style={{
                        width: "90%",
                        boxShadow: "1px 2px 20px black",
                        borderRadius: "20px",
                        border: "2px solid cyan",
                      }}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={() => toggleModal("cake")}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </span>

              <span>
                <FaHeartbeat className="mian" onClick={() => toggleModal("heart")} />
                <Modal show={modals.heart} backdrop="static" onHide={() => toggleModal("heart")}>
                  <Modal.Header closeButton>
                    <Modal.Title>Heart For You ❤️💗💙</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center">
                    <h1>Toshiba</h1>
                    <FaHeart className="bgHeart" size={50} />
                    <h1>Zulfiqar</h1>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={() => toggleModal("heart")}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </span>
            </ul>
          </div>
        </div>
      </div>

      <div className="card-div-scroller">
        {poetryData.length > 0 ? (
          poetryData.map((item) => (
            <Card key={item.id} className="bg-white text-white mt-4"
              style={{
                border: "2px solid white",
                borderRadius: "7px",
                width: "85%",
                margin: "auto",
                marginBottom: "20px",
              }}>
              <Card.Img src={item.image} alt="Card image" loading="lazy"
                style={{ width: "100%", height: "450px", borderRadius: "7px" }} />
              <Card.ImgOverlay>
                <Card.Text className="card-p">{item.poetry}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          ))
        ) : (
          <p>No Data Available</p>
        )}
      </div>

      <div className="shobimian">
        <span><Link to="/wishes"><FaAngleDoubleLeft style={{ color: "#2ed573" }} /></Link></span>
        <span><Link to="/"><FaHome style={{ color: "#dddddd" }} /></Link></span>
        <span className="nextBtn"><Link to="/poetry"><FaAngleDoubleRight style={{ color: "black" }} /></Link></span>
      </div>
    </Container>
  );
};

export default Poetry;
