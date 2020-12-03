<template>
<div>
  <h1>Your Favorite Items</h1>
  <Favorites :movies="movies"/>
</div>
</template>

<script>
import Favorites from "../components/Favorites.vue"
export default {
  name: 'Top',
  components: {
    Favorites
  },
  data() {
    return {
    }
  },
  computed: {
    movies() {
        return this.$root.$data.best
    }
  }
}
</script>
