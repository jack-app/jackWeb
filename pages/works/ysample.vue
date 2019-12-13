<template>
<div>
<p>{{getaWork("ShokupanGirl")}}</p>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  async fetch({store}){
    await store.dispatch('works/fetchWorks')
  },
  computed:{
    ...mapGetters({
      getWorks: 'works/allworks',
      getaWork: 'works/awork'
    })
    /*getworks(){
      var response = store.getters.awork("ShokupanGirl")
      store.commit('yani/setanimal', response)
    }*/
  }
}

</script>
