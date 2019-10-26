<template>
  <div class="background">
    <div class="modal">
      <div class="modal-head">
        <h5>ADDITIONAL NOTES</h5>
        <h4 class="close" @click="close">&times;</h4>
      </div>
      <textarea class="additionalNotes" placeholder="e.g Good Tech Company"></textarea>
      <button> SAVE </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
      close() {
        this.$emit('close');
      },
    }
};
</script>

<style lang="scss" scoped>
.background {
  height: 93vh;
  width: 100vw;
  position: absolute;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.1);
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -41vw;
  top: -7vh;

  .modal {
    width: 550px;
    height: 300px;
    display: flex;
    flex-direction: column;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    
    border: 1px solid #D4D9E3;
    
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
      height: 250px;
      border: 1px solid #D4D9E3;
      margin: 0 auto;
      border-radius: 5px;
      padding: 15px;
      box-sizing: border-box;
    }

    button {
      width: 100px;
      height: 50px;
      border-radius: 4px;
      background-color: #5D699A;
      border: none;
      color: #F1F2F6  ;
      font-weight: bold;
      margin: 25px 48px 25px auto;
    }
  }
}
</style>