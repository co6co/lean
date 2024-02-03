import {defineComponent} from 'vue'
import '../assets/style.css'

//样式  污染
/*
https://www.jianshu.com/p/be1778a76763
<template>
    <div class="example" data-v-5558831a>scoped测试案例</div>
</template>
*/
// 解决方案
//1. 解决方案就是css module，
//1.1 vue scoped
//1.2 css module
/**
 * vue.config.js
 * module.exports = {
    css: {
        requireModuleExtension: true
    }
    }

    style.css 改名 test.module.scss:

    npm install typescript-plugin-css-modules --save-dev
    sconfig.json中，在compilerOptions属性下添加:
    "plugins": [{"name": "typescript-plugin-css-modules"}]

    .vscode文件夹，添加settings.json文件:
    {
    "typescript.tsdk": "node_modules/typescript/lib",
    "typescript.enablePromptUseWorkspaceTsdk": true
    }
 */
export default defineComponent({
    setup(){
        return ()=>{
            return <div class="styleTest"></div>
        }
    }
})


