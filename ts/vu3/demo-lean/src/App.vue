
<template>
  <div class="container" id="app">
    <Column-list :list="list"></Column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'dddddddd', 
    description: 'asdf',
    avatar: ''
  }
]

export default defineComponent({
  name: 'app',
  components: {
    ColumnList
  },
  setup() {
    return {
      list: testData
    }
  }
})
</script>

<style scoped> 

</style>
