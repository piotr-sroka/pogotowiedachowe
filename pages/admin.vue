<template>
  <div class="page-container">
    <div class="panel">
      <header>
        <Logo class="logo" />
      </header>
      <ul class="list-of-elements">
        <li
          class="editable-element"
          :class="
            activeElement && activeElement.name === element.name ? 'active' : ''
          "
          v-for="element in editableElements"
          :key="element.name"
          @click="loadActiveElement(element)"
        >
          {{ element.title }}
        </li>
      </ul>
    </div>
    <div class="active-element" v-if="activeElement">
      <header class="active-element_title">
        <h4>{{ activeElement.title }}</h4>
        <button class="action-btn add" title="Dodaj">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </button>
      </header>
      <div class="active-element_childrens" v-if="activeElement.children">
        <EditableChild
          v-for="child in activeElementChildren"
          :key="child.description"
          :editableChild="child"
          :saveContent="
            (newContent) => saveContent(activeElement.name, newContent, 'child')
          "
        />
      </div>
    </div>
  </div>
</template>
<script>
import Logo from '../components/Logo'
import EditableChild from '../components/Admin/EditableChild'

export default {
  head() {
    return {
      title: this.title,
    }
  },
  components: {
    Logo,
    EditableChild,
  },
  data() {
    return {
      title: `Panel Administracyjny - ${this.$root.$meta().refresh().metaInfo.title}`,
      activeElement: null,
      editableElements: null,
    }
  },
  computed: {
    activeElementChildren() {
      return this.activeElement.children.filter((child) => !child.removed)
    },
  },
  methods: {
    async loadActiveElement(element) {
      const activeElementDocId = await this.$fire.firestore
        .collection('site-content')
        .where('name', '==', element.name)
        .get()
        .then((res) => res.docs[0].id)
      const elementChildren = await this.$fire.firestore
        .collection('site-content')
        .doc(activeElementDocId)
        .collection('children')
        .orderBy('displayOrder', 'asc')
        .get()
        .then((res) => res.docs)
      element.children = elementChildren
        .filter((child) => !child.data().removed)
        .map((child) => {
          return child.data()
        })
      this.activeElement = element
    },
    async saveContent(elementName, content, contentType) {
      const docId = await this.$fire.firestore
        .collection('site-content')
        .where('name', '==', elementName)
        .get()
        .then((res) => res.docs[0].id)
      const childToUpdate = await this.$fire.firestore
        .collection('site-content')
        .doc(docId)
        .collection('children')
        .get()
        .then((res) => {
          return res.docs.filter(
            (doc) => doc.data().displayOrder === content.displayOrder
          )[0]
        })
      this.$fire.firestore
        .collection('site-content')
        .doc(docId)
        .collection('children')
        .doc(childToUpdate.id)
        .update(content)
        .then((res) => {
          this.activeElement.children.forEach((child, index) => {
            if (child.displayOrder === content.displayOrder) {
              for (let prop in child) {
                child[prop] = content[prop]
              }
              let currentActiveElement = { ...this.activeElement }
              this.activeElement = null
              this.activeElement = { ...currentActiveElement }
              this.$forceUpdate()
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  watch: {
    activeElement: {
      deep: true,
      handler(oldV, newV) {
        console.log(oldV, newV)
      },
    },
  },
  beforeCreate() {
    this.$fire.firestore
      .collection('site-content')
      .orderBy('displayOrder', 'asc')
      .get()
      .then((res) => {
        if (res.docs.length) {
          this.editableElements = res.docs.map((doc) => {
            return doc.data()
          })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>
<style scoped>
.page-container {
  height: 100vh;
  display: flex;
  overflow: hidden;
}
.panel {
  height: 100%;
  width: 240px;
  background-color: #1f2029;
}
.active-element {
  background-color: #fafafa;
  height: 100%;
  flex: 1;
}
.active-element h4 {
  font-weight: normal;
}
.list-of-elements {
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: 40px;
}
.editable-element {
  color: #dadada;
  width: 100%;
  font-size: 12px;
  padding: 12px 8px;
  background-color: #09090c;
  border-bottom: 1px solid #1f2029;
  border-left: 2px solid #09090c;
  cursor: pointer;
  transition: all 0.2s ease-out;
}
.editable-element:hover,
.editable-element.active {
  color: #ffaa06;
  border-left-color: #ffaa06;
}
.active-element_title {
  font-size: 20px;
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.action-btn {
  padding: 8px 12px;
  color: #fafafa;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #ffaa06;
}
</style>
<style>
.NuxtLogo {
  height: auto;
  width: 100%;
  max-height: 80px;
  margin: 0;
  padding: 20px 0;
}
</style>
