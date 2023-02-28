function calculateMinCost() {
  var inp=document.getElementById("rope-lengths");

      let inp_val=inp.value;
      let a=inp_val.split(",");
  
      let numeric_array=[];
      for(let i=0;i<a.length;i++)
      {
          numeric_array.push(parseInt(a[i]));
          
      }
  
  
      function compareNumbers(a,b)
      {
          return a - b;
      }
  
      numeric_array.sort(compareNumbers); 
      
      var len=numeric_array.length;
      var sum=0;
      while(numeric_array.length>1)
      {
          const first_el=numeric_array.shift();
          const second_el=numeric_array.shift();
          sum=sum+first_el+second_el;
          numeric_array.push(first_el +second_el);
          
  
      let res_div=document.getElementById("result");
      res_div.innerHTML=sum;
      

  

}  