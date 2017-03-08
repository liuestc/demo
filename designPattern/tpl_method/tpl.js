// 组合继承
var Alert=function(data){
	if(!data){
		return ;
	}
	// this.content=data.content;
	this.panel=document.createElement("div")
	this.contentNode=document.createElement("p")
	this.confirmBtn=document.createElement("span")
	this.closeBtn=document.createElement("p")
	this.panel.className="alert"
	this.closeBtn.className='a-close'
	this.confirmBtn.className='a-confirm'
	this.confirmBtn.innerText=data.confirm||"确认"
	this.contentNode.innerText=data.content
	console.log(data.content)
	console.log(this.contentNode)
	this.success=data.success||function(){}
	this.fail=data.fail||function(){}
}

Alert.prototype={
	init:function(){
		this.panel.appendChild(this.closeBtn)
		this.panel.appendChild(this.confirmBtn)
		this.panel.appendChild(this.contentNode)
		document.body.appendChild(this.panel)
		this.bindEvent()
		this.show()

	},
	bindEvent:function(){
		var that=this;
		this.closeBtn.onclick=function(){
			that.fail()
			that.hide()
		}
		this.confirmBtn.onclick=function(){
			that.success()
			that.show()
		}
	},
	show:function(){
		this.panel.style.display="block"
	},
	hide:function(){
		this.panel.style.display="none";
	}
}



// 调用
// var RightAlert=function(data){
// 	Alert.call(this,data);
// 	this.confirmBtn.className=this.confirmBtn.className+"right";
// }

// alert

var  TitleAlert=function(data){
	Alert.call(this,data)
	this.title=data.title;
	this.titleNode=document.createElement("h3")
	this.titleNode.innerText=this.title
}

TitleAlert.prototype=new Alert()

TitleAlert.prototype.init=function(){
	this.panel.insertBefore(this.titleNode,this.panel.firstChild)
	Alert.prototype.init.call(this)
}



// RightAlert.prototype=new Alert();
// 取消按钮
var CancelAlert=function(data){
	TitleAlert.call(this,data);
	this.cancel=data.cancel
	this.cancelBtn=document.createElement("span")
	this.cancelBtn.className="cancel"
	this.cancelBtn.innerText="取消"||this.cancel
}

CancelAlert.prototype=new Alert()
CancelAlert.prototype.init=function(){
	TitleAlert.prototype.init.call(this)
	this.panel.appendChild(this.cancelBtn)
}
CancelAlert.prototype.bindEvent=function(){
	var that=this;
	TitleAlert.prototype.bindEvent.call(that)

	this.cancelBtn.onclick=function(){
		that.fail()
		that.hide()
	}
}


new CancelAlert({
	title:"标题",
	content:"内容",
	success:function(){
		alert("success")
	},
	fail:function(){
		alert("fail")
	}
}).init()