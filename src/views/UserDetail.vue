<template>
<div>UserDetail {{this.$route.params.id}}</div>
</template>

<script>
export default {
  beforeRouterEnter(to, from, next) {
    console.log('beforeRouterEnter', to, from);
    next()
  }
}
</script>
