<template>
  <div>
    <section id="home" class="section">
      <div class="container">
        <div class="swiper-container">
          <swiper :options="swiperOption">
            <swiper-slide v-for="work in data" :key="work.id">
              <div class="details">
                <div class="columns">
                  <div class="column">
                    <img :src="work.icon.fileURL" :alt="work.name" class="work_img">
                  </div>
                  <div class="work_caption column">
                    <h1 class="title is-2">{{ work.name }}</h1>
                    <p>{{ work.catchphrase }}</p>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
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
        <div class="details columns is-mobile is-multiline is-centered">
          <div class="column is-narrow" v-for="item in data" :key="item.id">
            <div class="work">
              <figure class="image is-128x128 block_center">
                <img class="icon" v-if="item.icon" :src="item.icon.fileURL" :alt="item.name">
              </figure>
              <h1>{{ item.name }}</h1>
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
          <p>GoogleForm埋め込みまーす</p>
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
.title{
  padding-top: 50px;
}

#home{
  min-height: 80vh;
}

.work_img{
  height: 350px;
}

#about{
  background-color: #FDBE46;
}

.details{
  padding: 50px;
  flex-wrap: wrap;
}

@media screen and (max-width: 768px){
  .details{
    padding: 50px 0;
  }
}

#contact{
  background-color: #FFE0A5;
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
  width: 128px;
  height: 128px;
  border-radius: 20px;
}
</style>
