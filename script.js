function calculate(value) 
{
	let data = document.getElementById("text").value;
	data+=value;

	document.getElementById("text").value = data;
}

function showResult()
{
	let data = document.getElementById("text").value;

	document.getElementById("text").value = eval(data);
}