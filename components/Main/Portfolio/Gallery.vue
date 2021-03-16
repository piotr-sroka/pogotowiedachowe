<template>
  <div class="gallery">
    <div class="gallery-bg" @click.stop="hideGallery"></div>
    <div class="gallery-content">
      <div class="item-images">
        <div class="item-image_container">
          <transition name="imageShow">
            <img
              :src="`${item.images[currentDisplayedImage]}?random=${getRand()}`"
              alt=""
            />
          </transition>
        </div>
      </div>
      <div
        class="arrow arrow-left"
        v-if="item.images.length > 1"
        @click="showImage('prev')"
      ></div>
      <div
        class="arrow arrow-right"
        v-if="item.images.length > 1"
        @click="showImage('next')"
      ></div>
      <div class="item-copy">
        <h5 class="item-title">{{ item.title }}</h5>
        <perfect-scrollbar>
          <p class="item-description">{{ item.description }}</p>
        </perfect-scrollbar>
      </div>
    </div>
    <button class="close-btn" @click="hideGallery"></button>
  </div>
</template>
<script>
export default {
  props: ['item'],
  data() {
    return {
      currentDisplayedImage: 0,
    }
  },
  methods: {
    getRand() {
      return Math.random()
    },
    hideGallery() {
      this.$emit('hideGallery')
    },
    showImage(dir) {
      if (dir === 'prev') this.currentDisplayedImage--
      if (dir === 'next') this.currentDisplayedImage++
      if (this.currentDisplayedImage < 0)
        this.currentDisplayedImage = this.item.images.length - 1
      if (this.currentDisplayedImage > this.item.images.length - 1)
        this.currentDisplayedImage = 0
    },
  },
  mounted() {},
}
</script>
<style scoped>
.gallery {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  transition: all 0.35s ease-out;
}
.gallery-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
}
.close-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
.close-btn::before {
  content: '\2716';
  color: #ffaa06;
  font-size: 24px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
  transition: all 0.2s ease-out;
}
.close-btn:hover:before {
  transform: scale(1.4);
}
.item-copy {
  width: 100%;
  height: 300px;
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 22px;
  background-color: rgba(0, 0, 0, 0.8);
}
.item-title, .item-description {
    max-width: 960px;
    margin: 0 auto;
    text-align: justify;
}
.item-title {
  font-size: 16px;
  font-weight: bold;
  height: 60px;
  padding: 14px;
  display: flex;
  align-items: center;
  color: #ffaa06;
}
.item-description {
  font-size: 14px;
  min-height: 60px;
  max-height: 240px;
  padding: 14px;
  color: #fafafa;
}
.item-images {
  position: absolute;
  width: 100%;
  height: Calc(100% - 300px);
  pointer-events: none;
}
.item-image_container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}
.item-image_container img {
  max-width: 100%;
  max-height: 100%;
  padding: 80px;
  pointer-events: all;
}
.arrow {
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  top: Calc(50% - 150px);
  cursor: pointer;
}
.arrow-left {
  left: 10px;
}
.arrow-right {
  right: 10px;
}
.arrow::before,
.arrow::after {
  color: #ffaa06;
  font-size: 48px;
  text-align: center;
  transition: all 0.2s ease-out;
  position: absolute;
  opacity: 0;
}
.arrow::after {
  color: #fafafa;
  opacity: 0.3;
}
.arrow:hover::before {
  transform: translateX(10px);
  opacity: 1;
}
.arrow.arrow-left:hover::before {
    transform: translateX(-10px);
}

.arrow.arrow-left::before,
.arrow.arrow-left::after {
  content: '\2039';
}

.arrow.arrow-right::before,
.arrow.arrow-right::after {
  content: '\203A';
}

@media screen and (max-width: 1280px) {
  .item-image_container img {
    padding: 0;
  }
}
.imageShow-enter-active,
.imageShow-leave-active {
  transition: opacity 0.5s;
}
.imageShow-enter,
.imageShow-leave-to {
  opacity: 0;
}
</style>
