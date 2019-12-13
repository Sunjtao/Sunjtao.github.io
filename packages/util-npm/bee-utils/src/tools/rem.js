/**
 * 基于iphone 6 做rem适配
 */
const BASE_CLIENT_WIDTH = 375
const BASE_VALUE = 100

let docEl = document.documentElement
let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'

export default function Rem () {
  function setFontSize () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    docEl.style.fontSize = BASE_VALUE * (clientWidth / BASE_CLIENT_WIDTH) + 'px'
  }

  function bindRem () {
    window.addEventListener(resizeEvt, setFontSize, false)
    setFontSize()
  }

  function unBindRem () {
    window.removeEventListener(resizeEvt, setFontSize, false)
    docEl.style.fontSize = BASE_VALUE + 'px'
  }
}
