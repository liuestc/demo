function formateString(str,data){
	return str.replace(/\#\w+#/g,function(match,key){
		return typeof data[key]===undefined?"":data[key]
	})
}
