function minCostToFormRope(event) {

	event.preventDefault();
	var inputElement = document.querySelector('input').value;
	var arr = inputElement.split(',');

	arr.sort(function (a , b) {return a - b});

	var cost = 0;
	var res =0;
	while(arr.length > 1){
		var res = Number(arr[0]) + Number(arr[1]);
		
		
		

		arr.shift();
		arr.shift();
		arr.push(res);
		cost += res;
		
		
		arr.sort(function (a , b) {return a -b});
	}
	document.getElementById("result").textContent = cost;
}  