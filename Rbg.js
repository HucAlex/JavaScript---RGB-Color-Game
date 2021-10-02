var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");
var modeButton =document.querySelectorAll(".mode");

init();

/*easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares = 3;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numberOfSquares = 6;
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});*/

resetButton.addEventListener("click", function(){
	/*//generate all new colors
	colors = generateRandomColors(numberOfSquares);	
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	this.textContent = "Play Again?";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];	
	}
	h1.style.backgroundColor = "steelblue";*/
	reset(numberOfSquares);
});

colorDisplay.textContent = pickedColor;

function init(){
	//mode buttons
	setupModeButtons();
	setupSquares();
	reset(numberOfSquares);
}

function setupSquares()
{
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];

		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor
			if(clickedColor === pickedColor)
			{
				message.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else
			{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	}
}

function setupModeButtons()
{
	for(var i=0; i<modeButton.length; i++)
	{
		modeButton[i].addEventListener("click", function(){
			modeButton[0].classList.remove("selected");
			modeButton[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
			
			/*if(this.textContent === "Easy")
			{
				numberOfSquares = 3;
			}
			else
			{
				numberOfSquares = 6;
			}*/
			
			reset(numberOfSquares);	
		});
	}
}


function reset(numberOfSquares){
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);	
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";
	//change colors of squares
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];	
		if(colors[i])
		{
			squares[i].style.display = "block";	
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}

	}
	h1.style.backgroundColor = "steelblue";
}

function changeColors(color){
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for(var i=0; i<num; i++)
	{
		//get random color and push into arr
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256 );
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256 );
	//pick a "blue" from 0 to 255
	var b =	Math.floor(Math.random() * 256 );

	return "rgb(" + r + ", " + g + ", " + b + ")";
}




































