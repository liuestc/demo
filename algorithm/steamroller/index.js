// 数组扁平化
function steamroller(arr){
	var newArr=[];
	for(var i=0;i<arr.length;i++){
		if(Array.isArray(arr[i])){
			//注意理解这里 为何要使用apply steamroller(arr[i])
			//concat 也可以实现 不过拼接数组比较低效
			newArr.push(...steamroller(arr[i]))
			//newArr=newArr.concat(steamroller(arr[i]))
		}
		else{
			newArr.push(arr[i])
			//newArr.push(arr[i])
		}
	}
	//console.log(newArr)
	return newArr
}

function steamroller2(arrParams){
	var newArr=[];
	var flatten=function(arr){
		if(!Array.isArray(arr)){
			newArr.push(arr)
		}
		else{
			for(var a in arr){
				flatten(arr[a])
			}
		}
	}

	arrParams.forEach(item=>flatten(item));
	return newArr;
}

function steamrollArray3(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamrollArray(toFlatten) : toFlatten);
  }, []);
}

var m=steamroller([1, [2], [3, [[4]]]]);
console.log(m)