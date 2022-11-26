<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          Андерграундный Порядок
        </div>
        <nav class="header__nav">
          <router-link :to="{name: 'levels'}" class="nav__link">Уровни</router-link>
        </nav>
        <div class="user-account">
          <div class="account-img"></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>
.header {
  border-bottom: .1px solid rgba(255, 255, 255, .1);
}

.header__inner {
  display: flex;
  align-items: center;
}

.header__logo {
  font-family: Franklin;
  font-size: 28px;
  font-weight: 400;
  color: #fff;
  margin-right: 60px;
}

.header__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__link {
  font-size: 18px;
  font-family: Candara;
  font-weight: 400;
  color: #FFFFFF;
  opacity: .5;
  border-bottom: 3px solid transparent;
  padding-top: 3px;
  line-height: 65px;
}

.nav__link:first-child {
  margin-right: 30px;
}

.nav__link:hover {
  color: #FFCC00;
  opacity: 1;
}

.nav__link.active {
  border-color:#FFCC00;
  color: #fff;
  opacity: 1;
}

.user-account {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: auto;
}

</style>