import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MoviesContainer from "./Components/MoviesContainer";
import Navbar from "./Component/NavBar";
import Jumbotron from "./Component/Jumbotron";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ShowCommentDetails from "./Components/ShowCommentDetails"
import TvShow from"./Components/TvShow"

class App extends React.Component {
  render() {
    return (
      <>
      <Router>
        <Navbar />
        <Jumbotron />
        <Route path="/"
        exact

       render={(props)=><MoviesContainer {...props} />} 
       />
       <Route path="/details/:id" component={ShowCommentDetails} />
       <Route
            path="/tvshows"
            exact
            render={(props) => (
              <TvShow searchQuery={this.state.query} {...props} />
            )}
          />
        <Footer />
        </Router>
      </>
    );
  }
}

export default App;
