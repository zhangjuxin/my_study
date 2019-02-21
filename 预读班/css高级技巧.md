# CSS高级使用技巧



### hint

1.  移除空的css规则   例如：a{}
2.  正确的使用显示属性，例如：display：inline 不要和width，height，float，margin，padding同时使用，display：inline-block不要和float同时使用
3.  避免使用过多的浮动
4.  避免使用过多的字号
5.  避免使用过多的web字体
6.  避免使用ID作为样式选择器
7.  标题元素只定义一次
8.  使用width：100%的时候要小心
9.  属性值为0时不要写单位
10.  避免使用看起来像正则表达式的CSS选择器  
11.  遵守盒子模型

### icon

https://cssicon.space/#/

### BFC 

#### 概念：全称是block format context ，块级格式上下文

#### bfc的作用：

```html
 bfc区域不会与float box 重叠
 两个BFC之间不重叠
例子：
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        body {
            width: 300px;
            position: relative;
        }

        .aside {
            width: 100px;
            height: 150px;
            float: left;
            background: #666666;
        }

        .main {
            height: 200px;
            background: #fcc;
            overflow: hidden;
            /* 
             overflow: hidden;
            触发bfc布局 
            bfc区域不会与float box 重叠
            */
        }
    </style>
</head>

<body>
    <div class="aside"></div>
    <div class="main"></div>
    <!-- 
        根据bfc布局规则：
        1.每个元素的margin box的左边，与包含块border box的左边相接处，即使存在浮动也是如此
        2.bfc区域不会与float box 重叠
        3.两个BFC之间不重叠
     -->
</body>

</html>
```

```html
***计算bfc高度的时候，浮动元素也参与计算***
例子：
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .par {
            border: 5px solid #fcc;
            /* 下面几种方式都会生成bfc */
            overflow: hidden;
            /* display: inline-block; */
            /* position: absolute; */
            /* float: left; */
        }

        .child {
            border: 5px solid #f66;
            width: 100px;
            height: 100px;
            float: left;
        }

        /* 
        ***计算bfc高度的时候，浮动元素也参与计算***
        上述代码因为浮动，会出现par高度塌陷的情况，
        为了达到清除内部浮动，我们可以触发par生成bfc,那么par在计算高度的时候，par内部的浮动元素child也会参与计算
        所以我们给
        */
    </style>
</head>

<body>
    <div class="par">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>

</html>
```

```HTML
属于同一个bfc的两个相邻box的margin会发生重叠
例子：
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<style>
    p {
        color: #f55;
        background: #fcc;
        width: 200px;
        line-height: 100px;
        margin: 100px;
    }
</style>

<body>
    <div class="warp">
        <p>haha</p>
        <p>hehe</p>
    </div>
    <!-- 
        两个p标签都有margin，但是实际上两个p之间只有100px，因为重叠的margin只取最大的,
        box垂直方向的距离由margin决定，属于同一个bfc的两个相邻box的margin会发生重叠.
     -->
    <!-- -------------------------------------------------------------------------------------------------------------- -->
    <!-- 下面的第二个p和第一个p不在一个bfc内，就不会发生margin的重叠了 -->
    <style>
        .warp {
            overflow: hidden;
        }
    </style>
    <p>haha</p>
    <div class="warp">
        <p>hehe</p>
    </div>
    <!-- 
        根元素
     -->
</body>

</html>
```

#### bfc 的触发条件

1. 根元素
2. float属性不为 none
3. position为absolute或者fixed
4. display为inlin-block、table-cell，table-caption,flex,inlin-flex
5. overflow不为visible

其实以上几个例子都体现了，BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外边的元素，反之也是如此。

IFC：直译为“内联格式化上下文”。IFC的线框高度由其包含行内元素中最高的实际高度计算而来，（不受竖直方向的padding，margin影响）



