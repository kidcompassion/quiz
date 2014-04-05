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
		
			
			function membershipType(level, price, totalSelected){
				this.level = level;
				this.price = price;
				this.totalSelected = totalSelected;
			}

			var membershipBasic = new membershipType("Basic", '$100', totalBasic.length);
			var membershipPlus = new membershipType("Plus", '$200', totalPlus.length);
			var membershipRV = new membershipType("RV", '$300', totalRV.length);


		console.log(membershipBasic.level, membershipBasic.totalSelected);
		console.log(membershipPlus.level, membershipPlus.totalSelected);
		console.log(membershipRV.level, membershipRV.totalSelected);



$('.results').html(membershipBasic.level + ' ' + membershipBasic.totalSelected);













	});












	
	


	});


















});