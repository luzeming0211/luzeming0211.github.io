`

	//ajax 方式
	$.ajax({
		url:"http://bang.cdn.www.sojson.com/testJSON.json",
		dataType:"json",
		type:"get",
		success:function(result){
			console.log("status:%s", result.status);
			$.each(result.data,function(){
				console.log("name:%s,age:%s",this.name,this.age)
			});
		}
	});
	//post 方式
	$.post("http://bang.cdn.www.sojson.com/testJSON.json",{},function(result){
		console.log("status:%s", result.status);
		$.each(result.data,function(){
			console.log("name:%s,age:%s",this.name,this.age)
		});
	},"json");
	//get 方式
	$.get("http://bang.cdn.www.sojson.com/testJSON.json",{},function(result){
		console.log("status:%s", result.status);
		$.each(result.data,function(){
			console.log("name:%s,age:%s",this.name,this.age)
		});
	},"json");
	//get JSON 方式
	$.getJSON("http://bang.cdn.www.sojson.com/testJSON.json",{},function(result){
		console.log("status:%s", result.status);
		$.each(result.data,function(){
			console.log("name:%s,age:%s",this.name,this.age)
		});
	});
`