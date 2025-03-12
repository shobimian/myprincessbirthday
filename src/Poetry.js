import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./index.css";
import { Container, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Data from "./Data.json"; // ✅ JSON path maintained
import {
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
  FaHome,
  FaHeartbeat,
  FaHeart,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

const Poetry = () => {
  // Modal State Handlers
  const [logo1, setLogo1] = useState(false);
  const [logo2, setLogo2] = useState(false);
  const [heart, setHeart] = useState(false);
  const [cake, setCake] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ✅ Prevents infinite re-render
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
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
                <i onClick={() => setCake(true)}>🎂</i>
                <Modal show={cake} backdrop="static" onHide={() => setCake(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Best Wishes For You 🍰🧁</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center">
                    <img
                      src="../images/modalimg.gif"
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
                    <Button variant="danger" onClick={() => setCake(false)}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </span>

              <span>
                <FaHeartbeat className="mian" onClick={() => setHeart(true)} />
                <Modal show={heart} backdrop="static" onHide={() => setHeart(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Heart For You ❤️💗💙</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center">
                    <h1>Toshiba</h1>
                    <FaHeart className="bgHeart" size={50} />
                    <h1>Zulfiqar</h1>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={() => setHeart(false)}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </span>

              <span>
                <img
                  className="logo1"
                  src="../images/logo1.jpeg"
                  alt="logo1"
                  onClick={() => setLogo1(true)}
                />
                <Modal show={logo1} backdrop="static" onHide={() => setLogo1(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Love ❤️ Your Eyes 👁️</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center">
                    <img
                      src="../images/logo1.jpeg"
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
                      تیرا غم ہے تو غمِ دہر کا جھگڑا کِیا ہے<br />
                      تیری صورت سے ہے عالم میں بہاروں کو ثبات<br />
                      تیری آنکھوں کے سوا دنیا میں رکھا کیا ہے
                    </p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={() => setLogo1(false)}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </span>

              <span>
                <img
                  className="logo2"
                  src="../images/logo2.jpeg"
                  alt="logo2"
                  onClick={() => setLogo2(true)}
                />
                <Modal show={logo2} backdrop="static" onHide={() => setLogo2(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Your Hand ❤️💗💝</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center">
                    <img
                      src="../images/logo2.jpeg"
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
                    <Button variant="danger" onClick={() => setLogo2(false)}>
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
        {Data.length > 0 ? (
          Data.map((item) => (
            <Card
              key={item.id}
              className="bg-white text-white mt-4"
              style={{ border: "2px solid white", borderRadius: "7px", width: "85%", margin: "auto", marginBottom: "20px" }}
            >
              <Card.Img
                src={item.image}
                alt="Card image"
                loading="lazy"
                style={{ width: "100%", height: "450px", borderRadius: "7px" }}
              />
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
  );
};

export default Poetry;
