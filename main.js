// function to display content
 function displayContent(content){
    result.value += content
 }
//  clear input
function calcClear(){
   result.value = ""
}
// backspace
function calcBack(){
   result.value=result.value.slice(0,-1)
}
// result
function calcOutput(){
   result.value=eval(result.value)
   
}