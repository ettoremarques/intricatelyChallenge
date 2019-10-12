<template>
  <nav>
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
  </nav>
</template>

<script src="../JavaScript/Header.js"></script>
<style lang="css" scoped>
@import url("../styles/Header.css");
</style>