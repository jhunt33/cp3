<template>
  <div class="app">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <h2>{{ movie.Title }}</h2>
        <div>
          <img width="200" :alt="altText" :src="movie.Poster" />
        </div>
        <p>{{ movie.Year }}</p>
    </div>
    <p>{{empty}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Favorites',
    props: {
      movies: Array
    },
    computed: {
      empty() {
        if(this.$root.$data.best.length === 0) {
          let mess = "The Favorites list is currently empty";
          return mess;
        }
        else {
          let mess = "";
          return mess;
        }
      }
    },
  }
</script>

<style scoped>
.auto {
  font-family: 'Permanent Marker', cursive;
  background-color: #123b8c;
  color: #fff;
}

.app {
  display: flex;
  flex-wrap: wrap;
}
</style>
