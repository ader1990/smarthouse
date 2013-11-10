$.landing.open();
var timer = 0;
var mapColor = [ 'A', 'B', 'C', 'D', 'E', 'F'];
var mapColorize = function(colorInt){
	if(colorInt >= 10){
		return mapColor[colorInt - 10];
	}
	return String(colorInt);
};

	
var changeColor = function(){
	timer += 1;
	var timeColor = timer % 16;
	var color =[ timeColor, 5, 10]; 
	var fullColor = "#" + mapColorize(color[0]) + mapColorize(color[1])+ mapColorize(color[2]);
	//alert(fullColor);
	$.landing.setBackgroundColor(fullColor);
};
//setInterval(changeColor, 50);
//
