<template>
  <div class="companyDataForm fade-up">
    <div class="form-text">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi praesentium eaque doloremque qui voluptatem hic rerum voluptates nostrum ex ad tempore odit</p>
    </div>
    <div class="data-form">
      <div class="company">
        <label>Company Name</label>
        <input
          class="form-input"
          v-model="companyName"
          :class="{ invalidInput: companyName  ? companyName.split('').length < 4 : '' }"
          placeholder="e.g Your Company Name"
        />
        <span
          class="invalidInput"
          v-show=" companyName ? (companyName.split('').length < 4 ? true : false) : ''"
        >Invalid Input</span>
      </div>
      <div class="company">
        <label>Company Spend</label>
        <input class="form-input" 
            v-model="companySpend" placeholder="e.g $150,000" 
            :class="{ invalidInput: companySpend < 0 }"
            @blur=" formatCompanySpend(companySpend)"
            />
        <span
          class="invalidInput"
          v-show=" companySpend ? (companySpend < 0 ? true : false) : '' "
        >Invalid Input</span>
      </div>
      <div class="company">
        <label>Company Spend Ability</label>
        <input class="form-input" v-model="companySpendability" 
        @blur="compareAndFormatSpendValues(companySpendability)" 
        :class="{invalidInput: !companySpendabilityInvalid}"
        placeholder="e.g $150,000 - $330,000" />
        <span
          class="invalidInput"
          v-show="!companySpendabilityInvalid"
        >Invalid Input</span>
      </div>
      <div class="company">
        <label>Notes</label>
        <textarea class="form-textarea" 
            placeholder="e.g Good Tech Company" 
            @click="showModal"
            v-model="AdditionalNotes" ></textarea>
      </div>
    </div>
    <AdditionalNotes v-show="isModalVisible" @close="closeModal"/>
  </div>
</template>

<script>
import AdditionalNotes from "../components/AdditionalNotes.vue";

export default {
  components: {
    AdditionalNotes
  },
  data() {
    return {
      isModalVisible: false,
      companyName: undefined,
      companySpend: undefined,
      companySpendabilityInvalid: true,
      companySpendability: undefined,
      AdditionalNotes: this.$store.getters.additionalNotesModal.note
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    formatCompanySpend(spend) {
        if (spend) {
            if (spend.split('').indexOf('.') === -1) {
                let formater = spend.split(' ');
                formater.push('.00');
                this.companySpend = formater.join('');
            }
        }
    },
    compareAndFormatSpendValues(spend) {
        if (spend) {
            if (spend.split('').indexOf('-')) {
                
                let values = spend.split('-');
                let minValue = values[0];
                let maxValue = values[1];

                if (minValue > maxValue ) {
                    return this.companySpendabilityInvalid = false;
                }

                if (minValue.split('').indexOf('.') === -1) {
                    let formater = minValue.split(' ');
                    formater.push('.00');
                    minValue = formater.join('');
                    values[0] = minValue;
                }

                if (maxValue.split('').indexOf('.') === -1) {
                    let formater = maxValue.split(' ');
                    formater.push('.00');
                    maxValue = formater.join('');
                    values[1] = maxValue;
                }
                
                this.companySpendability = values.join('-');
                this.companySpendabilityInvalid = true;
            }
        }
    }
  },
};
</script>

<style lang="scss" scoped>
.companyDataForm {
  width: 650px;
  margin: 65px 0 0 30px;
  height: 650px;
  padding: 0px 25px;
  box-sizing: border-box;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  .form-text {
    line-height: 25px;
  }

  .data-form {
    display: flex;
    flex-direction: column;

    label {
      display: block;
      margin-bottom: 10px;
      color: #b1b1b1;

      &.invalidInput {
        color: #ff6161 !important;
      }
    }

    input {
      width: 340px;
      height: 45px;

      &.invalidInput {
        border: 2px solid #ff6161;
        outline-color: #ff6161;
      }
    }

    span.invalidInput {
        color: #ff6161;
    }

    textarea {
      resize: none;
      width: 100%;
      height: 170px;
    }

    .company {
      margin: 10px 0;
      margin: 10px 0;
      display: flex;
      flex-direction: column;
    }

    input,
    textarea {
      box-shadow: 0px 0px 10px 4px #f8f8f8;
      border: 1px solid #ced2e0;
      border-radius: 5px;
      color: #d1d5e2;
      padding: 5px 10px;
      box-sizing: border-box;
    }

    input::placeholder,
    textarea::placeholder {
      color: #d1d5e2;
    }

    .showModal {
      margin: 10px 0 0 auto;
      width: 150px;
      height: 30px;
      border-radius: 4px;
      background-color: #5d699a;
      border: none;
      color: #f1f2f6;
    }
  }
}
</style>