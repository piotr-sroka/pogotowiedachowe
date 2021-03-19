<template>
  <div class="editable-child" :class="editMode ? 'edit-mode' : ''">
    <div
      class="child-images"
      v-if="editedChild.images && editedChild.images.length"
    >
      <img
        class="child-image"
        v-for="image in editedChild.images"
        :src="image"
        :key="image"
        alt=""
      />
    </div>
    <div v-if="!editMode">
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
    <div v-else>
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
        <button
          class="action-button action-save"
          @click="saveChanges"
        >
          Zapisz
        </button>
      </div>
    </div>
    <div class="options">
      <button class="option-btn edit" title="Edytuj" @click="editMode = true">
        <font-awesome-icon :icon="['fas', 'pen']" />
      </button>
      <button class="option-btn remove" title="Usuń">
        <font-awesome-icon :icon="['fas', 'trash']" />
      </button>
      <button
        class="option-btn activate"
        :title="editedChild.enabled ? 'Deaktywuj' : 'Aktywuj'"
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
  props: ['editableChild', 'saveContent'],
  data() {
    return {
      editMode: false,
      editedChild: { ...this.editableChild },
    }
  },
  methods: {
    saveChanges() {
      this.saveContent({ ...this.editedChild });
      this.editMode = false;
    },
    discardChanges() {
      this.editedChild = { ...this.editableChild }
      this.editMode = false
    },
  },
  computed: {},
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
.editable-child:nth-child(even) {
  background-color: #ededed;
}
.child-image {
  max-height: 120px;
  max-width: 200px;
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
</style>
