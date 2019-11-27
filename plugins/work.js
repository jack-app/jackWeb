import Vue from 'vue'
import axios from 'axios'

export default ({app}, inject) => {
  app.Work = {
    constructor (arg) {
      this.init()
      if ( typeof arg == "string" ) {
        this.id = arg
        this.fetch()
      }
      if ( typeof arg == "object" ) {
        Object.assign(this, arg)
        this.is_fetched = true
      }
    },

    fetch () {
      axios.get("https://jackun-develop.herokuapp.com/api/v1/products").then( resp => {
        Object.assign(this, resp.data)
        this.is_fetched = true
      } )
    },

    init() {
      this.name = null
      this.id = null
      this.is_fetched = null
    }
  }
}
