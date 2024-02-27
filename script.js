'use strict'
//const switcher = document.querySelector("button");
//switcher.addEventListener("click",function()
//{
//    document.body.classList.toggle("darkTheme");
//    var className = document.body.className;
//    if(className === "lightTheme")
//    {
//        this.textContent="Dark";
//    }
//    else
//    {
//        this.textContent ="Light";
//    }
//    console.log("The current class name is: "+className);
//});
var button = document.getElementById("button");
var onButtonClick = function ()
{
    console.log("hel");
    document.body.classList.toggle("darkTheme");
}
button.addEventListener("click", onButtonClick);