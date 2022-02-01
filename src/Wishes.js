import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import {
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
  FaHome,
  FaHeart,
} from "react-icons/fa";
import "./index.css";

const Wishes = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });
  return (
    <>
      {isLoading == true ? (
        <Loading />
      ) : (
        <Container>
          <div className="text-center mt-4 princess">
            <h1>Shiba❤️Princess👸</h1>
            <img
              src="../slider/slider6.gif"
              alt="cake-img"
              style={{ width: "200px", height: "200px" }}
            ></img>
            <p className="wishes-p">
              HAPPY BIRTHDAY JI♥️♥️♥️♥️♥️🎉🎉🎁🎁🎊🎊🎂🎂🎂🎂😍😍😍😍 Always
              have a happy healthy life💜Allah ap ko hamesha hamesha khush
              rakhy❤ap ke har khawahish puri kery 💕 qismat bahut bahut bahut
              Achi kery ❤️hamesha hansty muskraty raho😍ameen♥️once again happy
              birthday 💗
            </p>
            <p className="p-heart">
              <span>
                <FaHeart className="beat" />
              </span>
              <span>
                <FaHeart className="beat" />
              </span>
              <span>
                <FaHeart className="beat" />
              </span>
              <span>
                <FaHeart className="beat" />
              </span>
            </p>
            <p className="p-heart">
              <span>
                <FaHeart className="beat" />
              </span>
              <span>
                <FaHeart className="beat" />
              </span>
              <span>
                <FaHeart className="beat" />
              </span>
              <span>
                <FaHeart className="beat" />
              </span>
            </p>
          </div>
          <div className="shobimian">
            <span>
              <Link to="/">
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
                <FaAngleDoubleRight style={{ color: "#2ed573" }} />
              </Link>
            </span>
          </div>
        </Container>
      )}
    </>
  );
};

export default Wishes;
