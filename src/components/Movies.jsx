import React, { Component } from "react";
import Movie from "./movie";

class Movies extends Component {
  render() {
    const { movies, selectedList } = this.props;
    return (
      <>
        <h2>{selectedList.toUpperCase()}</h2>
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
