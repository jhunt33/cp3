<template>
  <div>
    <Search :search="state.search" @search="handleSearch" />
    <div class="movies">
      <Movie v-for="movie in state.movies" :movie="movie" :key="movie.imdbID" />
    </div>
  </div>
</template>

<script>
  import Search from '../components/Search.vue';
  import Movie from '../components/Movie.vue';
  import { useMovieApi } from '../hooks/movie-api';

  export default {
    name: 'Home',
    components: { Search, Movie },
    setup() {
      const state = useMovieApi();

      return {
        state,
        handleSearch(searchTerm) {
          state.loading = true;
          state.search = searchTerm;
        }
      };
    }
  }
</script>
