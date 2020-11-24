import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MoviesContainer from "./Components/MoviesContainer";
import Navbar from "./Component/NavBar";
import Jumbotron from "./Component/Jumbotron";
import Footer from "./Component/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Jumbotron />
        <MoviesContainer />
        <Footer />
      </>
    );
  }
}

export default App;
