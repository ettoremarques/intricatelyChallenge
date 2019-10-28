<template>
  <div id="app">
    <Header />
    <div class="page">
      <div class="page-content">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CompanyPage from "./Pages/CompanyPage.vue";
import AdditionalNotes from "./components/AdditionalNotes.vue";
import Footer from "./components/Footer.vue";
import VueRouter from "vue-router";

export default {
  components: {
    Header,
    Footer,
    AdditionalNotes
  },
  name: "CompanyDataForm",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import url(http://fonts.googleapis.com/css?family=Roboto);

body {
  background-color: #ffffff;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Roboto, sans-serif;
  overflow: hidden;
}

.page {
  width: 100vw;
  min-width: 1080px;
  display: flex;
  justify-content: center;

  .page-content {
    display: flex;
    flex-direction: row;
    width: 1080px;
    min-height: 76vh;
  }
}

.fade-up {
  opacity: 0;
  animation: fade-up 0.8s forwards;
}

@keyframes fade-up {
  0% {
    opacity: 0;
    transform: translateY(32px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>