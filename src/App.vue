<template>
    <div id="app">
        <Header/>
        <div class="page">
            <div class="page-content">
                <CompanyList 
                :CompanyListData="CompanyListData" 
                :Adress="Adress"/>

                <router-view />
            </div>
        </div>
    </div>
</template>

<script>

import Header from "./components/Header.vue";
import CompanyList from "./components/CompanyList.vue";
import CompanyDataForm from "./components/CompanyDataForm.vue";
import VueRouter from 'vue-router';

export default {
    components: {
        Header,
        CompanyList,
        CompanyDataForm
    },
    name: 'CompanyDataForm',
    data () {
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
        }
    }
}
</script>

<style lang="css">
    @import url('./styles/main.css');
</style>