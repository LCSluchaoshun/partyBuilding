$(function(){
	var footerLeft =0;
	var footerBox = document.getElementById("footer-box");
	function lunbo(){
		footerBox.style.left=footerLeft+'px';
		footerLeft--;
		if(footerLeft== -210*5){
			footerLeft=0;
		}
	}
	var fun1=setInterval(lunbo,10);
				 // 鼠标触碰停止
				 footerBox.onmouseover=function(){
				 	clearInterval(fun1);
				 }
				// 鼠标离开继续
				footerBox.onmouseout=function(){
					clearInterval(fun1);
					fun1=setInterval(lunbo,10);
				}	
			})