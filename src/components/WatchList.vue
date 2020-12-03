<template>
  <div class="app">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <h2>{{ movie.Title }}</h2>
        <div>
          <img width="200" :alt="altText" :src="movie.Poster" />
        </div>
        <p>{{ movie.Year }}</p>
        <button @click="removeItemFromWatchList(movie)" class="auto">Mark as watched</button>
    </div>
    <p>{{empty}}</p>
  </div>
</template>

<script>
  export default {
    name: 'WatchList',
    props: {
      movies: Array
    },
    computed: {
      empty() {
        if(this.$root.$data.watchList.length === 0) {
          let mess = "The Watch List is currently empty";
          return mess;
        }
        else {
          let mess = "";
          return mess;
        }
      }
    },
    methods: {
      removeItemFromWatchList(movie) {
        const index = this.$root.$data.watchList.indexOf(movie);
        if (index > -1) {
          this.$root.$data.watchList.splice(index, 1);
        }
      }
    }
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
