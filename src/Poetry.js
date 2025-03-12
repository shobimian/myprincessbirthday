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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // ✅ Corrected JSON Fetching
  useEffect(() => {
    fetch("/Data.json") // Ensure JSON is inside `public/`
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((jsonData) => {
        console.log("Fetched Data:", jsonData); // Debugging
        setData(jsonData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <div className="card-div-scroller">
        {data.length > 0 ? (
          data.map((item) => (
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
          <p>No Data Available</p> // ✅ Handle empty state
        )}
      </div>
    </Container>
  );
};

export default Poetry;
