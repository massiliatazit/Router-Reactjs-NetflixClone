import React from "react";
import { Container, Row, Card, button } from "react-bootstrap";
import MovieRow from "./MovieRow";
import CommentIcon from "@material-ui/icons/Comment";

class TvShows extends React.Component {
  state = {
    seriesdata: [],
  };
  componentDidMount = async () => {
    let response = await fetch(
      `http://www.omdbapi.com/?apikey=925b91e7&s=the%20walking%20dead&type=series`
    );
    let parsedResponse = await response.json();
    this.setState({ seriesdata: parsedResponse });
    console.log("here", this.state.seriesdata);
  };
  render() {
    return (
      <div>
        <Container className="px-5 mt-5">
          <Row>
            <h1>TV Shows</h1>
          </Row>

          <Container fluid className="my-5">
            {this.state.seriesdata.Search &&
              this.state.seriesdata.Search.map((e) => {
                return (
                  <div className="show-wrapper mr-2 ">
                    <img
                      className="show-img img-shif"
                      src={e.Poster}
                      alt="movie-poster"
                    />
                    <div className=" show-content d-flex justify-content-center align-items-start flex-column px-4 py-2">
                      <h5 className="mb-2">{e.Title}</h5>
                      {/* <p className="mb-2">{description}</p> */}
                      <button>
                        <i className="fas fa-play pl-1 pr-2 py-2"></i>PLAY
                      </button>
                      {/* <CommentIcon
                        className="commentIcon"
                        onClick={() =>
                          this.props.history.push(
                            "/details/" + this.props.match.params.id
                          )
                        }
                      /> */}
                    </div>
                  </div>
                );
              })}
          </Container>
        </Container>
      </div>
    );
  }
}

export default TvShows;
