<template>
  <div class="stripe stripe-light_grey">
    <div>
      <p class="description">
        <a href="tel:783-211-118" class="phone-button">
          <img src="/images/contact.svg" alt="" />
          <span>783-211-118</span>
        </a>
      </p>
    </div>
    <div>
      <p class="description">
        <img src="/images/clock.svg" alt="" />
        <span>7:00 – 17:00</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.stripe {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.stripe > div {
  padding: 36px 60px;
  margin: 24px 0;
}
.stripe > div:first-of-type {
  border-right: 1px solid #e0e0e0;
}
.title {
  font-size: 1em;
  font-weight: 600;
  text-align: center;
  margin-bottom: 8px;
}
.title_yellow {
  color: #ffaa06;
}
.description {
  font-size: 1.4em;
  color: #525252;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.description img {
  height: 20px;
  margin-right: 12px;
}
@media screen and (max-width: 720px) {
  .stripe {
    flex-direction: column;
    padding: 0 24px;
  }
  .stripe > div {
    width: 100%;
    padding: 36px 60px;
    margin: 0;
  }
  .stripe > div:first-of-type {
    border-right: none;
    border-bottom: 1px solid #e0e0e0;
  }
}
@media screen and (max-width: 360px) {
  .stripe {
    padding: 0 6px;
  }
}
</style>
