<template>
  <div class="panel panel-default">
    <div class="panel-body">
        {{ cmt.content }}
    </div>
    <div class="panel-footer">
        <div v-if="editing">
            <input type="text" v-model="editValue">
            <a @click="onUpdate">Save</a>
            <a @click="onCancel">Cancel</a>
        </div>
        <div v-if="!editing">
            <a @click="onEdit">Edit</a>
            <a @click="onDelete">Delete</a>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['cmt'],
  data () {
    return {
      editing: false,
      editValue: this.cmt.content
    }
  },
  methods: {
    onEdit () {
      this.editing = true
      this.editValue = this.cmt.content
    },
    onCancel () {
      this.editing = false
    },
    onDelete () {
      this.$emit('commentDeleted', this.cmt.id)
      axios.delete('http://localhost:8000/api/comment/' + this.cmt.id)
        .then(
          response => console.log(response),
          () => alert('Deleted ' + this.cmt.content)
        )
        .catch(
          error => console.log(error),
          () => alert('Delete failed')
        )
    },
    onUpdate () {
      this.editing = false
      this.cmt.content = this.editValue
      axios.put('http://localhost:8000/api/comment/' + this.cmt.id)
        .then(
          response => console.log(response),
          () => alert('Update ' + this.cmt.content)
        )
        .catch(
          error => console.log(error),
          () => alert('Update failed')
        )
    }
  }
}
</script>




