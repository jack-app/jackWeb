import axios from 'axios'

export default class Work {
  constructor(arg) {
    this.init()
    if ( typeof arg == "string" ) {
      this.id = arg
      this.fetch()
    }
    if ( typeof arg == "object" ) {
      Object.assign(this, arg)
      this.is_fetched = true
    }
  }

  fetch () {
    axios.get("workのidをなげてじょうほうをくれるURL").then( resp => {
      Object.assign(this, resp.data)
      this.is_fetched = true
    } )
  }

  init() {
    this.name = null
    this.id = null
    this.is_fetched = null
  }
}
