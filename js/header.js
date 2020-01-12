$(function(){
	$(".nav-item .nav-link").click(function(){
		$(".nav-item .active").removeClass("active")
		$(this).addClass("active")
	});
	$("#dangyuanxuexi").mouseover(function(){
		$("#xuexi_ul").css("display","block");
	});
	$("#xuexi_ul").mouseout(function(){
		$("#xuexi_ul").css("display","none");
	})
	$("#dangyuanxuexi").mouseout(function(){
		$("#xuexi_ul").css("display","none");
	})

})