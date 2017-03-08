background总结
====
background共有5个属性
color,image,attachment,repeat,size

color和image就不多说了，`background-attachment`指的是背景是否岁滚动条滚动

background-attachment:scroll||fixed
使用fixed时一般加在body或者html元素上，其他元素上不生效

###background-position
background-position:(0,0)||(0%,0%)||(left,top),默认值是这些

新增属性：

+ background-origin:用于指定绘制背景图片的起点
  正常情况下，background-position绘制原点在00处，background-origin则可以改变这个位置（只决定起点）
  background-origin：padding-box||border-box||content-box
+ background-clip:制定背景图片显示范围，同上三个值
  这个属性如果取content-box时，只会在content里面绘制
+ background-size:制定背景图片尺寸
  注意这个属性哇！默认auto，就是有多大绘多大，不伸缩
  background-size:100%; //这样设置的话，高度是自适应的
  background-size:contain||cover  contain和宽度100%，高度自适应是一个效果
  background-size:cover和background-position:center配合可以平铺剧中
+ background-break:指定内联元素的背景图片进行平铺时的循环方式

****

渐变属性
 配合`background-image`使用
 background-image:linear-gradient(top,bottom,left,right|deg|red 20% ,blue 20%,yellow,yellow)


