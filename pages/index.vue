<template>
  <div class="page-container">
    <Header />
    <Main :portfolio="portfolio" />
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
      portfolio: [],
    }
  },
  beforeCreate() {
    this.$fire.firestore
      .collection('portfolio')
      .get()
      .then((ress) => {
        if (ress.docs.length)
          this.portfolio = ress.docs.map((doc) => {
            return doc.data()
          })
      })
      .catch((err) => {
        console.log(err)
      })

    // const collectionPath = this.$fire.database.ref('portfolio');
    // console.log(firebase.default.database().ref('portfolio'));
    // const messageRef = this.$fireDb.ref('cases') // Where 'cases' is the json object
    // Axios.get(messageRef.toString() + '.json').then(response => {
    // console.log(response.data)
    // })
    // }
    // }
    // console.log(firebase)
    // console.log(this.$fire.database.ref('portfolio'))
    // axios
    //   .get(collectionPath)
    //   .then((res) => {
    //     console.log(res)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    // axios
    //   .get('data/staticData.json')
    //   .then((res) => {
    //     this.portfolio = res.data.portfolio;
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  },
  mounted() {
    // console.log(this.$fire.database);
  },
}
</script>

<style></style>
