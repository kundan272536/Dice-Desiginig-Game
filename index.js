var randomNumber1=Math.floor(Math.random()*6)+1;
var randDiceImg="dice"+randomNumber1+".png";
var randImageSrc1="images/"+randDiceImg;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randImageSrc1);


function refreshPage(){
    window.location.reload();
}

var randomNumber2=Math.floor(Math.random()*6)+1;
var randDiceImg="dice"+randomNumber2+".png";
var randImageSrc2="images/"+randDiceImg;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randImageSrc2);

if(randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML="Player1 is Winner ";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 is Winner ";
}
else{
document.querySelector("h1").innerHTML="Match is Tie";
}