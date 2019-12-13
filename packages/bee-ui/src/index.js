/**
 * 组件库
 */
import '../assets/less/main.scss'
const componentsContext = require.context('../packages/', true, /^\.[/\\](?!_)[^/\\?#]+[/\\]index\.js$/)

function componentsContextList (context) {
  return context.keys().map(componentPath => {
    return context(componentPath).default || context(componentPath)
  })
}

const install = function (Vue) {
  if (install.installed) return
  const components = componentsContextList(componentsContext)
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
