<template>
  <form @submit.prevent="onSubmitted">
      <div class="form-group">
          <label for="content">Content</label>
          <input type="text" id="content" class="form-control" v-model="commentContent">
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'new-comment',
  data () {
    return {
      commentContent: ''
    }
  },
  methods: {
    onSubmitted () {
      axios.post('http://localhost:8000/api/comment',
        {content: this.commentContent})
        .then(
          (response) => console.log(response),
          () => alert('Created !!!'),
          this.commentContent = ''
        )
        .catch(
          (error) => console.log(error)
        )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
