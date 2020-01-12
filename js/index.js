$(function(){
	$(".dangyuanxuexi").mouseover(function(){
		$(".menup_link").css("display","block");
	});
	$(".dangyuanxuexi").mouseout(function(){
		$(".menup_link").css("display","none");
	});
	$(".menup_link").mouseover(function(){
		$(".menup_link").css("display","block");
	});
	$(".menup_link").mouseout(function(){
		$(".menup_link").css("display","none");
	});

	
	var showText = function(arr, option) {
		if (!arr || arr.length == 0) {
			return;
		}
		var index = 0;
		document.documentElement.addEventListener("click",
			function(event) {
				var x = event.pageX;
				console.log(x);
				var y = event.pageY;
				var text = document.createElement("span");
				text.setAttribute("class", 'text_popup');
				this.appendChild(text);
				if (arr[index]) {
					text.innerHTML = arr[index];
				} else {
					index = 0;
					text.innerHTML = arr[index];
				}
				text.addEventListener("animationend",
					function() {
						text.parentNode.removeChild(text);
					});
				text.style.left = (x - text.clientWidth / 2) + "px";
				text.style.top = (y - text.clientHeight / 2) + "px";
				index++
			});
	}
	showText(['富强','民主','文明','和谐','自由','平等','公正','法治','爱国','敬业','诚信','友善']);
})
