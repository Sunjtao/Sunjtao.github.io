# TS声明文件的书写
## 全局函数声明文件
``` javascript
// globalLib.js
function globalLib(options) {
    console.log(options)
}

globalLib.version = '1.0.0'
globalLib.doSomething = function() {
    console.log("gglobalLib do something");
}
```
``` typescript
// global-lib.d.ts
declare function globalLib(options: globalLib.Options): void

declare namespace globalLib {
  const version: string;
  function doSomething(): void
  interface Options {
    [key: string]: any
  }
}
```
- 命名空间为函数增加了属性
- interface 可以放到命名空间外面，但是对全局暴露
``` javascript
globalLib({x: 1})
globalLib.doSomething()
```

## 模块
``` javascript
const version = '1.0.0'

function doSomething() {
  console.log('moduleLib do something')
}

function moduleLib(options) {
  console.log(options)
}
moduleLib.version = version;
moduleLib.doSomething = doSomething

module.exports = moduleLib
```
``` typescript
// module-lib.d.ts
declare function moduleLib(options: Options): void

interface Options {
  [key: string]: any
}

declare namespace moduleLib {
  const version: string
  function doSomething(): void
}
export = moduleLib
```
## umd库
``` typescript
declare namespace umdLib {
  const version: string
  function doSomething(): void
}
export as namespace umdLib
export = umdLib
```
以上都是通过相对和绝对路径引入 './index.js'，这个时候需要声明文件
以下是模块的引入
## 模块插件
``` javascript
import m from 'moment'
declare module 'moment' {
  export function myFunction(): void
}
m.myFunction = () => {}

declare global {
  namespace globalLib{
    function doAnything(): void
  }
}
```
## 模块之间的依赖
``` typescript
/// <reference types="sizzle">  模块的引入，寻找模块types的文件入口，package.json 中指明
/// <reference path="xxx.d.ts"> 路径
```

## 参考资料
- [英文ts官网](https://www.typescriptlang.org/docs/handbook/modules.html)
- [中文ts官网](https://www.tslang.cn/docs/handbook/modules.html)
- [为 Vue3 🔥 学点 TypeScript, 什么是声明文件(declare)? [🦕全局声明篇]](https://segmentfault.com/a/1190000020995989?utm_source=tag-newest)