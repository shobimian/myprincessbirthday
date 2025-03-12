import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "./index.css";
import { Container, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { FaAngleDoubleRight, FaAngleDoubleLeft, FaHome, FaHeartbeat, FaHeart } from "react-icons/fa";

const Poetry = () => {
  const [logo1, setLogo1] = useState(false);
  const [logo2, setLogo2] = useState(false);
  const [heart, setHeart] = useState(false);
  const [cake, setCake] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  // Stop infinite re-renders
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Fetch JSON data dynamically
  useEffect(() => {
    fetch("./Data.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <div className="main-section text-center">
        <div className="top-nav mt-2">
          <ul className="Left-Nav">
            <h2>Shiba</h2>
          </ul>
          <ul className="right-nav">
            {/* Cake Modal */}
            <span className="mian" style={{ marginRight: "10px" }}>
              <i onClick={() => setCake(true)}>🎂</i>
              {cake && (
                <Modal show={cake} backdrop="static" onHide={() => setCake(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Best Wishes For You 🍰🧁</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center">
                    <img
                      src="../images/modalimg.gif"
                      alt="Cake"
                      loading="lazy"
                      style={{ width: "90%", borderRadius: "20px", border: "2px solid cyan" }}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={() => setCake(false)}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
            </span>

            {/* Heart Modal */}
            <span>
              <FaHeartbeat className="mian" onClick={() => setHeart(true)} />
              {heart && (
                <Modal show={heart} backdrop="static" onHide={() => setHeart(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Heart For You ❤️💗💙</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center heartmodal">
                    <h1>Toshiba</h1>
                    <FaHeart className="bgHeart" />
                    <h1>Zulfiqar</h1>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={() => setHeart(false)}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
            </span>

            {/* Logo 1 Modal */}
            <span className="logo">
              <img className="logo1" src="../images/logo1.jpeg" alt="logo1" onClick={() => setLogo1(true)} loading="lazy" />
              {logo1 && (
                <Modal show={logo1} backdrop="static" onHide={() => setLogo1(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Love ❤️ Your Eyes 👁️</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center">
                    <img
                      src="../images/logo1.jpeg"
                      alt="logo1"
                      loading="lazy"
                      style={{ width: "90%", borderRadius: "20px", border: "5px solid #ee5253" }}
                    />
                    <p className="Eyes">
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
              )}
            </span>

            {/* Logo 2 Modal */}
            <span className="logo">
              <img className="logo2" src="../images/logo2.jpeg" alt="logo2" onClick={() => setLogo2(true)} loading="lazy" />
              {logo2 && (
                <Modal show={logo2} backdrop="static" onHide={() => setLogo2(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Your Hand ❤️💗💝</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="text-center">
                    <img
                      src="../images/logo2.jpeg"
                      alt="logo2"
                      loading="lazy"
                      style={{ width: "90%", borderRadius: "20px", border: "5px solid #ee5253" }}
                    />
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={() => setLogo2(false)}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              )}
            </span>
          </ul>
        </div>
      </div>

      {/* Poetry Cards */}
      <div className="card-div-scroller">
        {data.map((item) => (
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
        ))}
      </div>

      {/* Navigation Buttons */}
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
