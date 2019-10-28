<template>
  <nav>
    <div class="header-content">
      <div class="logo">
        <img :src="logo" />
      </div>
      <div class="engine">
        <div class="search-input">
          <img :src="searchIcon" />
          <input placeholder="Search Companies" />
        </div>OR
        <div class="smartlist">
          <button>NEW SMARTLIST</button>
        </div>
      </div>
      <div class="prospect">
        <div>
          <a>PROSPECT</a>
          <img :src="arrow" />
        </div>
        <div class="prospect-dropdown"></div>
      </div>
      <div class="alert">
        <div>
          <a>ALERT</a>
          <img :src="arrow" />
        </div>
        <div class="alert-dropdown"></div>
      </div>
      <div class="learn-dropdown">
        <div>
          <a>LEARN</a>
          <img :src="arrow" />
        </div>
        <div class="learn-dropdown"></div>
      </div>
      <div class="profile">
        <img :src="browser" />
        <img :src="group" />
        <div>
          <img :src="arrow" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        logo: require("../images/CompanyData/logo-pink.png"),
        searchIcon: require("../images/CompanyData/search.png"),
        browser: require("../images/CompanyData/default.png"),
        group: require("../images/CompanyData/group.png"),
        arrow: require("../images/CompanyData/arrow-down.png"),
      };
    }
  };
</script>

<style lang="scss" scoped>
  body {

    nav {
      display: flex;
      background: #394783;
      align-items: center;
      height: 70px;
      width: 100vw;
      color: white;
      min-width: 960px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;

        a {
          font-size: 12px;
        }
      }

      > div:not(.engine) {
        cursor: pointer;
      }

      .header-content {
        width: 1080px;
        min-width: 1080px;
      }
      .logo {
        transition: 0.5s;
      }
      .logo:hover {
        transform: rotateY(360deg);
      }

      .engine {
        font-size: 10px;

        div {
          margin: 0 10px;
        }

        .search-input {
          background: #1f2b5a;
          padding: 2px 5px;
          border-radius: 3px;

          input {
            border: none;
            background: transparent;
            color: white;
            outline: none;
            width: 250px;
          }

          input::placeholder {
            color: #efefef;
          }
        }

        .smartlist {
          button {
            background: #5d699a;
            border: none;
            border-radius: 3px;
            color: white;
            padding: 10px 25px;
            font-size: 12px;
            cursor: pointer;
          }
        }
      }
      .profile {
        > img {
          margin: 0 7px;
        }
      }
    }
  }
</style>