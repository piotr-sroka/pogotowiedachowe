<template>
  <div class="editable-child" :class="getEditMode">
    <div
      class="child-images"
      v-if="editedChild.images && editedChild.images.length && !editMode"
      :class="getDisabled"
    >
      <img
        class="child-image"
        v-for="image in editedChild.images"
        :src="image"
        :key="image"
        alt=""
      />
    </div>
    <div
      class="child-image_edit"
      v-if="editedChild.images && editedChild.images.length && editMode"
    >
      <div
        v-for="(image, index) in editedChild.images"
        :key="image"
        class="image-file_select"
        @drop.prevent.stop="(e) => onDrop(e, editedChild, index)"
        @dragover.prevent.stop="onDragEnter"
        @dragleave.prevent.stop="onDragLeave"
      >
        <img class="child-image" :src="image" alt="" />
        <label for="file-select" class="file-select_label"
          >Wybierz zdjęcie lub przeciągnij je tutaj</label
        >
        <input type="file" id="file-select" class="file-select_input" />
      </div>
    </div>
    <div v-if="!editMode" class="child-text" :class="getDisabled">
      <h4 class="child-title" :key="editedChild.title" v-if="editedChild.title">
        {{ editedChild.title }}
      </h4>
      <p
        class="child-description"
        :key="editedChild.description"
        v-if="editedChild.description"
      >
        {{ editedChild.description }}
      </p>
    </div>
    <div v-else class="child-text" :class="getDisabled">
      <textarea
        class="child-title"
        v-model="editedChild.title"
        v-if="editedChild.title"
      ></textarea>
      <textarea
        class="child-description"
        v-model="editedChild.description"
        v-if="editedChild.description"
      ></textarea>
      <div class="action-buttons">
        <button class="action-button action-cancel" @click="discardChanges">
          Anuluj
        </button>
        <button class="action-button action-save" @click="saveChanges">
          Zapisz
        </button>
      </div>
    </div>
    <div class="options">
      <button
        class="option-btn edit"
        title="Edytuj"
        @click="editMode = true"
        :class="getDisabled"
      >
        <font-awesome-icon :icon="['fas', 'pen']" />
      </button>
      <button class="option-btn remove" title="Usuń" @click="remove">
        <font-awesome-icon :icon="['fas', 'trash']" />
      </button>
      <button
        class="option-btn activate"
        :title="editedChild.enabled ? 'Deaktywuj' : 'Aktywuj'"
        @click="toggleActive"
      >
        <font-awesome-icon
          :icon="['fas', editedChild.enabled ? 'toggle-on' : 'toggle-off']"
        />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['editableChild', 'saveContent', 'removeContent'],
  data() {
    return {
      editMode: false,
      editedChild: { ...this.editableChild },
    }
  },
  methods: {
    saveChanges() {
      this.saveContent({ ...this.editedChild })
      this.editMode = false
    },
    discardChanges() {
      this.editedChild = { ...this.editableChild }
      this.editMode = false
      this.$forceUpdate();
    },
    remove() {
      this.$swal('Are you sure?')
      const result = this.$swal({
        title: 'Usuwanie',
        text: 'Czy na pewno chcesz usunąć ten element?',
        icon: 'question',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: 'Tak',
        cancelButtonColor: '#E64A19',
        cancelButtonText: 'Nie',
      }).then((res) => {
        if (res.isConfirmed) {
          this.editedChild.removed = true
          this.saveChanges()
        }
      })
    },
    toggleActive() {
      this.editedChild.enabled = !this.editedChild.enabled
      this.saveChanges()
    },
    onDragEnter(e) {
      e.currentTarget.classList.add('dragover')
    },
    onDragLeave(e) {
      e.currentTarget.classList.remove('dragover')
    },
    onDrop(e, child, index) {
      e.currentTarget.classList.remove('dragover')
      const droppedFiles = Array.from(e.target.files || e.dataTransfer.files)
      const oneImageFile = droppedFiles.filter(
        (file) => file.type === 'image/jpeg' || file.type === 'image/png'
      )[0]
      console.log(oneImageFile)
      let fr = new FileReader()
      fr.onload = () => {
        child.images[index] = fr.result
        this.$forceUpdate()
      }
      fr.readAsDataURL(oneImageFile)
    },
  },
  computed: {
    getEditMode() {
      return this.editMode ? 'edit-mode' : ''
    },
    getDisabled() {
      return this.editedChild.enabled !== undefined &&
        this.editedChild.enabled === false
        ? 'disabled'
        : ''
    },
  },
}
</script>
<style scoped>
.editable-child {
  padding: 40px;
  background-color: #efefef;
  border-bottom: 1px solid #ffaa06;
  margin-bottom: 40px;
  position: relative;
}
.disabled {
  opacity: 0.3;
  pointer-events: none;
  user-select: none;
  cursor: not-allowed;
}
.editable-child:nth-child(even) {
  background-color: #ededed;
}
.child-images {
  margin-bottom: 12px;
}
.child-image {
  height: 180px;
  width: 320px;
  object-fit: cover;
}
.options {
  position: absolute;
  top: 40px;
  right: 40px;
}
.option-btn {
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 4px;
  margin-left: 8px;
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  color: #1f2029;
}
.child-title,
.child-description {
  max-width: 720px;
  width: 100%;
  min-height: 80px;
  resize: none;
  font-family: inherit;
  padding: 12px;
}
textarea {
  background-color: rgba(255, 255, 255, 0.3);
  display: block;
}
.action-buttons {
  max-width: 720px;
  display: flex;
  justify-content: flex-end;
}
.action-button {
  padding: 8px 12px;
  color: #fafafa;
  cursor: pointer;
  border: none;
  outline: none;
  margin-top: 20px;
  margin-left: 8px;
}
.action-save {
  background-color: #ffaa06;
}
.action-cancel {
  background-color: #8d021f;
}
.child-image_edit {
  width: 320px;
  height: 180px;
  object-fit: cover;
  margin-bottom: 12px;
  position: relative;
}
.child-image_edit .child-image {
  position: absolute;
  pointer-events: none;
}
.image-file_select {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 999;
}
.file-select_input {
  position: absolute;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  z-index: -1;
  overflow: hidden;
}
.file-select_label {
  color: #fafafa;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(31, 32, 41, 0.6);
  transition: all 0.2s ease-out;
}
.image-file_select .file-select_label:hover,
.image-file_select.dragover .file-select_label {
  background-color: rgba(255, 170, 6, 0.5);
}
</style>
