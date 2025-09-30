let btn=document.querySelectorAll(".btn");
let display=document.getElementById("display");
let clear=document.getElementById("clear");
let equal=document.getElementById("equal");
let btneq=document.querySelector(".btneq");
let btnac=document.querySelector(".btnac");
let del=document.querySelector(".del");
let per=document.querySelector(".per");


del.addEventListener("click",function(){
    display.value=display.value.slice(0,-1);
});

btn.forEach(function(button){
    button.addEventListener("click",function(){
        let value=button.value;
        console.log(value);
        display.value+=value;
    })});
    btneq.addEventListener("click",function(){
        display.value=eval(display.value);

    }
);
btnac.addEventListener("click",function(){
    display.value="";
});

        
