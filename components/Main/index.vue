<template>
  <main>
    <Slider :slides="slides" v-if="slides.length > 0" />
    <AboutUs :aboutus="aboutus" />
    <Portfolio :portfolio="portfolio" v-on:showGallery="showGallery" />
    <References :references="references" v-on:showGallery="showGallery" />
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
import References from './References/index'
import Contact from './Contact'
import Gallery from './Gallery'

export default {
  props: ['portfolio', 'references', 'slides', 'aboutus'],
  components: {
    Slider,
    ShortContact,
    AboutUs,
    Portfolio,
    References,
    Contact,
    Gallery,
  },
  data() {
    return {
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
  },
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
