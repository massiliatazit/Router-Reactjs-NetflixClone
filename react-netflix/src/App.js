import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MoviesContainer from "./Components/MoviesContainer";
import Navbar from "./Component/NavBar";
import Jumbotron from "./Component/Jumbotron";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ShowCommentDetails from "./Components/ShowCommentDetails";
import TvShow from "./Components/TvShow";
import RegistrationForm from "./Components/RegistrationForm";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Jumbotron />
          <Route
            path="/"
            exact
            component={MoviesContainer}
          />
          <Route path="/details/:id" component={ShowCommentDetails} />
          <Route
            path="/registration"
            exact
            render={(props) => <RegistrationForm {...props} />}
          />
          <Route path="/tvshows" exact component={TvShow}/>
         

          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
