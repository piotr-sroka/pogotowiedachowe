<template>
  <div class="page-container">
    <Header />
    <Main :aboutus="aboutus" :portfolio="portfolio" :slides="slides" />
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
      slides: [],
      aboutus: [],
    }
  },
  beforeCreate() {
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
              this.slides = res.docs
                .filter((doc) => doc.data().enabled && !doc.data().removed)
                .map((doc) => doc.data())
            })
        }
      })
      .catch((err) => {
        console.log(err)
      })
    this.$fire.firestore
      .collection('site-content')
      .where('name', '==', 'portfolio')
      .get()
      .then((res) => {
        if (res.docs.length) {
          this.$fire.firestore
            .collection('site-content')
            .doc(res.docs[0].id)
            .collection('children')
            .get()
            .then((res) => {
              this.portfolio = res.docs
                .filter((doc) => doc.data().enabled && !doc.data().removed)
                .map((doc) => doc.data())
            })
        }
      })
      .catch((err) => {
        console.log(err)
      })
    this.$fire.firestore
      .collection('site-content')
      .where('name', '==', 'aboutus')
      .get()
      .then((res) => {
        if (res.docs.length) {
          this.$fire.firestore
            .collection('site-content')
            .doc(res.docs[0].id)
            .collection('children')
            .get()
            .then((res) => {
              this.aboutus = res.docs.map((doc) => doc.data())[0]
            })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>

<style></style>
