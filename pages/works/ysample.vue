<template>
<p>{{$store.state.animal}}</p>
</template>

<script>
export default {
  /*async fetch({store,params}){
    await store.dispatch('fetchWorks');
  },*/
  /*created(){
    this.$store.dispatch('fetchWorks')
  },*/
  async fetch({store,$axios}) {
      let response = await $axios.$get('https://jackun-develop.herokuapp.com/api/v1/products')
      store.commit('works/setworks', response)
  },
}

</script>
