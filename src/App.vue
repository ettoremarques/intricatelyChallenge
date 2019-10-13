<template>
    <div id="app">
        <Header/>
        <div class="page">
            <div class="page-content">
                <CompanyList 
                :CompanyListData="CompanyListData" 
                :Adress="Adress"/>
            </div>
        </div>
    </div>
</template>

<script>

import Header from "./components/Header.vue"
import CompanyList from "./components/CompanyList.vue"

export default {
    components: {
        Header,
        CompanyList
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