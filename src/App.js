import React, { useState, useEffect } from "react";
import Preloader from "../src/components/pre";
import Navbar from "./components/navbar";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import Footer from "./components/footer";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxCroxz2jYoKqNsq3Qm49am6rRZYwGPLc",
  authDomain: "myportfolio-ca834.firebaseapp.com",
  projectId: "myportfolio-ca834",
  storageBucket: "myportfolio-ca834.appspot.com",
  messagingSenderId: "979174821396",
  appId: "1:979174821396:web:3f9340fbbe0979cdede101"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
