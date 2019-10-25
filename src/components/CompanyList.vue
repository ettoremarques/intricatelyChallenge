<template>
  <div class="companyList">
    <div class="adress">
        <a> {{ pageAdress }} / {{ $route.path.replace('_', ' ').replace('/', '').toUpperCase() }} </a>
    </div>
    <div class="list">
      <div 
          v-for="(item, index) in this.CompanyListDataArray" 
          :key="index"
          :class="{selected: '/' + item.url == $route.path}">

          <a :href="'#/' + item.url">{{ item.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    CompanyListData: Array,
    Adress: Object
  },
  data() {
    return {
      CompanyListDataArray: this.CompanyListData,
      pageAdress: this.Adress.page,
      selected: undefined
    };
  }
};
</script>

<style lang="css">
    @import url("../styles/CompanyList.css");
</style>