/*var a=document.querySelector("button");
var isred=false;
a.addEventListener("click",function()
{ if(isred)
	{document.body.style.background="white";
	isred=false;}
	else
		{document.body.style.background="red";
	isred=true;

}

})
*/
var p1button=document.querySelector("#p1");
var p2button=document.querySelector("#p2");
var resetbutton=document.querySelector("#p3");
var numinput=document.querySelector("input");
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var winscoredisplay=document.querySelector("#winscore");
var p1score=0;
var p2score=0;
var gameover=false;
var winscore=5;

p1button.addEventListener("click",function()
{ if (!gameover) {
	p1score++;
	if (p1score===winscore) {gameover=true;p1display.style.color="green";}
p1display.textContent=p1score;
}
})
p2button.addEventListener("click",function()
{ if (!gameover) {
	p2score++;
	if (p2score===winscore) {gameover=true;p2display.style.color="green";}
p2display.textContent=p2score;
}
})
resetbutton.addEventListener("click",function () {
	reset();
})
numinput.addEventListener("change",function () {
	winscoredisplay.textContent=numinput.value;
	winscore=Number(numinput.value);
	reset();

})
function reset()
{
	p1score=p2score=0;
	p1display.textContent=p1score;
	p2display.textContent=p2score;
	gameover=false;
	p1display.style.color="black";p2display.style.color="black";
}