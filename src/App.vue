<template>
  <div class="app">
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
      <router-link to="/">
        <Header :title="'Cinematic Collection'"/>
      </router-link>
      <div id="side">
        <div id="lnks">
          <router-link to="/top">
            <div class="menu-item quality">
              <img src="./images/quality-medal.png">
              <p>Your Favorites</p>
            </div>
          </router-link>
          <router-link to="/watchlist">
            <div class="menu-item">
              <img src="./images/playlater.png">
              <p>Watch List ({{watchListCount}})</p>
            </div>
          </router-link>
        </div>
      </div>
      <router-view/>
      <div class="footer">
          <a class="git" href="https://github.com/jhunt33/cp3.git">Git Repository</a>
      </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default{
  name: 'app',
  components: { Header },
  computed: {
    watchlistLength() {
      return this.$root.$data.watchList.length;
    },
    watchListCount() {
      return this.$root.$data.watchList.length;
    }
  }
}
</script>

<style>
  .app {
    text-align: center;
    font-family: 'Permanent Marker', cursive;
  }

  #srch {
    padding-top: 40px;
  }

  .header {
    background-color: #123b8c;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 20px;
    cursor: pointer;
  }

  #side {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-left: 50px;
    padding-right: 50px;
  }

  #lnks {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .intro {
    font-size: large;
  }

  #quality {
    padding-top:10px;
  }

  .menu-item {
    padding: 20px;
  }

  /* new css for movie component */

  * {
    box-sizing: border-box;
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .header h2 {
    margin: 0;
  }

  .add-movies {
    text-align: center;
  }

  .add-movies button {
    font-size: 16px;
    padding: 8px;
    margin: 0 10px 30px 10px;
  }

  .movie {
    padding: 5px 25px 10px 25px;
    max-width: 25%;
  }

  .errorMessage {
    margin: auto;
    font-weight: bold;
    color: rgb(161, 15, 15);
  }


  .search {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }

  .footer {
    display: flex;
    margin-top: auto;
    height: 75px;
    background-color: #0a349f;
    justify-content: space-between;
    align-items: center;
    padding-left: 50px;
    padding-right: 50px;
  }

  .git {
    color: #fff;
  }

  input[type="submit"] {
    padding: 5px;
    background-color: transparent;
    color: black;
    border: 1px solid black;
    width: 80px;
    margin-left: 5px;
    cursor: pointer;
  }


  input[type="submit"]:hover {
    background-color: #282c34;
    color: antiquewhite;
  }


  .search > input[type="text"]{
    width: 40%;
    min-width: 170px;
  }

  @media screen and (min-width: 694px) and (max-width: 915px) {
    .movie {
      max-width: 33%;
    }
  }

  @media screen and (min-width: 652px) and (max-width: 693px) {
    .movie {
      max-width: 50%;
    }
  }


  @media screen and (max-width: 651px) {
    .movie {
      max-width: 100%;
      margin: auto;
    }
  }
</style>
