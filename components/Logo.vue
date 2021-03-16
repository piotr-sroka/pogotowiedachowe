<template>
  <nuxt-link :to="{ path: '/' }">
    <img class="NuxtLogo" src="/images/logo.svg">
  </nuxt-link>
</template>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: 20px;
  height: 80px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
@media screen and (max-width: 860px) {
  .NuxtLogo {
    height: 40px;
    margin: 10px;
  }
}
</style>
