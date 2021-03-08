<template>
  <main>
    <Slider :slides="slides" />
    <!-- <ShortContact /> -->
    <AboutUs />
    <Contact />
  </main>
</template>
<script>
import Slider from './Slider';
import ShortContact from "./ShortContact";
import AboutUs from "./AboutUs";
import Contact from "./Contact";

export default {
  components: {
    Slider,
    ShortContact,
    AboutUs,
    Contact
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
    }
  },
  mounted() {},
}
</script>
<style scoped>
</style>
