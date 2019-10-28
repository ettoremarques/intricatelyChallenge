import CompanyPageContent from "../components/CompanyPageContent.vue";
import { mount } from "@vue/test-utils";

test('CompanyPageContent', () => {
    const wrapper = mount(CompanyPageContent)
    expect(wrapper.findAll('.activity').length).toEqual(2);
})