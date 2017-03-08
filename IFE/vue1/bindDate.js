data={
	"name":"ljs",
	"age":18
}
function Observer(data){
	this.data=data;
}

prototype=Observer.prototype;

prototype.walk=function(obj){
	let val;
	for(key in obj){
		if(obj.hasOwnProperty(key)){
			val=obj[key]
		}
	    if (typeof val === 'object') {
            new Observer(val);
        }

		this.convert(key,val)
	}
}

prototype.convert=function(key,val){

Object.defineProperty(this.data,key,{
	enumerable: true,
	get:function(){
		console.log("访问了name属性");
		return val;
	},
	set:function(newVal){
		console.log('你设置了' + key);
        console.log('新的' + key + ' = ' + newVal)
        if (newVal === val) return;
        val = newVal
	}
})

}


