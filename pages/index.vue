<template>
  <div class="page-container">
    <Header />
    <Main :portfolio="portfolio" :slides="slides" />
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
      slides: []
    }
  },
  beforeCreate() {
    // this.$fire.firestore
    //   .collection('portfolio')
    //   .get()
    //   .then((ress) => {
    //     if (ress.docs.length)
    //       this.portfolio = ress.docs.map((doc) => {
    //         return doc.data()
    //       })
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    this.$fire.firestore
      .collection('site-content')
      .where('name', '==', 'slider')
      .get()
      .then((res) => {
        if (res.docs.length) {
          this.$fire.firestore
            .collection('site-content')
            .doc(res.docs[0].id)
            .collection('children')
            .get()
            .then((res) => {
              this.slides = res.docs.filter(doc => doc.data().enabled && !doc.data().removed).map(doc => doc.data());
            })
          // this.editableElements = res.docs.map((doc) => {
          //   return doc.data()
          // })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
  mounted() {
    // console.log(this.$fire.database);
  },
}
</script>

<style></style>
