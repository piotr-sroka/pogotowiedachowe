<template>
  <div class="page-container">
    <Header />
    <Main :portfolio=portfolio />
    <Footer />
    <ToTopButton />
  </div>
</template>

<script>
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import ToTopButton from '../components/ToTopButton'
import axios from 'axios'

export default {
  components: {
    Header,
    Main,
    Footer,
    ToTopButton,
  },
  data() {
    return {
      portfolio: []
    }
  },
  beforeCreate() {
    axios
      .get('/data/staticData.json')
      .then((res) => {
        this.portfolio = res.data.portfolio;
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>

<style></style>
