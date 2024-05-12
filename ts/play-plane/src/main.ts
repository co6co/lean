import { createApp } from './runtime-canvas'
import { getRootContainer } from './game'
//pixijs
//canvas randerer

import App from './App.vue'

const app = createApp(App)
app.mount(getRootContainer())
