import VueRouter from 'vue-router';
import Vue from 'vue';

import CompanyData from '../Pages/CompanyData.vue'
import CompanyPage from '../Pages/CompanyPage.vue'

Vue.use(VueRouter);

export default new VueRouter( {
    routes:[
        {
            path: '/company_page',
            name: "Company Page",
            component: CompanyPage
        },
        {
            path: '/company_data',
            name: "Company Data",
            component: CompanyData
        }
    ]
})
