<template>
  <div id="app">
    <ele-header></ele-header>
    <router-view/>
    <ele-footer></ele-footer>
  </div>
</template>

<script>
import eleHeader from './components/eleHeader'
import eleFooter from './components/eleFooter'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    eleHeader,
    eleFooter,
  }
}
</script>

<style lang="scss" scoped>

</style>
