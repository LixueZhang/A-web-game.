// colors for square c1..c6
var colors = [];
// fetch c1..c6
var squareList = document.getElementsByClassName("square");
// color expressed in RGB format.
var colordata = document.getElementById("colordata");
// message: alert user correct or try again.
var message = document.getElementById("message");
// h1 tag: used to set background color.
var h1 = document.querySelector("h1");
// new color tag: used to change square color.
var newcolor = document.querySelector("#newcolor");
// easy mode.
var easyMode = document.querySelector("#easy");
// hard mode.
var hardMode = document.querySelector("#hard");
// number of squares: 2:3, 5:6.
var color_num = 5;
// background color.
var square_background = "#232323";
// h1 section default background color;
var h1_default_color = "steelblue";

// callback function: check user selection. if match: print correct. else: print try again.
function colorChoose()
{
	if(this.style.background == colordata.textContent)
	{
		message.textContent = "Correct!";
		newcolor.textContent = "Play Again?";
		for(var i=0;i<=color_num;++i)
		{
			squareList[i].style.background = colordata.textContent;
		}
		h1.style.background = colordata.textContent;
	}
	else
	{
		this.style.background = square_background;
		message.textContent = "Try Again!"
	}
}
// return a random number between [x, y]
function randomNum(x, y)
{
	return parseInt(Math.floor(Math.random()*(y+1-x)+x));
}
// generate random colors for squares. 3 : easy; 6 : hard.
function setColor()
{
	for(var i=0;i<=color_num;++i)
	{
		var r = randomNum(0, 255);
		var g = randomNum(0, 255);
		var b = randomNum(0, 255); 
		colors[i] = "rgb("+r+", "+g+", "+b+")";
		squareList[i].style.background = colors[i];
		squareList[i].addEventListener("click", colorChoose);
	}

	for(var i=color_num+1;i<6;++i)
	{
		squareList[i].style.background = square_background;
	}

	var colorForGuess = randomNum(0, color_num);//0~2 or 0~5
	colordata.textContent = colors[colorForGuess];
	h1.style.background = h1_default_color;
	newcolor.textContent = "New Colors";
	message.textContent = "";
}
//style.display = "none"; do not display certain block.
//style.display = "block"; display certain block.

// choose easy or hard mode.
function modeSelection()
{
	if(this.textContent=="Easy")
	{
		color_num = 2;
		easyMode.classList.add("selected");
		hardMode.classList.remove("selected");
	}
	else
	{
		color_num = 5;
		easyMode.classList.remove("selected");
		hardMode.classList.add("selected");
	}
	setColor();
}
// register callback function.
newcolor.addEventListener("click", setColor);

easyMode.addEventListener("click", modeSelection);

hardMode.addEventListener("click", modeSelection);
// set initial data.
setColor();