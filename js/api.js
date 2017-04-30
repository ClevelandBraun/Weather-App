var city = "London";

// Current Weather
function callToday(city) {$.ajax({
		//Settings
		url: 'http://api.openweathermap.org/data/2.5/weather',
		method: 'GET',
		contentType: 'application/json; charset=UTF-8',
		dataType: "jsonp",
		crossDomain: true,
		data: {
			q: city,
			APPID: '661c741ce38ebff2a49e7368c038ab21',
			units: 'metric',
		},
		//Afer-call methods
		success: handleResultsToday,
	});
}

function handleResultsToday(response_body){
	console.log(response_body);

	//Change City Name
	document.getElementById("location").innerHTML = response_body.name;

	//Adjust Today's Weather
	var icon_id_t = response_body.weather["0"].id;
	$("#icon_t-container").attr('class', 'wi wi-owm-' + icon_id_t);
	var temp_t = Math.round(response_body.main.temp);
	document.getElementById("temp_t").innerHTML = temp_t + "°C";
	var wind_t = response_body.wind.speed;
	document.getElementById("wind_t").innerHTML = wind_t + " km/h";
	var wind_t_dir = response_body.wind.deg;
	$("#wind_t_dir").attr('class', 'wi wi-wind towards-' + wind_t_dir + '-deg');
	var humid_t = response_body.main.humidity;
	document.getElementById("humid_t").innerHTML = humid_t + "%";
};

// 5-day Forecast
function callForecast(city) {$.ajax({
	//Settings
	url: 'http://api.openweathermap.org/data/2.5/forecast',
	method: 'GET',
	contentType: 'application/json; charset=UTF-8',
	dataType: "jsonp",
	crossDomain: true,
	data: {
		q: city,
		APPID: '661c741ce38ebff2a49e7368c038ab21',
		units: 'metric',
	},
	//Afer-call methods
	success: handleResultsForecast,
});
}

function handleResultsForecast(response_body){
	console.log(response_body);

	//Day 1
	var icon_id_1 = response_body.list["8"].weather["0"].id;
	$("#icon_1-container").attr('class', 'wi wi-owm-' + icon_id_1);
	var temp_1 = Math.round(response_body.list["0"].main.temp);
	document.getElementById("temp_1").innerHTML = temp_1 + "°C";
	var wind_1 = response_body.list["8"].wind.speed;
	document.getElementById("wind_1").innerHTML = wind_1 + " km/h";
	var wind_1_dir = response_body.list["8"].wind.deg;
	$("#wind_1_dir").attr('class', 'wi wi-wind towards-' + wind_1_dir + '-deg');
	var humid_1 = response_body.list["8"].main.humidity;
	document.getElementById("humid_1").innerHTML = humid_1 + "%";

	//Day 2
	var icon_id_2 = response_body.list["16"].weather["0"].id;
	$("#icon_2-container").attr('class', 'wi wi-owm-' + icon_id_2);
	var temp_2 = Math.round(response_body.list["0"].main.temp);
	document.getElementById("temp_2").innerHTML = temp_2 + "°C";
	var wind_2 = response_body.list["16"].wind.speed;
	document.getElementById("wind_2").innerHTML = wind_2 + " km/h";
	var wind_2_dir = response_body.list["16"].wind.deg;
	$("#wind_2_dir").attr('class', 'wi wi-wind towards-' + wind_2_dir + '-deg');
	var humid_2 = response_body.list["16"].main.humidity;
	document.getElementById("humid_2").innerHTML = humid_2 + "%";

	//Day 3
	var icon_id_3 = response_body.list["24"].weather["0"].id;
	$("#icon_3-container").attr('class', 'wi wi-owm-' + icon_id_3);
	var temp_3 = Math.round(response_body.list["0"].main.temp);
	document.getElementById("temp_3").innerHTML = temp_3 + "°C";
	var wind_3 = response_body.list["24"].wind.speed;
	document.getElementById("wind_3").innerHTML = wind_3 + " km/h";
	var wind_3_dir = response_body.list["24"].wind.deg;
	$("#wind_3_dir").attr('class', 'wi wi-wind towards-' + wind_3_dir + '-deg');
	var humid_3 = response_body.list["24"].main.humidity;
	document.getElementById("humid_3").innerHTML = humid_3 + "%";

	//Day 4
	var icon_id_4 = response_body.list["32"].weather["0"].id;
	$("#icon_4-container").attr('class', 'wi wi-owm-' + icon_id_4);
	var temp_4 = Math.round(response_body.list["0"].main.temp);
	document.getElementById("temp_4").innerHTML = temp_4 + "°C";
	var wind_4 = response_body.list["32"].wind.speed;
	document.getElementById("wind_4").innerHTML = wind_4 + " km/h";
	var wind_4_dir = response_body.list["24"].wind.deg;
	$("#wind_4_dir").attr('class', 'wi wi-wind towards-' + wind_4_dir + '-deg');
	var humid_4 = response_body.list["32"].main.humidity;
	document.getElementById("humid_4").innerHTML = humid_4 + "%";

	//Day 5
	//For some reason the call only returns 36 lines instead of 40
	//which is the default	
	var icon_id_5 = response_body.list["39"].weather["0"].id;
	$("#icon_5-container").attr('class', 'wi wi-owm-' + icon_id_5);
	var temp_5 = Math.round(response_body.list["0"].main.temp);
	document.getElementById("temp_5").innerHTML = temp_5 + "°C";
	var wind_5 = response_body.list["39"].wind.speed;
	document.getElementById("wind_5").innerHTML = wind_5 + " km/h";
	var wind_5_dir = response_body.list["24"].wind.deg;
	$("#wind_5_dir").attr('class', 'wi wi-wind towards-' + wind_5_dir + '-deg');
	var humid_5 = response_body.list["39"].main.humidity;
	document.getElementById("humid_5").innerHTML = humid_5 + "%";
};

$(document).ready(function(){
	callToday("London");
	callForecast("London");
	$("#city").keypress(function(event){
    	var keycode = (event.keyCode ? event.keyCode : event.which);
    	if(keycode == '13'){
       		var city =  $(this).val();
       		callToday(city);
       		callForecast(city);
       		return false;
    	}	
	});
	//Today's Date
	var months = ['January','February','March','April','May','June','July',
	'August','September','October','November','December'];       
	var today = new Date();
	today.setTime(today.getTime());   
	var date = 	months[today.getMonth()] + " " + today.getDate()+ ", " + today.getFullYear();
	document.getElementById("date").innerHTML = date;
	//Forecast Dates
	var dayone = new Date();
	dayone.setTime(dayone.getTime() + (1000*3600*24));       
	var dayone = months[dayone.getMonth()] + " " + dayone.getDate()+ ", " + dayone.getFullYear();
	document.getElementById("day-one").innerHTML = dayone;

	var daytwo = new Date();
	daytwo.setTime(daytwo.getTime() + (1000*3600*48));       
	var daytwo = months[daytwo.getMonth()] + " " + daytwo.getDate()+ ", " + daytwo.getFullYear();
	document.getElementById("day-two").innerHTML = daytwo;

	var daythree = new Date();
	daythree.setTime(daythree.getTime() + (1000*3600*72));       
	var daythree = months[daythree.getMonth()] + " " + daythree.getDate()+ ", " + daythree.getFullYear();
	document.getElementById("day-three").innerHTML = daythree;

	var dayfour = new Date();
	dayfour.setTime(dayfour.getTime() + (1000*3600*96));       
	var dayfour = months[dayfour.getMonth()] + " " + dayfour.getDate()+ ", " + dayfour.getFullYear();
	document.getElementById("day-four").innerHTML = dayfour;

	var dayfive = new Date();
	dayfive.setTime(dayfive.getTime() + (1000*3600*120));       
	var dayfive = months[dayfive.getMonth()] + " " + dayfive.getDate()+ ", " + dayfive.getFullYear();
	document.getElementById("day-five").innerHTML = dayfive;
});	