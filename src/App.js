import Home from "./Home";
import Poetry from "./Poetry";
import Wishes from "./Wishes";
import Loading from "./Loading";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });
  return (
    <>
      {isLoading == true ? (
        <Loading/>
      ) : (
        
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/poetry" element={<Poetry />}></Route>
            <Route path="/wishes" element={<Wishes />}></Route>
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
