<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
//import {add} from '../../utils'
import {add} from '@manage/utils'
console.info(add(1,2))
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
@import './assets/style/index.less'
@import '@manage/utils/style/index.less' 
</style>
