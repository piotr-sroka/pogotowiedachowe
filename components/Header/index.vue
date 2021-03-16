<template>
  <header ref="header">
    <div class="header-content">
      <Logo />
      <Menu />
    </div>
  </header>
</template>
<script>
import Logo from '../Logo'
import Menu from './Menu'

export default {
  components: {
    Logo,
    Menu,
  },
  methods: {
    onScroll() {
      if (window.pageYOffset > 0) {
        document.querySelector(".page-container").classList.add('sticky')
      } else {
        document.querySelector(".page-container").classList.remove('sticky')
      }
    },
  },
  mounted() {
    window.onscroll = this.onScroll
  },
}
</script>
<style scoped>
header {
  height: 120px;
  width: 100%;
  background-color: #333645;
  z-index: 9999;
  /* transition: all .2s linear; */
}
.sticky header {
  /* position: fixed; */
  /* top: 0; */
}
.header-content {
  display: flex;
  justify-content: space-between;
  max-width: 1920px;
  margin: 0 auto;
  height: 100%;
}
.break {
  display: none;
}
@media screen and (max-width: 860px) {
  header {
    height: 60px;
  }
}
</style>
