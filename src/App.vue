<template>
  <div id="app">
    <Header />
    <div class="page">
      <div class="page-content">
        <CompanyList :CompanyListData="CompanyListData" :Adress="Adress" />

        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import CompanyList from "./components/CompanyList.vue";
import CompanyDataForm from "./components/CompanyDataForm.vue";
import VueRouter from "vue-router";

export default {
  components: {
    Header,
    CompanyList,
    CompanyDataForm
  },
  name: "CompanyDataForm",
  data() {
    return {
      CompanyListData: [
        {
          name: "COMPANY DATA",
          url: "company_data"
        },
        {
          name: "COMPANY TABLE",
          url: "company_table"
        },
        {
          name: "COMPANY PAGE",
          url: "company_page"
        }
      ],
      Adress: {
        page: "HOME"
      }
    };
  }
};
</script>

<style lang="scss">
    @import url(http://fonts.googleapis.com/css?family=Roboto);

    body {
    background-color: #ffffff;
    }
    #app {
    font-family: Roboto, sans-serif;
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