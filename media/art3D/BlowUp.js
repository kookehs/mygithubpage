var winCur = undefined;

function replaceImage(idSmall){
	if(winCur != undefined) return;
	
	var win = document.getElementById('win');
	var hiddenImg = document.getElementById('imgPop');
	var img = document.getElementById(idSmall);
	
	hiddenImg.src = img.src;

	$(win).removeClass('hidden');
	$(win).addClass('overlay');
	
	winCur = win;
}

function exitImage(){
	$(winCur).addClass('hidden');
	$(winCur).removeClass('overlay');
	winCur = undefined;
}