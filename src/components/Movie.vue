<template>
  <div class="movie">
    <h2>{{ movie.Title }}</h2>
    <div>
      <img width="200" :alt="altText" :src="movie.Poster" />
    </div>
    <p>{{ movie.Year }}</p>
    <button @click="addItemToWatchLater(movie)" class="auto">Add to Watch Later</button>
    <button @click="addItemToFavorites(movie)" class="auto">Add to Favorites</button>
  </div>
</template>

<script>
  import { computed } from '@vue/composition-api';

  export default {
    name: "Movie",
    props: ['movie'],
    setup({ movie }) {
      const altText = computed(() => `The movie titled: ${movie.Title}`);

      return { altText };
    },
    methods: {
      addItemToWatchLater(movie) {
        this.$root.$data.watchList.push(movie);
      },
      addItemToFavorites(movie) {
        this.$root.$data.best.push(movie);
      }
    }
  };

</script>


<style scoped>
  .auto {
    font-family: 'Permanent Marker', cursive;
    background-color: #123b8c;
    color: #fff;
    margin-bottom: 10px;
  }

</style>
