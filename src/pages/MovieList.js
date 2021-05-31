import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.reqMovie();
  }

  reqMovie = async () => {
    const { getMovies } = movieAPI;
    const response = await getMovies();

    this.setState({
      movies: response,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">

        {
          loading ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }

      </div>
    );
  }
}

export default MovieList;
