import React, { Component } from "react";
import Movie from "./movie";

class Movies extends Component {
  render() {
    const { movies, title } = this.props;
    return (
      <>
        <h2>{title.toUpperCase().replace("_", " ")}</h2>
        <div className="row g-3">
          {movies.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </>
    );
  }
}

export default Movies;
