<template>
  <div class="slider" :style="sliderStyle">
    <div class="slide" :class="isChanging ? 'slide-changing' : ''">
      <h3 class="slide-headline">
        {{ currentSlide.headline.replace(/-/gi, '&#8209;') }}
      </h3>
      <p class="slide-description">
        {{ currentSlide.description.replace(/-/gi, '&#8209;') }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['slides'],
  data: function () {
    return {
      currentSlideNumber: 0,
      sliderTimer: 10,
      isChanging: false,
    }
  },
  computed: {
    currentSlide() {
      return this.slides[this.currentSlideNumber]
    },
    sliderStyle() {
      return {
        '--slide-bg': `url(${this.currentSlide.image})`,
      }
    },
  },
  methods: {
    changeSlide() {
      this.isChanging = false
      if (this.currentSlideNumber < this.slides.length - 1) {
        this.currentSlideNumber++
      } else {
        this.currentSlideNumber = 0
      }
      setTimeout(() => {
        this.isChanging = true
      }, this.sliderTimer * 1000)
      setTimeout(() => {
        this.changeSlide()
      }, this.sliderTimer * 1000 + 400)
    },
    addPortfolio() {
      this.$fire.firestore
        .collection('portfolio')
        .add({
          title: 'Title added to DB',
          description: 'Description from DB',
          images: ['https://picsum.photos/1920/1080'],
        })
        .then((res) => {
          console.log('ITEM SAVED ', res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  mounted() {
    setTimeout(() => {
      this.isChanging = true
    }, this.sliderTimer * 1000)
    setTimeout(this.changeSlide, this.sliderTimer * 1000 + 400)
  },
}
</script>
<style scoped>
.slider {
  background-color: #f8f8f8;
  height: 600px;
  width: 100%;
  position: relative;
}
.slide {
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: var(--slide-bg);
  background-position: center;
  transition: opacity 0.4s ease-in-out;
  opacity: 1;
  color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.slide.slide-changing {
  opacity: 0;
}
.slide.slide-changing .slide-headline {
  transform: translateY(-30px);
}
.slide.slide-changing .slide-description {
  transform: translateY(30px);
}
.slide-headline,
.slide-description {
  padding: 12px 24px;
  max-width: 720px;
  text-align: center;
  line-height: 1.2;
  transition: transform 0.4s ease-in-out;
}
.slide-headline {
  font-size: 2em;
}
.slide-description {
  font-size: 1.2em;
}
@media screen and (max-width: 720px) {
  .slider {
    height: 440px;
    background-size: contain;
  }
}
</style>
