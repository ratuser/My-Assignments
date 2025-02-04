var guessdNumber=document.getElementById('number')
var btn=document.getElementById('btn')
var remainingChances=document.getElementById('rchances')
var container=document.getElementById('container')
let val=10
let randomNumber=Math.floor(Math.random()*100)
let temp=''
btn.addEventListener("click",()=>{
    val--
    remainingChances.innerText=val
    console.log(randomNumber)
    if(val>0){
    if(guessdNumber.value==randomNumber){
        container.innerHTML = " "
        temp='<h2>You Have Guessed Correct Number</h2>'
        container.innerHTML+=temp
        temp=''
        btn.disabled = true;
    }else if(guessdNumber.value<randomNumber){
        container.innerHTML = " "
        temp='<p>Guessed Number is Low</p>'
        container.innerHTML+=temp
        temp=''
    }else if(guessdNumber.value>randomNumber){
        container.innerHTML = " "
        temp='<p>Guessed Number is High</p>'
        container.innerHTML+=temp
        temp=''
    }}
    else{
        container.innerHTML = " "
        temp='<h2>You Have Lost The Game</h2>'
        container.innerHTML+=temp
        btn.disabled = true;
    }
})