<template>
    <div class="row">
        <div v-for="c in columnList" :key="c.id" class="col-4">
            <img :src="c.avatar" :alt="c.title">
            <h5>{{ c.title }}</h5>
            <p> {{ c.description }}</p>
            <a href="#">进入专栏</a>
        </div>
    </div>
    
</template>
<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue' 

import defaultImage from '../assets/logo.svg'
export interface ColumnProps{
    id:number;
    title:string;
    avatar:string;
    description:string;

}
export default defineComponent({
  name: 'ColumnList',
  props:{
    list:{
        type :Array as PropType<ColumnProps[]>,
        required:true 
    }
  },
  setup(props){
    const columnList=computed(()=>{
        return props.list.map(c=>{
            if (!c.avatar){
                c.avatar=defaultImage
            }
            return c;
        }) 
    })
    return {columnList}
  }
})
 </script>