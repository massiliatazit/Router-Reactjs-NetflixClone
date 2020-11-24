import React from "react";

import MovieCard from "./MovieCard";

class MovieRow extends React.Component {
  state = {
    title: this.props.title,
    movieData: this.props.movieData,
    isTall: this.props.isTall,
  };

  render() {
    const { title, movieData, isTall } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <div className="mb-4 shows-row rounded">
          {movieData.map((e, index) => (
            <MovieCard
              key={index}
              movieId={e.imdbID}
              title={e.Title}
              description={e.Plot}
              image={e.Poster}
              category={title}
              isTall={isTall}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default MovieRow;
