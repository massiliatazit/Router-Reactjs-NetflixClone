import React, { Component } from "react";
import CommentArea from "./CommentArea";
import { Row, Col, Card, Container } from "react-bootstrap";
import MovieCreationIcon from "@material-ui/icons/MovieCreation";

export class ShowCommentDetails extends Component {
  state = {
    movie: {},
  };
  componentDidMount = async () => {
    let movieOnSearch = this.props.match.params.id;
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=925b91e7&i=${movieOnSearch}`
      );
      let Moviedata = await response.json();
      console.log(Moviedata);
      this.setState({ movie: Moviedata });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    console.log("showComments", this.props);

    return (
      <>
        <Container className="my-5 justify-items-center d-flex flex-row ">
          <Row>
            <Col sm={5} className="cover">
              <img src={this.state.movie.Poster} alt="movie cover" />
            </Col>
            <Col md={7}>
              <div className="Movietile  mx-5 my-5 ">
                <p>{this.state.movie.Title}</p>
                <p className="text-muted"> {this.state.movie.Genre}</p>
                <span className="text-muted mr-3">
                  {" "}
                  {this.state.movie.Year}
                </span>
                <MovieCreationIcon />{" "}
                <span className="text-muted">
                  {" "}
                  {this.state.movie.Production}
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ShowCommentDetails;
