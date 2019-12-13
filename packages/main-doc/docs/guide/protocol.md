# 跳转协议

## 小程序首页地址

如果你配置的是小程序首页地址，需要加`switch:`前缀，这样会跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面，例如：

小程序首页购物车：`/sub/main/pages/cart/root/index` 应该配置为：`switch:/sub/main/pages/cart/root/index`


## 搭建协议

搭建系统支持配置特殊跳转协议来完成一些动作，下面是目前已经支持的搭建协议。

::: tip
协议中 “:” 开头的英文单词为要替换的参数
:::

### 打开弹窗
- 协议

bld://dialog/open/:id
- 参数

id 弹窗组件的实例ID

- 用法
```
bld://dialog/open/dialog$1
```
表示要打开弹窗id为dialog$1的弹窗

### 关闭弹窗
- 协议

bld://dialog/close/:id
- 参数

id 弹窗组件的实例ID

- 用法
```
bld://dialog/close/dialog$1
```
表示要关闭弹窗id为dialog$1的弹窗

### 换一换
- 协议

bld://load/change/:id
- 参数

id 组件的实例ID

- 用法
```
bld://load/change/goods-list$1
```
表示对实例id为goods-list$1的组件执行换一换
::: tip
目前已经支持换一换的组件有
- GoodsList 普通商品
- GoodsListWithImages 多图商品
- DacuGoodsList 大促商品卡
- SwiperCardPut 侧滑商品
:::
