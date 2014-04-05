$(document).ready(function(){

//functions

function showQuiz(){
	$('.next').click(function(e){ //on click of next
		var active = $('.active');
		active.addClass('hide').removeClass('active');
		active.next().removeClass('hide').addClass('active');
	});
}


function countPoints(){
	var totalBasic = new Array();
	var totalPlus = new Array();
	var totalRV = new Array();

/*	for each question,
	if (radiobutton has slected basic, add point to total basic array)


	for each ul, get the value of the selected radio box.
	if it's basic, add a point to basic.
	if it' plus, add a point to plus.
	if it's rv, add a point to rv.

*/
		var selectedBasic = $('input[value="basic"]:radio');
		var selectedPlus = $('input[value="plus"]:radio');
		var selectedRV = $('input[value="rv"]:radio');
		
		if (selectedBasic){
			alert(selectedBasic);
		}
}




countPoints();






showQuiz();





});