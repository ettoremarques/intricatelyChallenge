<template>
    <div id="app">
        <Header/>
        <div class="page">
            <div class="page-content">
                <CompanyList 
                :CompanyListData="CompanyListData" 
                :Adress="Adress"/>

                <CompanyDataForm />
            </div>
        </div>
    </div>
</template>

<script>

import Header from "./components/Header.vue"
import CompanyList from "./components/CompanyList.vue"
import CompanyDataForm from "./components/CompanyDataForm.vue"

export default {
    components: {
        Header,
        CompanyList,
        CompanyDataForm
    },
    data () {
        return {
            CompanyListData: ["COMPANY DATA", "COMPANY TABLE", "COMPANY PAGE"],
            Adress: {
                page: "HOME",
                current: "COMPANY DATA"
            }
        }
    }
}
</script>

<style lang="css">
    @import url('./styles/main.css');
</style>