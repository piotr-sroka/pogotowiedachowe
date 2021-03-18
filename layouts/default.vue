<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
html {
  /* font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; */
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  line-height: 1.4;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body.noscroll {
  overflow: hidden;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
a, a:link, a:active, a:hover {
  text-decoration: none;
  color: inherit;
}
*::selection {
  background-color: #ffaa06;
  color: #fafafa;
}

img::selection {
  background-color: transparent;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.page-container {
  /* transition: all .2s linear; */
}
.page-container.sticky {
  /* padding-top: 240px; */
}
textarea {
  transition: all .2s ease-out;
}
textarea:focus {
  outline: none;
  border-color: #ffaa06;
}
@media screen and (max-width: 860px) {
  .page-container.sticky {
    /* padding-top: 120px; */
  }
}
</style>
