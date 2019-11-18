<template>
  <div class="container">
    <section id="home">
      <div class="contents">
        <div class="details">
          <!--<hooper>
            <slide>-->
              <div class="columns">
                <div class="work_img column">
                  <img src="##" alt="なんかのプロダクト">
                </div>
                <div class="work_caption column">
                  <h1 class="title">プロダクトのなまえ</h1>
                  <p>ひとこと</p>
                </div>
              </div>
          <!--  </slide>
            <slide>
              <div class="columns">
                <div class="work_img column" style="border: 2px solid #000;">
                  <img src="##" alt="なんかのプロダクト">
                </div>
                <div class="work_caption column" style="border: 2px solid #000;">
                  <h1 class="title">プロダクトのなまえ</h1>
                  <p>ひとこと</p>
                </div>
              </div>
            </slide>
          </hooper>-->
        </div>
      </div>
    </section>

    <section id="about">
      <div class="contents">
        <div class="caption">
          <h1 class="title is-1">About us</h1>
          <p class="subtitle is-4">jackについて</p>
        </div>
        <div class="details">
          <p>jackはほげほげほげほげ<br>ほげほげほげほげ<br>ほげほげほげほげほげ</p>
        </div>
      </div>
    </section>

    <section id="works">
      <div class="contents">
        <div class="caption">
          <h1 class="title is-1">Works</h1>
        </div>
        <div class="details columns">
          <div class="work column">
            <img src="##" alt="なんかのげーむ">
          </div>
          <div class="work column">
            <img src="##" alt="なんかのげーむ">
          </div>
          <div class="work column">
            <img src="##" alt="なんかのげーむ">
          </div>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="contents">
        <div class="caption">
          <h1 class="title is-1">Contact</h1>
          <ul>
            <li v-for="work in works">
              {{ work.name }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data(){
    return {}
  },
  computed: {
    works(){
      return this.$store.state.works.list
    }
  },
  async mounted(){
    this.$store.dispatch("works/fetchWorks")
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  min-width: 100vw;
  /*display: flex;
  justify-content: center;*/
  align-items: center;
  text-align: center;
}

.contents{
  width: 100%;
  padding: 50px;
}

.title{
  padding-top: 50px;
}

#home{
  height: 80vh;
  padding-top: 100px;
}

.work_img{
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#about{
  background-color: #FDBE46;
}

.details{
  padding: 50px;
}

#contact{
  background-color: #FFE0A5;
}
</style>
