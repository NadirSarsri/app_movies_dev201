import React, { Component } from "react";
class Genres extends Component {
  render() {
    const { genres, selectedGenre, onSelectGenre } = this.props;
    return (
      <ul className="list-group">
        {genres.map((genre) => (
          <li
            onClick={() => onSelectGenre(genre)}
            key={genre.id}
            className={
              selectedGenre.id === genre.id
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {genre.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default Genres;
