import React, { Component } from "react";
import api_key from "./utils/api_key";

import Navbar from "./components/navbar";
import Genres from "./components/genres";
import Movies from "./components/Movies";

class App extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: {
      id: "",
      name: "Popular",
    },
    lists: ["trending", "popular", "upcoming", "top_rated", "now_playing"],
    selectedList: "trending",
  };

  fetchMovies = async (url, genreId) => {
    let data = [];
    if (genreId) {
      const response = await fetch(url + "&with_genres=" + genreId);
      data = await response.json();
      console.log("ok");
    } else {
      const response = await fetch(url);
      data = await response.json();
    }
    this.setState({ movies: data.results });
  };

  fetchGenres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`
    );
    const data = await response.json();

    this.setState({ genres: data.genres });
  };

  handleSelectGenre = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  handleSelectList = (listName) => {
    let url = "https://api.themoviedb.org/3/";
    if (listName === "trending") {
      url += `trending/movie/week?api_key=${api_key}`;
    } else {
      url = `https://api.themoviedb.org/3/movie/${listName}?api_key=${api_key}`;
    }

    this.fetchMovies(url);
    this.setState({ selectedList: listName });
  };

  componentDidMount() {
    this.fetchMovies(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`
    );
    this.fetchGenres();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedGenre !== this.state.selectedGenre)
      this.fetchMovies(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`,
        this.state.selectedGenre.id
      );
  }

  render() {
    const { movies, genres, selectedGenre, lists, selectedList } = this.state;
    return (
      <React.Fragment>
        <Navbar
          lists={lists}
          selectedList={selectedList}
          onSelectList={this.handleSelectList}
        />
        <main className="container pt-3">
          <div className="row">
            <aside className="col-lg-2">
              <Genres
                onSelectGenre={this.handleSelectGenre}
                selectedGenre={selectedGenre}
                genres={genres}
              />
            </aside>
            <section className="col-lg-10">
              <Movies movies={movies} selectedList={selectedList} />
            </section>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
