<template>
  <div class="references-item">
    <img
      :src="`${item.images[0]}?random=${getRand()}`"
      alt=""
      class="item-image"
    />
    <div class="item-copy">
      <h5 class="item-title">{{ item.title }}</h5>
      <perfect-scrollbar>
        <p class="item-description">{{ item.description }}</p>
      </perfect-scrollbar>
      <button class="show-more-btn" @click="onItemClick">Zobacz zdjęcia</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['item'],
  methods: {
    getRand() {
      return Math.random()
    },
    onItemClick() {
      this.$emit('showGallery', this.item)
    },
  },
}
</script>
<style scoped>
.references-item {
  flex: 1;
  background-color: #1f2029;
  color: #fafafa;
  min-width: 320px;
  max-width: 25%;
  height: 360px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}
.item-image {
  position: absolute;
  height: 100%;
  object-fit: cover;
  width: 100%;
}
.item-copy {
  background-color: rgba(31, 32, 41, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: Calc(-100% + 60px);
  transition: all 0.35s ease-out;
}
.references-item:hover .item-copy {
  bottom: 0;
}
.references-item:hover .item-title {
  color: #ffaa06;
}
.item-title,
.item-description {
  font-size: 14px;
  padding: 18px 100px 18px 18px;
  transition: all 0.2s ease-out;
}
.item-title {
  font-weight: bold;
  height: 60px;
  display: flex;
  align-items: center;
}
.item-description {
  height: 300px;
  margin-bottom: -70px;
}
.show-more-btn {
  border: none;
  outline: none;
  color: #fafafa;
  background-color: #ffaa06;
  position: absolute;
  right: 18px;
  bottom: 18px;
  padding: 12px 24px;
  cursor: pointer;
  overflow: hidden;
}
.show-more-btn::after {
  content: '>';
  display: inline-block;
  font-size: smaller;
  margin-right: -24px;
  margin-left: 0;
  opacity: 0;
  width: 24px;
  transition: all 0.2s ease-out;
}
.show-more-btn:hover {
  padding-right: 24px;
}
.show-more-btn:hover::after {
  margin-right: 0;
  margin-left: 24px;
  opacity: 1;
}
@media screen and (max-width: 1280px) {
  .references-item {
    min-width: 320px;
  }
}
</style>
