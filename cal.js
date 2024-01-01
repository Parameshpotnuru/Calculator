let btns=document.getElementsByClassName("btn")
let screens=document.getElementById("screen")
for(let i=0;i<btns.length;i++)
{
    btns[i].addEventListener("click",()=>
    {
        screens.value=screens.value+btns[i].innerText
    })
}
let eqals=document.getElementById("equal")
eqals.addEventListener("click",()=>
{
    screens.value=eval(screens.value)
})
let acq=document.getElementById("ac")
acq.addEventListener("click",()=>
{
    screens.value=" "
})
let ce=document.getElementById("ce")
ce.addEventListener("click",()=>
{
    screens.value=screens.value.slice(0,-1)
})