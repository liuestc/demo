从setTimeout思考闭包问题
===
###setTimeout
+ 函数执行时机：
setTimeout执行时是等浏览器执行完主线程上的任务时才来执行setTimeout的
```
console.log(1)
setTimeout(function(){
    console.log(2)
    },100)
console.log(3)    
```

    上述打印132

    我们再改一改
```
console.log(1)
setTimeout(function(){
    console.log(2)
    },200)
for(var i=0;i<1000;i++){
    console.log(10000)
} 
setTimeout(function(){
    console.log(4)
    },100)   
console.log(3) 
```

    思考这里会打印什么？

    1 1000（1000次） 3 2/4 注意最后两个顺序是不一定的，这取决于for循环是否运行时间大于100毫秒。

+ 经典闭包问题
    面试中，常常会考到 for+setTimeout的问题
```
for(var i=0;i<10;i++){
    setTimeout(function(){
        console.log(i)
        },100)
}  //打印10次10
```

    这个问题你在控制台打印一下i就明白了，是把`function(){console.log(i)}`这个函数放进了任务队列中，等到执行任务队列中的函数时，i已经变成了10

    So 如何解决这个问题？

    思路：只要把i暂存起来就好了，通过立即执行函数或者闭包？

    第一版：
```
    function timeLoop(i){
        setTimeout(function(){
            console.log(i)
            },i*1000)
    }

    for(var i=0;i<10;i++){
        timeLoop(i)
    }
```    
    第二版：（把timeLoop写成匿名函数）

```
    for(var i=0;i<10;i++){
        (function(){
            setTimeout(function(){
                console.log(i)
            },i*1000)
        })()
    }
```    

第三版：（利用闭包）

```
for(var i=0;i<10;i++){
    setTimeout((function(i){
        return function(){
            console.log(i)
        }
    })(i),i*1000)
}
```
这一版有点难以理解？

for(var i=0;i<10;i++){
    setTimeout(timeLoop(i),i*1000)
}

function timeLoop(i){
    console.log(i) 为什么这样不可以？

}

要理解为何console.log(i)不可以，先看下传给setTimeout的是个啥玩意？`timeLoop(i)`这是个执行结果啊！！！注意，敲黑板！！！人家要传个函数，你却给了执行结果！so,这明显是不合理的,如何改`setTimeout(funnction(){timeLoop(i)})`??!!whatfuck,这不是回到了面试题上？

```

```
