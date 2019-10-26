<template>
    <div class="companyDataForm fade-up">
        <div class="form-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi praesentium eaque doloremque qui voluptatem hic rerum voluptates nostrum ex ad tempore odit</p>
        </div>
        <div class="data-form">
            <div class="company">
                <label>Company Name</label>
                <input class="form-input" placeholder="e.g Your Company Name">
            </div>
            <div class="company">
                <label>Company Spend</label>
                <input class="form-input" placeholder="e.g $150,000">
            </div>
            <div class="company">
                <label>Company Spend Ability</label>
                <input class="form-input" placeholder="e.g $150,000 - $330,000">
            </div>
            <div class="company">
                <label>Notes</label>
                <textarea class="form-textarea" placeholder="e.g Good Tech Company"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
   .companyDataForm {
    width: 650px;
    margin: 65px 0 0 30px;
    height: 650px;
    padding: 0px 25px;
    box-sizing: border-box;
    box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.15);
    border-radius: 4px;

    .form-text {
        line-height: 25px;
    }

    .data-form {

        label {
            display: block;
            margin-bottom:10px;
            color: #B1B1B1;
        }

        input {
            width: 340px;
            height: 45px;
        }

        textarea {
            resize: none;
            width: 100%;
            height: 170px;
        }

        .company {
            margin: 35px 0;
        }

        input, textarea {
            box-shadow: 0px 0px 10px 4px #F8F8F8;
            border: 1px solid #CED2E0;
            border-radius: 5px;
            color: #D1D5E2;
            padding: 5px 10px;
            box-sizing: border-box;
        }

        input::placeholder, textarea::placeholder {
            color: #D1D5E2;
        }
    }
} 
</style>