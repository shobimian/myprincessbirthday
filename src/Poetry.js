import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./index.css";
import { Container, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaHome, FaHeartbeat, FaHeart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Data from "../Data.json"; // ✅ JSON from src folder

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
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

              {/* ✅ logo1 Modal */}
              <span className="logo">
                <img  
                  className="logo1"  
                  src="../images/logo1.jpeg"  
                  alt="logo1"  
                  onClick={() => toggleModal("logo1")}  
                />
                <Modal show={modals.logo1} backdrop="static" onHide={() => toggleModal("logo1")}>
                  <Modal.Header closeButton>
                    <Modal.Title>Love❤️ Your Eyes👁️</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center">
                    <img
                      src="../images/logo1.jpeg"
                      alt="logo1"
                      loading="lazy"
                      style={{
                        width: "90%",
                        boxShadow: "1px 2px 20px black",
                        borderRadius: "20px",
                        border: "5px solid #ee5253",
                      }}
                    />
                    <p className="Eyes">
                      میں نے سمجھا تھا کہ تُو ہے تو درخشاں ہے حیات<br/> تیرا غم ہے تو غمِ دہر کا جھگڑا کِیا ہے<br/> 
                      تیری صورت سے ہے عالم میں بہاروں کو ثبات<br/> تیری آنکھوں کے سوا دنیا میں رکھا کیا ہے
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={() => toggleModal("logo1")}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </span>

              {/* ✅ logo2 Modal */}
              <span className="logo">
                <img  
                  className="logo2"  
                  src="../images/logo2.jpeg"  
                  alt="logo2"  
                  onClick={() => toggleModal("logo2")}  
                />
                <Modal show={modals.logo2} backdrop="static" onHide={() => toggleModal("logo2")}>
                  <Modal.Header closeButton>
                    <Modal.Title>Your Hand❤️💗💝</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center">
                    <img
                      src="../images/logo2.jpeg"
                      alt="logo2"
                      loading="lazy"
                      style={{
                        width: "90%",
                        boxShadow: "1px 2px 20px black",
                        borderRadius: "20px",
                        border: "5px solid #ee5253",
                      }}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={() => toggleModal("logo2")}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </span>
            </ul>
          </div>
        </div>
      </div>

      <div className="card-div-scroller">
        {Data.length > 0 ? (
          Data.map((item) => (
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
