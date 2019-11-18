import axios from 'axios'

export const state = () => ({
  list: []
})

export const mutations = {
  SET_WORKS (state, list){
    state.list = list
  }
}

export const actions = {
  async fetchWorks (ctx) {
      const url = 'https://jackun-develop.herokuapp.com/api/v1/products'
      const res = await this.$axios.get(url)
      //const works = res.data
      console.log(res.data)
      ctx.commit("SET_WORKS",res.data)
  }
}
