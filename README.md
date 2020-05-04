## 微信小程序纵向双列表格ctable

### WHY

做小程序展示数据的时候想要做一个纵向的表格，于是做了这个小组件以供重复使用。

### 引入组件

```json
"usingComponents": {
  "c-table": "@components/ctable/ctable"
}
```

### 基本使用

```html
<c-table left="{{ 左列数据 }}" right="{{ 右列数据 }}" />
```

### 效果演示

![](https://raw.githubusercontent.com/lchkid/wx-miniprogram-ctable/master/screenshot/screenshot.png)

### 自定义属性

|   参数    |       说明       |  类型   | 默认值 |
| :-------: | :--------------: | :-----: | :----: |
| bordered  |   是否显示边框   | Boolean |  true  |
|  striped  | 是否显示条纹背景 | Boolean |  true  |
| leftflex  |   左列占宽比例   | Number  |   1    |
| rightflex |   右列占宽比例   | Number  |   2    |
| leftfont  |   左列字体加粗   | Boolean |  true  |
| rightfont |   右列字体加粗   | Boolean | false  |
|   left    |     左列数据     |  Array  |   空   |
|   right   |     右列数据     |  Array  |   空   |


