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
          @click="activeElement = element"
        >
          {{ element.title }}
        </li>
      </ul>
    </div>
    <div class="active-element" v-if="activeElement">
      <header class="active-element_title">{{ activeElement.title }}</header>
      <div class="active-element_content" v-if="activeElement.content">
        <EditableContent
          :editableContent="activeElement.content"
          :saveContent="
            (newContent) => saveContent(activeElement.name, newContent)
          "
        />
      </div>
      <div class="active-element_childrens" v-if="activeElement.children">
        <EditableChild
          v-for="(child, index) in activeElement.children"
          :key="index"
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
import EditableContent from '../components/Admin/EditableContent'
import EditableChild from '../components/Admin/EditableChild'

export default {
  components: {
    Logo,
    EditableContent,
    EditableChild,
  },
  data() {
    return {
      activeElement: null,
      editableElements: null,
    }
  },
  methods: {
    async saveContent(elementName, content, contentType) {
      let contentToUpdate = this.editableElements
      const docToUpdate = await this.$fire.firestore
        .collection('site-content')
        .where('name', '==', elementName)
        .get()
        .then((res) => {
          return res.docs[0]
        })
      if (contentType === 'child') {
        // this.$fire.firestore.collection('site-content').doc(docToUpdate.id).set(
        //   {
        //     children: [...content],
        //   },
        //   { merge: true }
        // )
        let childToUpdate = contentToUpdate
          .filter((el) => el.name === elementName)[0]
          .children.filter((child) => {
            return child.id === content.id
          })
        childToUpdate = {...content};
        console.log(childToUpdate)
        console.log(contentToUpdate)
      }
      return //console.log('doc data: ', docToUpdate.data())
      this.$fire.firestore
        .collection('site-content')
        .doc(docToUpdate.id)
        .update({ contentToUpdate })
        .then((res) => {
          this.editableElements.forEach((el) => {
            if (el.name === elementName) el.content = contentToUpdate
          })
        })
        .catch((err) => {
          console.log(err)
        })
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
          console.log(this.editableElements);
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
