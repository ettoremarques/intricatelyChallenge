<template>
  <div class="companyList">
    <div class="adress">
        <a> {{ pageAdress }} / {{ currentAdress }} </a>
    </div>
    <div class="list">
      <div 
          v-for="(item, index) in this.CompanyListDataArray" 
          :key="index"
          :class="{selected: selected == index || currentAdress == item}"
          @click="selected = index">

        <a>{{ item }}</a>
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
      currentAdress: this.Adress.current,
      selected: undefined
    };
  }
};
</script>

<style lang="css">
    @import url("../styles/CompanyList.css");
</style>