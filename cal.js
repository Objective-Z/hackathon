var arr = $("form").serializeArray();


var age, weight, heart, time;
age = arr.age.value;
weight = arr.weight.value;
heart = arr.heart.value;
time = arr.time.value;

if (arr.gender.value == "male"){
	var cal = (0.2017 * age - 0.09036 * weight + 0.6309 * heart - 55.0969) * time / 4.184;
}
else{
	var cal = (0.074 * age - 0.05741 * weight + 0.4472 * heart - 20.4022) * time / 4.184;
}

$('#cal-output').append(cal);


}