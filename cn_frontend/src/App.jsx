import React, { useEffect } from "react";
import Home from "./Components/Home";
import { useAuth0 } from "@auth0/auth0-react";
import VideoPlayer from "./Components/VideoPlayer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  const { loginWithRedirect } = useAuth0();
  // useEffect(() => {
  //   loginWithRedirect();
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/video/:videoName" element={<VideoPlayer />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
