import React, { Component } from "react";
class Movie extends Component {
  render() {
    const { title, poster_path, overview, release_date, original_title } =
      this.props.movie;
    return (
      <div className="col-md-6 col-lg-4 col-xl-3">
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title || original_title}
            className="card-img-top"
          />
          <div className="card-body">
            <h5 className="card-title">{original_title || title}</h5>
            <h6 className="card-subtitle text-muted">{release_date}</h6>
            <p className="card-text">
              {overview.split(" ").slice(0, 15).join(" ")} ...
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
