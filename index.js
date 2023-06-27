var decrease=document.getElementById(".decrease");
var increase=document.getElementById(".increase");
var reset=document.getElementById(".reset");
function decrease1(){
    document.getElementById("v").innerText--;
    if (document.getElementById("v").innerText<=0){
        
        document.getElementById('v').style.color='red';
  
    }
    

};
function increase1(){
    document.getElementById("v").innerText++;
   document.getElementById('v').style.color='green';

};
function reset1(){
    document.getElementById("v").innerText=0;
    document.getElementById('v').style.color='white';

}
