<template>
  <form>
    <div class="form-group">
      <label for="username">UserName</label>
      <input type="text" name="username" id="username" class="form-control" v-model="username">
    </div>
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" class="form-control" v-model="email">
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" class="form-control" v-model="password">
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="signup">SignUp</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signup () {
      axios.post('http://localhost:8000/api/user',
        {name: this.username, email: this.email, password: this.password},
        {headers: {'Content-Type': 'apllication/json'}})
        .then(
          (response) => console.log(response),
          this.username = '',
          this.email = '',
          this.password = '',
          () => alert('SignUp Success')
        )
        .catch(
          (error) => console.log(error)
        )
    }
  }
}
</script>
