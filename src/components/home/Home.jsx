import React, { useEffect } from "react";
import { useAuth } from "../../firebase";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

const Home = () => {
  const currentUser = useAuth();
  useEffect(() => {
    if (currentUser && currentUser.photoURL) {
      console.log(currentUser.photoURL);
      console.log(currentUser);
    }
  }, [currentUser]);

  return (
    <div>
      <Navbar />
      <Header />
      <Footer />
    </div>
  );
};

export default Home;
