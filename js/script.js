$(document).ready(function(){


	//variables

	var totalBasic = new Array();
	var totalPlus = new Array();
	var totalRV = new Array();

//functions

	$('.prev').click(function(e){
		var active = $('.active');
		active.addClass('hide').removeClass('active');
		active.prev().removeClass('hide').addClass('active');


	});


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
		
		
					var memberships = [
				{
					level: "Basic",
					price: "$100",
					totalSelected: totalBasic.length,
					details: 'Your best option is basic!',

				},
				{
					level: "Plus",
					price: "$200",
					totalSelected: totalPlus.length,
					details: 'your best option is plus!'
				},
				{
					level: "RV",
					price: "$300",
					totalSelected: totalRV.length,
					details: 'your best option is RV!',
				},
			];

			memberships.sort(function(a, b) { 
			    return a.totalSelected - b.totalSelected;
			});

			for(var i in memberships){
			    var msg = "<p>Based on your choices, we think your best choice for membership is: </p>"
			    msg = msg + "<p><strong>" + memberships[i].level + "</strong></p>";
			    msg = msg + "<p><strong>" + memberships[i].price + "</strong></p>";
			    msg = msg + "<p><strong>" + memberships[i].details + "</strong></p>";


			    $('.results').html(msg);
			}
				

		});

	});

});