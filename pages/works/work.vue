<template>
  <div class="container">
    <section>
      <div class="work_header"　:style="{backgroundImage: 'url('+ backgroundUrl +')'}">
        <div class="contents">

          <h1>Hello Vue!!</h1>

        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}){
      const response = await $axios.$get('https://jackun-develop.herokuapp.com/api/v1/products')
      return {
        data: response,
        backgroundUrl: response[1].header.fileURL
       }
  }
}

</script>

<style scoped>
.container {
  min-height: 80vh;
  min-width: 100vw;
  padding-top: 100px;
}

.contents{
  width: 100%;
  padding: 50px 10vw;
  min-height: 100%;
}

.work_header{
    width: 100vw;
    height: 90vh;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>
