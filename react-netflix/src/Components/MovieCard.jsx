import React from "react";
import { Button, Modal } from "react-bootstrap";
import CommentArea from "./CommentArea";
import CommentIcon from "@material-ui/icons/Comment";

class MovieCard extends React.Component {
  state = {
    movieId: this.props.movieId,
    category: this.props.category,
    title: this.props.title,
    description: this.props.description,
    poster: this.props.image,
    isOpen: false,
    isTall: this.props.isTall,
    selectedMovie: {},
  };
  closeModal = () => this.setState({ isOpen: false });

  openModal = (title) => {
    this.setState({ selectedMovie: title, isOpen: true });
  };

  render() {
    const { title, description, image, category, isTall, movieId } = this.props;
    // console.log(movieId);

    return (
      <>
        <div
          className={
            isTall ? "show-wrapper show-wrapper-lg mr-2 " : "show-wrapper mr-2"
          }
        >
          <img
            className={isTall ? "show-img" : "show-img img-shift"}
            src={image}
            alt="movie-poster"
          />
          <div
            className={
              isTall
                ? `show-content-lg ${
                    this.state.isOpen ? "" : "translateY-lg"
                  } d-flex justify-content-center align-items-start flex-column px-4 py-2`
                : `show-content d-flex ${
                    this.state.isOpen ? "" : "translateY"
                  } justify-content-center align-items-start flex-column px-4 py-2`
            }
          >
            <h5 className="mb-2">{title}</h5>
            <p className="mb-2">{description}</p>
            <button onClick={() => this.openModal(title)}>
              <i className="fas fa-play pl-1 pr-2 py-2"></i>PLAY
            </button>
            <CommentIcon
              className="commentIcon"
              onClick={() => this.props.history.push("/details/" + movieId)}
            />
          </div>
        </div>

        <Modal show={this.state.isOpen}>
          <Modal.Header closeButton>
            <Modal.Title>Reviews</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CommentArea MovieID={this.state.elementId} image={image} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default MovieCard;
