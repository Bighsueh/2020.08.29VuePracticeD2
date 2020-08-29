<template>
  <div>
    <p>This is UserList.</p>
    <router-link v-for="item in users" :key="item.id" :to="'/user/'+item.id">{{item.name}}<br></router-link>

    <p>
      Name: <input type="text" v-model.trim="name">
    </p>
    <p>
      Gender:
      <input type="radio" value="1" v-model.number="gender">男
      <input type="radio" value="2" v-model.number="gender">女
    </p>
    <p>
      <button @click="clickHandler">送出</button>
    </p>

  </div>

</template>

<script>
export default {
  data(){
    return{
      name:"",
      gender:0,
    }
  },
  created() {
    this.$store.dispatch("GET_USER_LIST")
  },
  computed:{
    users(){
      return this.$store.state.users
    }
  },
  methods:{
    clickHandler(){
      this.$store.dispatch("ADD_USER",{
        name:this.name,
        gender:this.gender
      })
      this.name = ""
      this.gender = 0
    }
  }
}

</script>

<style scoped>

</style>