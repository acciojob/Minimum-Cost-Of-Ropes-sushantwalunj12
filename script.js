let formEle = document.getElementById('form');
formEle.addEventListener('submit' , ropes);
function ropes(event){
	event.preventDefault();

	const input = document.getElementById('form').elements[0].value;

   const arr = input.split(",");
   console.log(arr);

   for(let i=0; i<arr.length; i++){
	 arr[i] = parseInt(arr[i]);
   }


   let arrRope = [];

	while(arr.length != 1){ 
    let add = 0;
	for(let i=1; i<=2; i++){
	//find 1st min value
	let min1 = arr[0];
	let minIndex = 0;
	for(let index=1; index<arr.length; index++){
		if(arr[index] < min1){ 
			min1 = arr[index];
			minIndex = index;
		}
	}
    
	add = add + min1;
    arr.splice(minIndex,1);
	}

	arr.push(add);

	arrRope.push(add);
	}
	let cost = 0;
	arrRope.forEach((value) => {
		cost = cost + value;
	})
	console.log(cost);

	document.getElementById('result').innerHTML = cost;
	console.log("hello");
}