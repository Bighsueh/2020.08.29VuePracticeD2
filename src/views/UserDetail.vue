<template>
<div>UserDetail {{this.$route.params.id}}</div>
</template>

<script>
export default {
  // beforeRouterEnter(to, from, next) {
  //   console.log('beforeRouterEnter', to, from);
  //   next()
  // }
  beforeCreate() {
    // console.log("beforeCreate",this.$store.state.users) ->輸出數值為num
    // console.log("beforeCreate",this.$route.params.id)   ->輸出數值為string
    let user = this.$store.state.users.find((user)=>{
      return user.id="" === this.$route.params.id
    })
    console.log(user)
  },

}
</script>
