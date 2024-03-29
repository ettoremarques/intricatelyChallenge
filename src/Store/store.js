import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        companyListData: [
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
        },
        AdditionalNotes: {
            note: ''
        } 
    },
    getters: {
        adressList: state => {
            return state.companyListData;
        },
        homePage: state => {
            return state.Adress;
        },
        additionalNotesModal: state => {
            return state.AdditionalNotes;
        }
    }
})

export default store;