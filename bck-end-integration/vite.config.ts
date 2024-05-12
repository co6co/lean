import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    manifest:true //在dist 生成 manifest.json 后端根据该文件装载 ，将 dist  考到 resource 相关目录
  } 
})
