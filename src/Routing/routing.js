import VueRouter from 'vue-router';
import Vue from 'vue';

import CompanyDataForm from '../components/CompanyDataForm.vue'

Vue.use(VueRouter);

export default new VueRouter( {
    routes:[
        {
            path: '/company_page',
            name: "Company Page"
        },
        {
            path: '/company_data',
            name: "Company Data",
            component: CompanyDataForm
        }
    ]
})
