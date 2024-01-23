import { defineComponent, reactive, ref } from 'vue'
//const img ="";// require('@/assets/logo.svg') //eslint-disable-line
import img from './assets/logo.svg'
export default defineComponent({
  setup() {
    const state = reactive({
      name: 'co7co'
    })
    const numberRef = ref(0)
    setInterval(() => {
      state.name += '1'
      numberRef.value += 1
    }, 1000)

    return () => {
      const number = numberRef.value
      return (
        <div id="app">
          <img src={img} alt="" />
          <p>{state.name + number}</p>
          <a href='/index-vue.html'>vue 页面</a>
        </div>
      )
    }
  }
})
