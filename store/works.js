export const state = () => ({
  works:[]
})

export const mutations = {
  setworks (state, list){
    state.works = list
  }
}

/*export const actions = {
  async fetchWorks({commit}) {
      //const url = 'https://jackun-develop.herokuapp.com/api/v1/products'
      let res = await this.$axios.get('https://jackun-develop.herokuapp.com/api/v1/products')
      //const works = res.data
      console.log(res.data)
      commit('setworks',res.data)
  }
}*/
export const actions = {
 fetchWorks(context) {
  return axios.get('https://jackun-develop.herokuapp.com/api/v1/products')
   .then(response => {
    context.commit('setworks', response.data)
   })
   .catch((reason) => {
    console.log(reason.message)
   })
 }
}

export const getters = {
  allworks: function(state){
    return state.works
  },
  awork: function(state,object){
    state.works.foreach(function(work){
      if(work==object){
        return {id:work.id}
      }
    })
  }
}
