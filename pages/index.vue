<template>
  <div class="container">
    <section id="home">
      <div class="contents">
        <div class="details">
          <div class="columns">
            <div class="column">
              <img :src="data[1].icon.fileURL" class="work_img">
            </div>
            <div class="work_caption column">
              <h1 class="title is-2">{{ data[1].name }}</h1>
              <p>{{ data[1].catchphrase }}<br>ここはスライドショーにする予定</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="contents">
        <div class="caption">
          <h1 class="title is-1">About us</h1>
          <p class="subtitle is-6"><span style="padding-left:10px;"></span>jackについて</p>
        </div>
        <div class="details content">
          <p>jackは名古屋大学を中心とした、アプリを制作するサークル・団体です。</p>
          <p>Webサービスやスマホアプリ、ゲーム等を制作・運営しています。</p>
          <p>プログラミング、デザイン、マーケティング等様々なスキルを持ったメンバーが集まっており、個人またはチームで開発をしています。</p>
        </div>
      </div>
    </section>

    <section id="works">
      <div class="contents">
        <div class="caption">
          <h1 class="title is-1">Works</h1>
        </div>
        <div class="details columns">
          <div class="work column is-half-mobile" v-for="item in data" :key="item.id">
            <div class="icon_wrapper">
              <img class="icon" v-if="item.icon" :src="item.icon.fileURL" :alt="item.name">
            </div>
            <h1>{{ item.name }}</h1>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="contents">
        <div class="caption">
          <h1 class="title is-1">Contact</h1>
          <p class="subtitle is-6"><span style="padding-left:10px;"></span>プロダクトに関するお問い合わせ</p>
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
  }
}
</script>

<style>
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

.title{
  padding-top: 50px;
}

#home{
  min-height: 90vh;
}

.work_img{
  height: 400px;
/*  display: flex;
  justify-content: center;
  align-items: center; */
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
  /* display: flex;
  flex-direction: column;
  justify-content: flex-end; */
  margin: 50px 0;
}

.icon_wrapper{
  width: 200px;
  height: 200px;
  margin: 10px auto;
  background-color: #EEEEEE;
  border-radius: 20px;
  -webkit-filter: drop-shadow(0 3px 10px rgba(0,0,0,.3));
  filter: drop-shadow(0 3px 4px rgba(0,0,0,.3));
}

@media screen and (max-width: 768px){
 .icon_wrapper{
   width: 150px;
   height: 150px;
 }
}

.icon{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
</style>
