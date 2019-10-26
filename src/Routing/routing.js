import VueRouter from 'vue-router';
import Vue from 'vue';

import CompanyDataForm from '../components/CompanyDataForm.vue'
import CompanyPageContent from '../components/CompanyPageContent.vue'

Vue.use(VueRouter);

export default new VueRouter( {
    routes:[
        {
            path: '/company_page',
            name: "Company Page",
            component: CompanyPageContent
        },
        {
            path: '/company_data',
            name: "Company Data",
            component: CompanyDataForm
        },
        {
            path: "/",
            name: "Redirecting to Company Page",
            component: CompanyPageContent
        }
    ]
})
