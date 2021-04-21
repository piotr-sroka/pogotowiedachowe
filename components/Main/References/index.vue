<template>
  <div class="references" id="referencje">
    <div class="references-content">
      <h4>REFERENCJE</h4>
      <div class="references-items">
        <ReferencesItem
          v-for="item in references"
          :key="item.id"
          :item="item"
          v-on:showGallery="showGallery"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ReferencesItem from './ReferencesItem'
import Gallery from '../Gallery'

export default {
  components: {
    ReferencesItem,
    Gallery,
  },
  props: ['references'],
  methods: {
    showGallery(e) {
      this.$emit("showGallery", e);
    }
  },
  mounted() {
    // console.log(this.references)
  },
}
</script>
<style scoped>
.references {
  position: relative;
}
.references-content::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #ffaa06;
}
.references-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.references-content > div {
  width: 100%;
}
.references-content > h4 {
  font-size: 2em;
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 24px 80px;
  border-bottom: 1px solid #1f2029;
  max-width: 480px;
  text-align: center;
}
.references-items {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
