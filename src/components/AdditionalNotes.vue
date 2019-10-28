<template>
  <div class="background">
    <div class="modal">
      <div class="modal-head">
        <h5>ADDITIONAL NOTES</h5>
        <h4 class="close" @click="close">&times;</h4>
      </div>
      <textarea
        class="additionalNotes"
        placeholder="e.g Good Tech Company"
        v-model="AdditionalNotes"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$store.state.AdditionalNotes.note = this.AdditionalNotes;
      this.$emit("close");
    }
  },
  data() {
    return {
      AdditionalNotes: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.background {
  z-index: 10;
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);

  .modal {
    width: 550px;
    height: 300px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);

    border: 1px solid #d4d9e3;

    .modal-head {
      display: flex;
      h5 {
        margin-left: 48px;
      }

      .close {
        margin-left: auto;
        margin-right: 48px;
        cursor: pointer;
      }
    }

    textarea {
      resize: none;

      width: 450px;
      height: 175px;
      border: 1px solid #d4d9e3;
      margin: 0 auto;
      border-radius: 5px;
      padding: 15px;
      box-sizing: border-box;
    }

    button {
      width: 100px;
      height: 50px;
      border-radius: 4px;
      background-color: #5d699a;
      border: none;
      color: #f1f2f6;
      font-weight: bold;
      margin: 25px 48px 25px auto;
    }
  }
}
</style>