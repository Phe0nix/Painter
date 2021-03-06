var c = document.getElementById("canvas1"),

btn = document.getElementById("clear"),

erase = document.getElementById("erase"),

outputValue = document.getElementById("ageOutputId"),

inputValue = document.getElementById("ageInputId"),

save = document.getElementById("save"),

red = document.getElementById("red"),

green = document.getElementById("green"),

blue = document.getElementById("blue"),

ctx = c.getContext("2d"),

//strokes

xs = document.getElementById("xs"),

sm = document.getElementById("sm"),

md = document.getElementById("md"),

lg = document.getElementById("lg"),

xl = document.getElementById("xl"),

xxl = document.getElementById("xxl"),

xxxl = document.getElementById("xxxl"),

oldX=null,x,y,

oldY=null,

mousedown = false;



btn.innerHTML = "Clear";

save.innerHTML = "Save";

erase.innerHTML = "Erase";

//cir.innerHTML = "o";



save.addEventListener("click",imgSave);

function imgSave(){

var data = c.toDataURL("image/png");

document.getElementById("canImage").src = data;

var btnImg = document.createElement("a");

btnImg.innerHTML = "Download";

btnImg.setAttribute("class","canImage");

btnImg.href = data;

btnImg.download = 'image.png';

document.body.appendChild(btnImg);

//btnImg.addEventListener("click",down);

//window.location.href=data;

//alert(data);

}



function setCanvas(){

c.width = 500;

c.height = 300;

ctx.strokeStyle = "black";

ctx.lineWidth = 1;

ctx.lineCap = "round";

ctx.lineJoin = "round";

}



function lineWidth(){

inputValue.value = document.getElementById("ageInputId").value;

}



function clear(){

ctx.clearRect(0,0,c.width,c.height);

}



function movedown(event){

mousedown = true;

}



function moveup(event){

mousedown = false;

oldX=null;

oldY=null;

}



function move(event){

x = event.clientX;

y = event.clientY;

if(mousedown){

paint(x,y);

}

}



function paint(x,y){

ctx.beginPath();

if(oldX>0 && oldY>0){

ctx.moveTo(oldX,oldY);

}

ctx.lineTo(x,y);

oldX = x;oldY = y;

ctx.stroke();

ctx.closePath();

}



red.addEventListener("click",function(){

ctx.strokeStyle=this.style.background;

});



green.addEventListener("click",function(){

ctx.strokeStyle=this.style.background;

});



blue.addEventListener("click",function(){

ctx.strokeStyle=this.style.background;

});



erase.addEventListener("click",function(){

	ctx.strokeStyle = "white";

  ctx.lineWidth = "10";

});



//stroke click

xs.addEventListener("click",function(){

ctx.lineWidth="1";

});



sm.addEventListener("click",function(){

ctx.lineWidth="3";

})



md.addEventListener("click",function(){

ctx.lineWidth="7";

});



lg.addEventListener("click",function(){

ctx.lineWidth="12";

});



xl.addEventListener("click",function(){

ctx.lineWidth="16";

});



xxl.addEventListener("click",function(){

ctx.lineWidth="23";

});



xxxl.addEventListener("click",function(){

ctx.lineWidth="30";

});



c.addEventListener("mousedown",movedown);

c.addEventListener("mouseup",moveup);

c.addEventListener("mousemove",move);

c.addEventListener("touchstart",movedown);

c.addEventListener("touchmove",move);

c.addEventListener("touchend",moveup);

btn.addEventListener("click",clear);

setCanvas();
