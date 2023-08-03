var input =document.getElementById("result");
function display(element){
    input.value += element;
}
function calculate(){
    var final_result = eval(input.value);
    input.value=final_result;

}
function del(){
    input.value = input.value.slice(0,-1);
}
function ac(){
    input.value = input.value.slice(0,0);
}