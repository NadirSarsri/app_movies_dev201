import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYzI4M2ZmYzYwMDY1NGQ3YjdhNGZkY2FlZTZmNjcyNiIsIm5iZiI6MTcyOTM2MDE3Ni4wODA1MzcsInN1YiI6IjYwYjEwNjY4YzVjMWVmMDA3OTQ5OTE1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wz8aut_5u6y7YUwpmMET9YGBFmvzOl4y9Jfq6W0ib0c",
  },
});

// instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
export default instance;
