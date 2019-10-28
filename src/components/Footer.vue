<template>
  <div class="footer">
    <div class="footerContent">
      <div class="left">
        <div class="links">
          <a>Pricing</a> |
          <a>Blog</a> |
          <a>Webinars</a> |
          <a>Events</a> |
          <a>Help Center</a>
        </div>
        <div class="copright">
          <p>&copy; Copright 2017, Intricately, Inc. All Rights Reserved</p>
        </div>
      </div>
      <div class="right">
        <div class="links">
          <a>Terms and Conditions</a> |
          <a>Privacy Policy</a>
        </div>
        <div class="socialNewtwork">
          <img :src="require('../images/CompanyData/fill-118.png')" />
          <img :src="require('../images/CompanyData/fill-92.png')" />
          <img :src="require('../images/CompanyData/fill-93.png')" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  height: 113px;
  width: 100vw;
  background-color: #f3f3f3;
  margin-top: 50px;
  justify-content: center;
  align-items: center;

  .footerContent {
    display: flex;
    width: 50%;
    margin-left: 115px;
    align-items: center;    

    * {
      font-size: 14px;
    }

    .left {
      display: flex;
      flex-direction: column;

      .copright {
          margin-top: 15px;

          p {
              font-size: 13px;
              color: #B7B7B7;
              margin: 0;
          }
      }
    }

    .right {
      margin-left: auto;
      display: flex;
      flex-direction: column;

        .socialNewtwork {
            margin-top: 15px;
            margin-left: auto;
            img {
                margin: 0 5px;
            }
        }
    }
  }
}

.links {
  color: #5d699a;
}
</style>