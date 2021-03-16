<template>
  <main>
    <Slider :slides="slides" />
    <AboutUs />
    <Portfolio :portfolio="portfolio" v-on:showGallery="showGallery" />
    <Contact />
    <transition name="galleryShow">
      <Gallery v-if="itemToShow" :item="itemToShow" v-on:hideGallery="hideGallery" />
    </transition>
  </main>
</template>
<script>
import Slider from './Slider'
import ShortContact from './ShortContact'
import AboutUs from './AboutUs'
import Portfolio from './Portfolio/index'
import Contact from './Contact'
import Gallery from './Portfolio/Gallery'

export default {
  props: ['portfolio'],
  components: {
    Slider,
    ShortContact,
    AboutUs,
    Portfolio,
    Contact,
    Gallery,
  },
  data() {
    return {
      slides: [
        {
          image: '/images/top_slider_image1.jpg',
          headline: 'AWARYJNE DACHOWANIE?',
          description:
            'Jeżeli potrzebujesz pomocy w wykonaniu dachu lub jego naprawie skontaktuj się z nami - po nas nikt nie poprawia. To my naprawiamy dachy po innych.',
        },
        {
          image: '/images/top_slider_image2.jpg',
          headline: '15 LAT DOŚWIADCZENIA',
          description:
            'Strona w budowie w razie nagłych wypadków proszę o kontakt pod numerem telefonu 783-211-118',
        },
      ],
      itemToShow: null,
    }
  },
  methods: {
    showGallery(e) {
      this.itemToShow = e;
    },
    hideGallery() {
      this.itemToShow = null;
    },
  },
  mounted() {
    this.$on("showGallery", this.showGallery);
  },
  watch: {
    itemToShow: function(oldVal, newVal) {
      if (!newVal) {
        document.querySelector("body").classList.add("noscroll");
      } else {
        document.querySelector("body").classList.remove("noscroll");
      }
    }
  }
}
</script>
<style scoped>
.galleryShow-enter-active,
.galleryShow-leave-active {
  transition: opacity 0.5s;
}
.galleryShow-enter,
.galleryShow-leave-to {
  opacity: 0;
}
</style>
