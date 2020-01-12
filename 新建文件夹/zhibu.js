$(function(){
	// 修改轮播时间
	$('#demo').carousel({interval:3000});
	var imglist =$(".carousel-item img");
	for (var i = 0; i < imglist.length; i++) {
		if(imglist[i].width/imglist[i].height>1.3){
				imglist[i].width ="775"
				imglist[i].height ="400"

		}
		if (imglist[i].width/imglist[i].height<1.3&&imglist[i].width/imglist[i].height>1) {
			imglist[i].width ="600"
			imglist[i].height ="400"
		}
		if(imglist[i].width/imglist[i].height<=1){
			imglist[i].width ="500"
			imglist[i].height ="400"
		}
	}
})