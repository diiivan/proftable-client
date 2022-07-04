<template>
  <div id="app">
    test
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Имя пользователя" />
      <input v-model="password" placeholder="Пароль" />
      <input type="submit" value="Войти" />
    </form>
  </div>
</template>
<script lang="ts">
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>
