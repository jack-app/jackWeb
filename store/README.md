# STORE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Vuex Store files.
Vuex Store option is implemented in the Nuxt.js framework.

Creating a file in this directory automatically activates the option in the framework.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/vuex-store).


##memo
～～～.vue
<script>
export default {
  async fetch({store}){
    await store.dispatch('works/fetchWorks')
  },
}
</script>でstoreにworksが入ります

{{getter.getwork(*id*)}} //mapGettersと対応させる

>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters({
      getWork: 'works/workbyid' //getWork部分は好きに名前を付けて
    })
  }
}
でstoreから該当*id*のworkを得られます
