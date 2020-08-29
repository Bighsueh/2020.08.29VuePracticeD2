<template>
  <div>This is UserList.</div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      users: []
    }
  },
  created() {
    this.$store.dispatch("GET_USER_LIST")
  }

}

</script>

<style scoped>

</style>