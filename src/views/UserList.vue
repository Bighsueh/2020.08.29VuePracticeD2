<template>
  <div>
    <p>This is UserList.</p>
    <router-link v-for="item in users" :key="item.id" :to="'/user/'+item.id">{{item.name}}<br></router-link>

    <p>
      Name: <input type="text">
    </p>
    <p>
      Gender:
      <input type="radio" value="1">男
      <input type="radio" value="2">女
    </p>
    <p>
      <button>送出</button>
    </p>

  </div>

</template>

<script>
export default {
  name: "UserList",
  created() {
    this.$store.dispatch("GET_USER_LIST")
  },
  computed:{
    users(){
      return this.$store.state.users
    }
  }

}

</script>

<style scoped>

</style>