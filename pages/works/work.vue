<template>
  <section id="work">
    <div class="work_bg hero"　:style="{backgroundImage: 'url('+ backgroundUrl +')'}">
      <div class="hero-body">
        <div class="container">
          <div class="box">
            <div class="media-content">
              <div class="caption">
                <figure class="image is-128x128">
                  <img :src="data[1].icon.fileURL" alt="アイコン" class="icon">
                </figure>
                <h1 class="title">{{ data[1].name }}</h1>
              </div>
              <div class="content">
                <p>{{ data[1].catchphrase }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <div class="previos">
        <button type="button" name="button"></button>
        <div class="text">
          <p>Previos</p>
          <h1>{{ data[0].name }}</h1>
        </div>
        <div class="Next">
          <button type="button" name="button"></button>
          <div class="text">
            <p>Next</p>
            <h1>{{ data[2].name }}</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
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
.work_bg{
    width: 100vw;
    height: 90vh;
    background-size: cover;
    background-repeat: no-repeat;
}

@media screen and (max-width: 768px) {
  .work_bg{
    height: 600px;
  }
}

.icon{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
</style>
