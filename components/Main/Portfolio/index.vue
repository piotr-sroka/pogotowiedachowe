<template>
  <div class="portfolio" id="realizacje">
    <div class="portfolio-content">
      <h4>NASZE REALIZACJE</h4>
      <div class="portfolio-items">
        <PortfolioItem
          v-for="item in portfolio"
          :key="item.id"
          :item="item"
          v-on:showGallery="showGallery"
        />
      </div>
    </div>
  </div>
</template>
<script>
import PortfolioItem from './PortfolioItem'
import Gallery from './Gallery'

export default {
  components: {
    PortfolioItem,
    Gallery,
  },
  props: ['portfolio'],
  methods: {
    showGallery(e) {
      this.$emit("showGallery", e);
    }
  },
  mounted() {
    // console.log(this.portfolio)
  },
}
</script>
<style scoped>
.portfolio {
  position: relative;
}
.portfolio-content::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #ffaa06;
}
.portfolio-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.portfolio-content > div {
  width: 100%;
}
.portfolio-content > h4 {
  font-size: 2em;
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 24px 80px;
  border-bottom: 1px solid #1f2029;
  max-width: 480px;
  text-align: center;
}
.portfolio-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
