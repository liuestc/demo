对象
===

###1. 语法 
  * 字面量形式

     `obj={
        key:value
     }`


 * 构造函数形式

     `var obj=new Object();
      obj.key=value
     `

###2. 类型
  6种基本类型：`string,number,undefined,null,bolean,object`
  注意 因为`typeof(null)`会返回object,typeof除了返回上述几个类型外还会返回`function`

###3. 内置对象
  内置对象为object的子对象，看起来和上述的其他基本类型一样的，多了好几个
  `String,Number,Object,Boolean,Array,Function,Date`
  其实，基本类型上是没有方法的，像 charAt等等。之所以能调用这些方法是因为引擎会帮我们自动转化

###4. 对象的复制

```
    function antherFunction(){...}
    var anotherObject={
        c:true
    }
    var anotherArray=[];
    var myObject={
        a:1,
        b:anotherObject,  //引用，不是副本
        c:anotherArray, //也是一个引用
        d:antherFunction
    }
```

  复制分浅复制和深复制
  浅复制指只复制第一层属性，深复制则要递归复制

  浅复制

```
    var obj = { a:1, arr: [2,3] };
    var shadowObj = shadowCopy(obj);
    function shadowCopy(src) {
      var dst = {};
      for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
          dst[prop] = src[prop];
        }
      }
      return dst;
    }
```

深复制？？

```
    var cloneObj = function(obj){
        //理解下这里的obj.constructor其实是指向对象的
        var str, newobj = obj.constructor === Array ? [] : {};
        if(typeof obj !== 'object'){
            return;
        } else if(window.JSON){
            str = JSON.stringify(obj), //系列化对象
            newobj = JSON.parse(str); //还原
        } else {
            for(var i in obj){
                newobj[i] = typeof obj[i] === 'object' ? 
                cloneObj(obj[i]) : obj[i]; 
            }
        }
        return newobj;
    };
```

#### slice VS splice
  这里已经看出对于json格式的最简单的深复制方法就是
  `m=JSON.parse(JSON.stringfigy(obj))`,该方法不成功的话就递归

  **再扯扯，数组的slice和splice方法**

  `slice(begin,end)`方法是截取数组变成一个新数组，浅拷贝 slice(1,3)指的就是[1~3)这个区间，注意不能有3，记住返回的是一个新数组，不改变原来数组

  `splice(start, deleteCount, item1, item2, ...)` 注意看参数都不一样，如果第二个参数取0，就是新增item1，item2,返回一个空数组，因为一个元素也没有删除，注意该方法返回值值为删除的数组，该方法会直接改变原来数组


###5. 属性描述符

```
var myObj={
    a:2
}

Object.getOwnPropertyDescriptor(myObj,"a")

{
    configurable:true, //可配置，如果设置false，那么就不能更改这四个属性了，不可逆
    enumerable:true, //是否可以遍历
    value:2,
    writable:true //是否可写
}
```

看看返回什么？

### 4. Getter和Setter

get查询的时候调用，set赋值的时候调用

 + getter
   改写默认操作，当你给一个变量设置getter和setter的时候，js会忽略他们的value和writable属性，也就是是说这两优先级高于上面的属性描述符

```
obj={
    a:8,
    b:10
}
obj={
    get a(){  //注意这个写法，其实和下面定义B的是一样的
    return 4
    }
}
Object.defineProperty(obj,"b",{
    get:function(){
        return this.a*2
    },
    enumberable:true
})

obj.a=5
obj.a
4

```
 

***
 
***