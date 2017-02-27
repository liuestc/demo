var Observer=(function(){
	var _message={};
	return {
		message:_message,
		regist:function(type,fn){
			if(typeof _message[type]==="undefined"){
				_message[type]=[fn]
			}
			else{
				_message[type].push(fn)
			}
		},
		fire:function(type,args){
			if(!_message[type]){
				return
			}
			else{
				var events={
					type:type,
					args:args||{}
				},
				i=0,
				len=_message[type].length;
				for(var i=0;i<len;i++){
					_message[type][i].call(this,events)
				}

			}
		},
		remove:function(type,fn){
			if(_message[type] instanceof Array){
				var i=_message[type].length-1;
				for(;i>=0;i--){
					_message[type][i]===fn&&_message[type].splice(i,1)
				}
			}
		}

	}
})()