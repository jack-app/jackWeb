<template>
  <div class="container">
    <section id="home">
      <div class="contents">
        <div class="details">
          <div class="columns">
            <div class="column">
              <img src="##" class="work_img">
            </div>
            <div class="work_caption column">
              <h1 class="title is-2"></h1>
              <p>ほげ</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="contents">
        <div class="caption">
          <h1 class="title is-1">About us</h1>
          <p class="subtitle"><span style="padding-left:1em;"></span>jackについて</p>
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
          <div class="work column is-tablet is-4 is-multiline">
            <div class="icon_wrapper">
              <!--<img :src="work.icon.fileURL" alt="なんかのげーむ" v-if="work.icon.fileURL">-->
            </div>
            <p>ほげ</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="contents">
        <div class="caption">
          <h1 class="title is-1">Contact</h1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
  min-height: 100vh;
  min-width: 100vw;
  /*display: flex;
  justify-content: center;*/
  /*align-items: center;
  text-align: center;*/
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
  height: 90vh;
  padding-top: 100px;
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

#contact{
  background-color: #FFE0A5;
}

.icon_wrapper{
  width: 250px;
  height: 250px;
  background-color: #EEEEEE;
  border-radius: 20px;
}
</style>
