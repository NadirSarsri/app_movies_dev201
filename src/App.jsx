import React, { Component } from "react";

import axios from "./utils/axios";
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
    title: "trending",
  };

  fetchMovies = async (url, genreId) => {
    let response = {};
    if (genreId) {
      response = await axios.get(url + "?with_genres=" + genreId);
    } else {
      response = await axios.get(url);
    }
    this.setState({ movies: response.data.results });
  };

  fetchGenres = async () => {
    const response = await axios.get(`genre/movie/list`);

    this.setState({ genres: response.data.genres });
  };

  handleSelectGenre = (genre) => {
    this.setState({ selectedGenre: genre, title: genre.name });
  };

  handleSelectList = (listName) => {
    let url = "";
    if (listName === "trending") {
      url += `trending/movie/week`;
    } else {
      url = `movie/${listName}`;
    }

    this.fetchMovies(url);
    this.setState({
      selectedList: listName,
      title: listName,
      selectedGenre: { id: "", name: "Action" },
    });
  };

  componentDidMount() {
    this.fetchMovies(`discover/movie`);
    this.fetchGenres();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedGenre !== this.state.selectedGenre)
      this.fetchMovies(`discover/movie`, this.state.selectedGenre.id);
  }

  render() {
    const { movies, genres, selectedGenre, lists, selectedList, title } =
      this.state;
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
              <Movies title={title} movies={movies} />
            </section>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
