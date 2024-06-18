<script>
import axios from 'axios';

export default {
  components: {
  },
  data() {
    return {
      characters: [],
      currentPage: 1,
      lastPage: null,
    }
  },
  methods: {
    fetchCharacters(currentPage, perPage) {
      axios.get("http://127.0.0.1:8000/api/characters", {
        params: {
          page: currentPage,
          perPage
        }
      })
        .then((response) => {
          this.characters = response.data.characters.data
          this.currentPage = response.data.characters.current_page
          this.lastPage = response.data.characters.last_page
          console.log(response)
        })
    }
  },
  created() {
    this.fetchCharacters(1, 10);
  }
}

</script>

<template>

  <main>
    <section class="h-100">
      <div class="container py-5 h-100">
        <div class="row aling-items-center flex-column justify-content-center h-100">
          <div class="col-auto text-center">
            <h1>Hello Vue <font-awesome-icon :icon="['fab', 'vuejs']" /></h1>
          </div>
        </div>
      </div>
    </section>
  </main>

</template>

<style></style>