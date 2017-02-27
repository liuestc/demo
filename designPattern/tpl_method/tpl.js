var Alert=function(data){
	if(!data){
		return ;
	}
	this.content=data.content;
	this.panel=document.createElement("div")
	this.contentNode=document.createElement("p")
	this.confirmBtn=document.createElement("span")
	this.closeBtn=document.createElement("p")
	this.panel.className="alert"
	this.closeBtn.className='a-close'
	this.confirmBtn.className='a-confirm'
	this.confirmBtn.innerHtml=data.confirm||"确认"
	this.contentNode.innerHtml=this.content
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
	hide:function(){
		this.panel.style.display="none";
		this.panel.style.display="block"
	}
}