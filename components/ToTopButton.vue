<template>
  <div class="to-top-btn-container">
    <nuxt-link :to="{ path: '/' }" v-scroll-to="{ el: '#__nuxt', force: true }">
      <button class="to-top-btn" title="Do początku"></button>
    </nuxt-link>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.page-container.sticky .to-top-btn {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}
.to-top-btn-container {
  position: fixed;
  width: 100%;
  height: 40px;
  max-width: 1920px;
  margin: auto;
  bottom: 0;
  left: 0;
  right: 0;
}
.to-top-btn {
  width: 50px;
  height: 50px;
  background-color: #ffaa06;
  bottom: 25px;
  right: 25px;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: all 0.2s linear;
  cursor: pointer;
  border: none;
  outline: none;
}
.to-top-btn::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #ffffff;
  left: 0;
  right: 0;
  top: 10px;
  bottom: 0;
  margin: auto;
  border-right: none;
  border-bottom: none;
  transform-origin: center center;
  transform: rotate(45deg);
  transition: all 0.2s linear;
}
.to-top-btn:hover::before {
  top: 5px;
  border-color: rgba(31, 32, 41, 0.6);
}
.noscroll .to-top-btn-container {
  display: none;
}
</style>
