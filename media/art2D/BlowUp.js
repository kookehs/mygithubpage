var winCur = undefined;

function replaceImage(idSmall){
	//if(winCur != undefined) return;
	
	var win = document.getElementById('win');
	var hiddenImg = document.getElementById('imgPop');
	var img = document.getElementById(idSmall);
	
	hiddenImg.src = img.src;
	if(idSmall == "img0") hiddenImg.style = "width: 40%";
	else hiddenImg.style = "width: 60%";

	$(win).removeClass('hidden');
	$(win).addClass('overlay');
	
	winCur = win;
}

function exitImage(){
	$(winCur).addClass('hidden');
	$(winCur).removeClass('overlay');
	winCur = undefined;
}