var success_popup=document.getElementById("success");
var error_popup=document.getElementById("error");
var s_close=document.getElementById("s_button");
var e_close=document.getElementById("e_button");
var s_btn=document.getElementById("success-trigger");
var e_btn=document.getElementById("error-trigger");
s_btn.onclick=function(){
    success_popup.style.display="block";
}
s_close.onclick=function(){
    error_popup.style.display="none";
}