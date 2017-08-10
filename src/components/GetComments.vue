<template>
  <div>
      <button class="btn btn-primary" @click="onGetComments">Get Comments</button>
      <hr>
      <app-comment v-for="comment in comments" :cmt="comment" @commentDeleted="onCommentDeleted($event)"></app-comment>
  </div>
</template>

<script>
import Comment from './Comment.vue'
import axios from 'axios'

export default {
  data () {
    return {
      comments: []
    }
  },
  methods: {
    onGetComments () {
      axios.get('http://localhost:8000/api/comments')
        .then(
          response => {
            console.log(response)
            this.comments = response.data.comments
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    onCommentDeleted (id) {
      const position = this.comments.findIndex((element) => { return element.id === id })
      this.comments.splice(position, 1)
    }
  },
  components: {
    'app-comment': Comment
  }
}
</script>