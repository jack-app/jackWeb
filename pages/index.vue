<template>
  <div>
    <section id="home" class="section">
      <div class="container">
        <swiper :options="swiperOption">
          <swiper-slide v-for="work in data" :key="work.id">
            <div class="card-wrapper">
              <div class="card card-slide">
                <div class="card-image">
                  <figure class="image is-2by1" style="background-color:#ced5da">
                    <img v-if="work.header" :src="work.header.fileURL" :alt="work.name">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-left">
                      <figure class="image is-128x128 icon" style="background-color:#ced5da">
                        <img v-if="work.icon" :src="work.icon.fileURL" :alt="work.name" class="icon">
                      </figure>
                    </div>
                    <div class="media-content">
                        <p class="title">{{ work.name }}</p>
                        <p>{{ work.catchphrase }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <div class="caption">
          <h1 class="title is-2">About us</h1>
          <p class="subtitle is-6"><span style="padding-left:5px;"></span>jackについて</p>
        </div>
        <div class="details content">
          <p><span style="padding-left:5px;"></span>jackは名古屋大学を中心とした、アプリを制作するサークル・団体です。</p>
          <p>Webサービスやスマホアプリ、ゲーム等を制作・運営しています。</p>
          <p>プログラミング、デザイン、マーケティング等様々なスキルを持ったメンバーが集まっており、個人またはチームで開発をしています。</p>
        </div>
      </div>
    </section>

    <section id="works" class="section">
      <div class="container">
        <div class="caption">
          <h1 class="title is-2">Works</h1>
          <p class="subtitle is-6"><span style="padding-left:5px;"></span>プロダクト一覧</p>
        </div>
        <div class="details columns is-multiline is-centered">
          <div class="column is-one-third" v-for="item in data" :key="item.id">
            <div class="card card-slide">
              <div class="card-image">
                <figure class="image is-2by1" style="background-color:#ced5da">
                  <img v-if="item.header" :src="item.header.fileURL" :alt="item.name">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-96x96 icon" style="background-color:#ced5da">
                      <img v-if="item.icon" :src="item.icon.fileURL" :alt="item.name" class="icon">
                    </figure>
                  </div>
                  <div class="media-content">
                      <p class="title is-4">{{ item.name }}</p>
                      <p class="subtitle is-7">{{ item.catchphrase }}</p>
                  </div>
                </div>
                <!--<div class="card-footer">
                  <nuxt-link to="/works/'${ item.id }'}">more</nuxt-link>
                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="container">
        <div class="caption">
          <h1 class="title is-2">Contact</h1>
          <p class="subtitle is-6"><span style="padding-left:2px;"></span>プロダクトに関するお問い合わせ</p>
        </div>
        <div class="details content">
          <p>プロダクトに関する質問、感想等あればこちらのフォームにてご連絡ください。</p>
          <div class="form">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdMPwUIL_1MAgUjFfhbWmttseeSpp3smPFqsf_JAhXxTw1_Mg/viewform?embedded=true" width="100%" height="532" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({$axios}){
      const response = await $axios.$get('https://jackun-develop.herokuapp.com/api/v1/products')
      return { data: response }
  },
  data(){
    return{
      swiperOption: {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        speed: 1000,
        autoplay:{
          delay: 7000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped>
/* #home{
  min-height: 80vh;
} */

.card-slide{
  width: 600px;
  margin: 0 auto 50px;
}

#about{
  background-color: #FFAD12;
}

.card-wrapper{
  margin: 20px 80px;
}

.details{
  margin: 60px;
}

@media screen and (max-width: 768px){
  .card-wrapper,.details{
    margin: 30px;
  }
}

#contact{
  background-color: #FFE0A5;
}

.form{
  margin-top: 60px;
}

.work{
  text-align: center;
  margin: 50px 30px;
}

@media screen and (max-width: 768px){
  .work{
    margin: 20px;
  }
}

.block_center{
  margin-left: auto;
  margin-right: auto;
}

.icon{
  border-radius: 20px;
  box-shadow: 0 0.5em 1em rgba(10, 10, 10, 0.15);
}
</style>
