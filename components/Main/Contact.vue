<template>
  <div class="contact" id="kontakt">
    <div class="contact-content">
      <h4>KONTAKT</h4>
      <ShortContact />
      <div>
        <p class="contact-address">ul. Bohaterów Westerplatte 29, 41-608 Świętochłowice</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.9104305071055!2d18.91010861572647!3d50.3122635794566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d2bd9248f0bf%3A0x3df0ac64fb4cd4b8!2sBohater%C3%B3w%20Westerplatte%2029%2C%2041-608%20%C5%9Awi%C4%99toch%C5%82owice!5e0!3m2!1spl!2spl!4v1615215564240!5m2!1spl!2spl"
          width="600"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          class="contact-map"
        ></iframe>
      </div>
    </div>
  </div>
</template>
<script>
import ShortContact from "./ShortContact";

export default {
    components: {
        ShortContact
    }
}
</script>
<style scoped>
.contact {
  background-image: url('/images/contact-map.png');
  background-position: center;
  background-size: cover;
  position: relative;
  padding-bottom: 64px;
}
.contact::after {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    border-top: 1px solid #ffaa06;
}
.contact::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.96);
}
.contact-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1280px;
  margin: 0 auto;
}
.contact-content > div {
    width: 100%;
}
.contact-content h4 {
  font-size: 2em;
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 24px 80px;
  border-bottom: 1px solid #1f2029;
  max-width: 480px;
  text-align: center;
}
.contact-address {
    font-size: 1.2em;
    text-align: center;
    margin-bottom: 12px;
}
.contact-map {
    width: 100%;
    max-height: 360px;
    padding: 0 20px;
}
.icon {
    height: 20px;
}
</style>
