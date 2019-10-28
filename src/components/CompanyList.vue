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

<style lang="scss" scoped>
   .companyList {
    display: flex;
    flex-direction: column;
    margin: 25px 0 0 100px;
    width: 200px;
    
    a {
        color: #7C86AE;
        font-size: 12px;
    }

    .adress {
        a {
            font-weight: bold;
        }
    }
    
    .list {
        border-radius: 3px;
        margin-top: 20px;

        div {
            padding: 15px 25px;
            border: 1px solid #d4d9e3;
            background: #ffffff;
            cursor: pointer;
        
            a {
                font-weight: bolder;
                text-decoration: none;
            }
        }

        div:hover {
            background: #FAFBFC;
        }

        div.selected {
            border-left: 2px solid #344279;

            & a {
              color: #5C5C5D;
            }
        }
    }
}
</style>