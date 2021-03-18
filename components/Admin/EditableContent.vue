<template>
  <div class="editable-content" :class="editMode ? 'edit-mode' : ''">
    <div v-if="!editMode">
      <p class="content" :key="editedContent">{{ editedContent }}</p>
    </div>
    <div v-else>
      <textarea class="content" v-model="editedContent"></textarea>
      <div class="action-buttons">
        <button
          class="action-button action-cancel"
          @click="
            () => {
              editMode = false
              editedContent = editableContent
            }
          "
        >
          Anuluj
        </button>
        <button
          class="action-button action-save"
          @click="
            () => {
              saveContent(editedContent)
              editMode = false
            }
          "
        >
          Zapisz
        </button>
      </div>
    </div>
    <div class="options">
      <button class="option-btn edit" title="Edytuj" @click="editMode = true">
        <font-awesome-icon :icon="['fas', 'pen']" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['editableContent', 'saveContent'],
  data() {
    return {
      editedContent: this.editableContent,
      editMode: false,
    }
  },
}
</script>
<style scoped>
.editable-content {
  padding: 40px;
  background-color: #ededed;
  border-bottom: 1px solid #ffaa06;
  margin-bottom: 40px;
  position: relative;
}
.content {
  max-width: 720px;
  width: 100%;
  min-height: 80px;
  resize: none;
  font-family: inherit;
  padding: 12px;
}
textarea {
  background-color: rgba(255, 255, 255, 0.3);
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
.options {
  position: absolute;
  top: 20px;
  right: 20px;
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
</style>
