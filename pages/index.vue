<template>
  <div class="container">
    <div class="show contents">
      <div class="show_wrapper">
        <p>exapmle product</p>
      </div>
    </div>
    <div class="about contents">
      <div class="about_wrapper">
        <div class="title">
          <h1>About us</h1>
          <p>jackについて</p>
        </div>
        <div class="details">
          <p>jackはほげほげほげほげ<br>ほげほげほげほげ<br>ほげほげほげほげほげ</p>
        </div>
      </div>
    </div>
    <div class="works contents">
      <div class="works_wrapper">
        <div class="title">
          <h1>Works</h1>
        </div>
        <div class="details colums">
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
    </div>
    <div class="contact contents">
      <div class="contact_wrapper">
        <div class="title">
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import Contact from '~/components/contact.vue'

export default {
  components: {
    //Contact
  }
}
</script>

<style>
h1{
  font-weight: bold;
}

.container {
  margin: 0;
  min-height: 100vh;
  min-width: 100vw;
  /*display: flex;
  justify-content: center;*/
  align-items: center;
  text-align: center;
}

.contents{
  width: 100%;
}

.title{
  padding-top: 50px;
}

.show_wrapper{
  height: 80vh;
}

.about{
  background-color: #FDBE46;
}

.contact{
  background-color: #FFE0A5;
}
</style>
