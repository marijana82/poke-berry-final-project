import './App.css';
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
//import { LoginContext } from "./context/LoginContext";
import Landing from "./pages/landing-page/Landing";

function App() {
  return (
    <>
      HELLO POKE BERRIES!
        NEXT STEP IS TO finish working on the landing page, tomorrow! BYE!
        <Routes>
            <Route path={"/landing-page"} element={<Landing/>}/>
        </Routes>
    </>
  );
}

export default App;
