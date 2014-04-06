$(document).ready(function(){

	//array for number of clicks
	var totalBasic = new Array();
	var totalPlus = new Array();
	var totalRV = new Array();


	//function to remove a vote on click of previous button
	$('.prev').click(function(e){ 
		//shows and hides questions based on click of previous
		var active = $('.active');
		active.addClass('hide').removeClass('active');
		active.prev().removeClass('hide').addClass('active');

		//submit choice
		var selectedCat = $('.active input[type=radio]:checked').val();
		if (selectedCat == 'Basic'){
			totalBasic.pop(1);
		}else if(selectedCat == 'Plus'){
			totalPlus.pop(1);
		}else if(selectedCat == 'Plus RV'){
			totalRV.pop(1);
		}else {
			alert('fail');
		}
	});

	//function to add a vote on click of next
	$('.next').click(function(e){
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

		//shows and hides each question as you proceed
		var active = $('.active');
		active.addClass('hide').removeClass('active');
		active.next().removeClass('hide').addClass('active');

		$('.finished').click(function(e){

			console.log(totalBasic.length);
			console.log(totalPlus.length);
			console.log(totalRV.length);
				
					//creates array of objects for each membership level
					var memberships = [
				{
					level: "Basic",
					price: "$100",
					totalSelected: totalBasic.length,
					details: 'Here are some details about basic',

				},
				{
					level: "Plus",
					price: "$200",
					totalSelected: totalPlus.length,
					details: 'Here are some details about plus'
				},
				{
					level: "RV",
					price: "$300",
					totalSelected: totalRV.length,
					details: 'Here are some details about RV',
				},
			];

			//sorts objects based on length of arrays
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