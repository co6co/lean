import { createRenderer } from 'vue'

const renderer = createRenderer({
  createElement(type) {
    console.info(type)
  },
  insert(el, parent) {
    if (el) parent.addChild(el)
  },
  patchPro(el, key, preValue, nexeValue) {
    el[key] = nexeValue
  }
})

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent)
}
