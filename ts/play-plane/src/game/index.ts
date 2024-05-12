import { Application } from 'pixi.js'

const game = new Application()

;(async () => {
  await game.init({
    width: 960,
    height: 1080,
    background: '#1099bb',
    resizeTo: window
  })
  document.body.appendChild(game.canvas)
})()

export function getRootContainer() {
  return game.stage
}
