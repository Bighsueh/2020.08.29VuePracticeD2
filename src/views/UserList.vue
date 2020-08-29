<template>
  <div>
    <p>This is UserList.</p>
    <router-link v-for="item in users" :key="item.id" :to="'/user/'+item.id">{{item.name}}<br></router-link>


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