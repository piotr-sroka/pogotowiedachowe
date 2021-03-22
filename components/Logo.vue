<template>
  <nuxt-link :to="{ path: $route.path === '/admin' ? '/admin' : '/' }">
    <img class="NuxtLogo" src="images/logo.svg">
  </nuxt-link>
</template>
<script>
export default {}
</script>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: 20px;
  height: 80px;
  max-width: 100%;
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
