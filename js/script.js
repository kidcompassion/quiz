$(document).ready(function(){


	//variables

	var totalBasic = new Array();
	var totalPlus = new Array();
	var totalRV = new Array();

//functions


	$('.next').click(function(e){ //on click of next


		//submit choice
		var selectedCat = $('.active input[type=radio]:checked').val();
		if (selectedCat == 'Basic'){
			//alert('Basic');
			totalBasic.push(1);
		}else if(selectedCat == 'Plus'){
			//alert('PLUS')
			totalPlus.push(1);
		}else if(selectedCat == 'Plus RV'){
			//alert('PLUS RV')
			totalRV.push(1);
		}else {
			alert('fail');
		}


		var active = $('.active');
		active.addClass('hide').removeClass('active');
		active.next().removeClass('hide').addClass('active');

		$('.finished').click(function(e){
		console.log('basic' + totalBasic.length);
		console.log('plus' + totalPlus.length);
		console.log('rv' + totalRV.length);
















	});












/*	for each question,
	if (radiobutton has slected basic, add point to total basic array)


	for each ul, get the value of the selected radio box.
	if it's basic, add a point to basic.
	if it' plus, add a point to plus.
	if it's rv, add a point to rv.

*/

		
	


	});


















});