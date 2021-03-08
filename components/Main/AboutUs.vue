<template>
  <div class="aboutus" id="onas">
    <div class="aboutus-content">
      <h3 class="aboutus-headline">O NAS</h3>
      <p class="aboutus-description">
        Co nas wyróżnia na tle konkurencji? Nam przyświeca jedna zasada. Albo
        robić coś dobrze, albo w ogóle tego nie robić. Nie tolerujemy
        pół-środków. Inwestujemy w profesjonalny sprzęt. Stawiamy na jakość,
        ponieważ ona kształtuje naszą markę i buduje zaufanie Klienta. Dbamy o
        każdy szczegół i wciąż podnosimy standardy pracy. To jest Twój dach, to
        jest Twój dom.
      </p>
      <div class="aboutus-content_boxes">
        <div class="box">
          <div class="icon">
            <img src="/images/guarantee.svg" alt="" />
          </div>
          <h4 class="box-headline">Gwarancja jakości</h4>
          <p class="box-description">
            Na wszystkie wykonane przez nas usługi udzielamy pisemną gwarancję.
          </p>
        </div>
        <div class="box contact-box">
          <div class="icon">
            <img src="/images/contact.svg" alt="" />
          </div>
          <h4 class="box-headline">Kontakt</h4>
          <p class="box-description">
            Zapraszamy do kontaktu od poniedziałku do piątku w godzinach
            7.00&nbsp;–&nbsp;17.00
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <img src="/images/experience.svg" alt="" />
          </div>
          <h4 class="box-headline">15 Lat Doświadczenia</h4>
          <p class="box-description">
            Wieloletnie doświadczenie, dziesiątki różnorodnych prac i napraw
            dało nam nieocenioną wiedzę i umiejętności.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.aboutus {
  background-image: url('/images/about_bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  padding-bottom: 64px;
}
.aboutus::after {
  content: '';
  position: absolute;
  top: 0;
  width: 100%;
  height: 1px;
  border-top: 1px solid #ffaa06;
}
.aboutus::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255, 0.9);
  pointer-events: none;
  display: block;
}
.aboutus-content {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1280px;
  margin: 0 auto;
}
.aboutus-headline {
  font-size: 2em;
  margin: 0 auto;
  margin-bottom: 24px;
  padding: 24px 80px;
  border-bottom: 1px solid #1f2029;
  max-width: 480px;
  text-align: center;
}
.aboutus-description {
  font-size: 1.2em;
  text-align: center;
  margin: 0 auto;
  max-width: 640px;
  padding: 0 80px;
}
.aboutus-content_boxes {
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box {
  flex: 1;
  max-width: 28%;
  padding: 40px 20px;
  background-color: #ffffff;
  color: #1f2029;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.box img {
  max-height: 100%;
  margin: auto;
}
.box .icon {
  width: 48px;
  height: 48px;
  margin: 12px;
  position: relative;
  display: flex;
  justify-content: center;
}
.box-headline {
  margin: 12px 0;
}
.box.contact-box {
  background-color: #1f2029;
  color: #fafafa;
  padding: 60px 20px;
}
@media screen and (max-width: 720px) {
  .aboutus {
    padding-bottom: 0;
  }
  .aboutus-headline {
    padding: 24px 20px;
  }
  .aboutus-description {
    padding: 0 20px;
  }
  .aboutus-content_boxes {
    flex-direction: column;
    padding: 0;
  }
  .box {
    max-width: 100%;
    width: 100%;
  }
}
</style>
