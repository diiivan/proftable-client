<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";
</script>

<template>
  <MainHeader />
  <RouterLink to="/">Go main</RouterLink>
  <RouterLink to="/login">Go login</RouterLink>
  <RouterView />
  <MainFooter />
</template>
