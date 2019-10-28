<template>
    <div class="companyPage">
        
        <CompanyList 
            :CompanyListData="CompanyListPaths"
            :Adress="HomePage" />
        <companyPageContent />
    
    </div>
</template>

<script>
import CompanyList from '../components/CompanyList.vue';
import CompanyPageContent from '../components/CompanyPageContent.vue';

export default {
    components: {
        CompanyList: CompanyList,
        CompanyPageContent: CompanyPageContent
    },
    data() {
        return {}
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
.companyPage {
    display: flex;
    padding: 0;
    margin: 0;
}
</style>