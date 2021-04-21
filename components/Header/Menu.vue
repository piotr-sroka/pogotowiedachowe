<template>
  <div class="menu" :class="clicked ? 'opened' : ''">
    <ul class="menu-list">
      <li @click="toggleMenu">
        <nuxt-link
          :to="{ path: '/', hash: 'onas' }"
          v-scroll-to="{ el: '#onas' }"
          >O Nas</nuxt-link
        >
      </li>
      <li @click="toggleMenu">
        <nuxt-link
          :to="{ path: '/', hash: 'realizacje' }"
          v-scroll-to="{ el: '#realizacje' }"
          >Realizacje</nuxt-link
        >
      </li>
      <li @click="toggleMenu">
        <nuxt-link
          :to="{ path: '/', hash: 'referencje' }"
          v-scroll-to="{ el: '#referencje' }"
          >Referencje</nuxt-link
        >
      </li>
      <li @click="toggleMenu">
        <nuxt-link
          :to="{ path: '/', hash: 'kontakt' }"
          v-scroll-to="{ el: '#kontakt' }"
          >Kontakt</nuxt-link
        >
      </li>
    </ul>
    <span class="menu-toggle" @click="clicked = !clicked">
      <span class="menu-toggle__bar"></span>
      <span class="menu-toggle__bar"></span>
      <span class="menu-toggle__bar"></span>
    </span>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      clicked: false,
      menuItems: [],
    }
  },
  methods: {
    toggleMenu() {
      if (window.matchMedia('(max-width: 720px)').matches) {
        this.clicked = false
      }
    },
  },
  beforeCreate() {
    // this.$fire.firestore
    //   .collection('site-content')
    //   .get()
    //   .then((res) => {
    //     res.docs.map((doc) => {
    //       this.menuItems = res.docs.map((doc) => {
    //         return doc.data()
    //       })
    //     })
    //   })
  },
}
</script>
<style scoped>
.menu {
  height: 100%;
  cursor: pointer;
}
.menu-list {
  list-style-type: none;
  display: flex;
  font-weight: 500;
  margin-right: 240px;
  padding: 0;
  height: 100%;
  z-index: 999;
}
.menu-list li {
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu-list li a {
  text-transform: uppercase;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fafafa;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  letter-spacing: 1.5px;
}
.menu-list li a.nuxt-link-active,
.menu-list li a:hover {
  background-color: #1f2029;
  color: #ffaa06;
}
.menu-list li.link-button {
  margin-left: 60px;
}
.menu-list li.link-button a {
  border-radius: 5px;
  color: #1f2029;
  background-color: #ffaa06;
  height: 40px;
  margin: auto;
}
.menu-list li.link-button a.nuxt-link-active,
.menu-list li.link-button a:hover {
  color: #fafafa;
  background-color: #cf8a00;
}
.menu-toggle {
  display: none;
  padding-top: 17px;
  margin-right: 10px;
  position: relative;
  width: 34px;
  height: 100%;
}
.menu-toggle__bar {
  display: block;
  width: 34px;
  height: 2px;
  background-color: #ffaa06;
  margin: 5px 0;
  transform-origin: center center;
  transition: transform 0.2s linear;
}

@media screen and (max-width: 860px) {
  .menu-list {
    margin-right: 10px;
  }
}
@media screen and (max-width: 720px) {
  .menu-list {
    position: absolute;
    height: 0;
    overflow: hidden;
    width: 100%;
    top: 60px;
    left: 0;
    display: block;
    background-color: #2d303b;
    transition: height 0.2s linear;
  }
  .menu.opened .menu-list {
    height: 180px;
  }
  .menu.menu.opened .menu-toggle {
    margin-top: 28px;
  }
  .menu.opened .menu-toggle__bar {
    margin: 0;
    position: absolute;
    top: 0;
    left: 0;
  }
  .menu.opened .menu-toggle .menu-toggle__bar:nth-child(1) {
    transform: rotate(-45deg);
  }
  .menu.opened .menu-toggle .menu-toggle__bar:nth-child(2) {
    transform: rotate(45deg);
  }
  .menu.opened .menu-toggle .menu-toggle__bar:nth-child(3) {
    display: none;
  }
  .menu-list li {
    width: 100%;
    height: 60px;
    justify-content: flex-start;
    border-bottom: 1px solid #3b3e50;
  }
  .menu-list li a {
    justify-content: flex-start;
  }
  .menu-toggle {
    display: block;
  }
}
</style>
