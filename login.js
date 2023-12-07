function data(){
var a=document.getElementById("name").value;
var b=document.getElementById("email").value;
var c=document.getElementById("contact").value;
var d=document.getElementById("p-1").value;
var e=document.getElementById("p-2").value;

if(a==""||b==""||c==""||d==""||e=="")
{
    alert("All Fields are mandatory!");
    return false;
}
else if(c.length<10||c.length>10)
{
    alert("Number should be of 10 digits! Please enter the valid Number!")
}
else if(d!=e)
{
    alert("Enter the correct Password to confirm it!")
}
else{
    true;
}
}
