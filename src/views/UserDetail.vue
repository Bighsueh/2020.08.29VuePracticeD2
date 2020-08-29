<template>
  <div>
    <div>UserDetail {{ this.$route.params.id }}</div>
    <button @click="clickHandler">刪除</button>
  </div>
</template>

<script>
export default {
  // beforeRouterEnter(to, from, next) {
  //   console.log('beforeRouterEnter', to, from);
  //   next()
  // }

  //在轉址前動作
  beforeRouteUpdate(to, from, next) {
    //檢查id與to的id是否相同，否則擋掉
    let user = this.$store.state.users.find((user) => {
      return user.id + "" === this.$route.params.id
    })

    if (user === undefined) {
      next("/user")
    } else {
      next()
    }
    // console.log(user)
  },
  methods: {
    clickHandler() {
      this.$store.dispatch("DEL_USER", this.$route.params.id).then(() => window.alert("刪除成功"))
      this.$router.replace("/user")
    }
  }
}
// console.log("beforeCreate",this.$store.state.users) ->輸出數值為num
// console.log("beforeCreate",this.$route.params.id)   ->輸出數值為string

//轉址
//this.$router.go("url") ->直接以1,-1指定上下頁數
//this.$router.replace("url") ->直接取代目前頁面，不進history，轉址後無法回到原本的頁面
//this.$router.push("url") ->直接取代目前頁面，進history，轉址後可回到原本的頁面

</script>
