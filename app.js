function btn(num){
   let result = document.getElementById("result");
   result.value += num; 
}
function clearResult(num){
    let result = document.getElementById("result");
    result.value = ""; 
 }

 function getResult(num){
    let result = document.getElementById("result");
    result.value = eval(result.value); 
 }