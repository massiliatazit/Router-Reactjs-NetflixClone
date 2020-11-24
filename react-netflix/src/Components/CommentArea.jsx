import React from "react";
import { ListGroup, Col, Container, Row } from "react-bootstrap";
import AddComment from "./AddComment";
class CommentArea extends React.Component {
  state = {
    comments: [],
    movieID: this.props.movieID,
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  fetchComments = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.MovieID}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2OGEwNjk4MzViMDAwMTc1ODRmMzMiLCJpYXQiOjE2MDU3OTg0MDcsImV4cCI6MTYwNzAwODAwN30.YMFEHuLKmsTiRw_58rtTkNg5n_1jZGZdmOubN1Oo9O0",
          },
        }
      );
      let comments = await response.json();
      this.setState({ comments });
      console.log(this.state.comments);
    } catch (er) {
      console.log(er);
    }
  };
  render() {
    console.log(this.state.movieID);
    return (
      <div>
        <Container id="commentArea">
          <Row>
            <Col xs={6} className="offset-3">
              <img
                src={this.props.image}
                className="img-fluid w-80 mx-auto"
                alt=""
              ></img>
            </Col>
          </Row>
          <Row>
            <AddComment
              fetchComments={this.fetchComments}
              MovieID={this.props.MovieID}
            />
          </Row>
        </Container>
        <ListGroup.Item>
          {this.state.comments.map((comment, index) => (
            <p key={index}>
              {comment.comment} (
              {Array.from({ length: comment.rate }).map((star) => (
                <span>&#9734;</span>
              ))}
              )
            </p>
          ))}
        </ListGroup.Item>
      </div>
    );
  }
}

export default CommentArea;
