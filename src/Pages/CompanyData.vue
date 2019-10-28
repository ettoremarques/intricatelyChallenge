<template>
    <div class="CompanyData">
        <CompanyList 
            :CompanyListData="CompanyListPaths"
            :Adress="HomePage" />
        <CompanyDataForm />
    </div>
</template>

<script>
import CompanyList from '../components/CompanyList.vue';
import CompanyDataForm from '../components/CompanyDataForm.vue';

export default {
    components: {
        CompanyList: CompanyList,
        CompanyDataForm: CompanyDataForm
    },
    computed: {
        CompanyListPaths() {
            return this.$store.getters.adressList;
        }, 
        HomePage() {
            return this.$store.getters.homePage;
        } 
    }
}
</script>

<style lang="scss" scoped>
    .CompanyData {
        display: flex;
        margin: 0;
        padding: 0;
    }
</style>