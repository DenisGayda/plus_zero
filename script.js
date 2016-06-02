var table = document.querySelectorAll('table')
var td = document.querySelectorAll('td');
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var clicks = 1;
var scorePlayer1 = document.getElementById('score_player1');
var scorePlayer2 = document.getElementById('score_player2');
var scorePlus = 0;
var scoreZero = 0;

for( var i = 0; i < td.length; i++) {
	td[i].onclick = function(event) {
		if (!findPlus(event.target) && !findZero(event.target)) {
			if (clicks % 2 == 0) {
				this.className +="zero";
				showActivPlayer(player1, player2);
			} else {
				this.className +="plus";
				showActivPlayer(player2, player1);
			};
			clicks = clicks +1;
		};
		td = document.querySelectorAll('td');
		table = document.querySelectorAll('table');
		if (winPlus (td, table[0])) {
			showActivPlayer(player1, player2);
			clearElem (td, table[0]);
			clicks = 1;
			scorePlus  += 1
			scorePlayer1.innerHTML = scorePlus;
		} else if (winZero (td, table[0])) {
			showActivPlayer(player2, player1);
			clearElem (td, table[0]);
			clicks = 2;
			scoreZero += 1;
			scorePlayer2.innerHTML = scoreZero;
		} else if (deadHeat()) {
			alert('Dead heat');
			clearElem (td, table[0]);
			clicks = 1
		};
	};
};


function showActivPlayer (a, b) {
	a.parentElement.style.backgroundColor= "red";
	b.parentElement.style.backgroundColor = "orange";
	b.innerText = "";
	a.innerText = " - Ваш ход";
}

function findZero (a) {
	return a.classList.contains("zero");
};
function findPlus (a) {
	return a.classList.contains("plus");
};

function findLine (b) {
	return b.classList.contains("horizontal_top") ||
	b.classList.contains("horizontal_middle") ||
	b.classList.contains("horizontal_bottom") ||
	b.classList.contains("vertical_left") ||
	b.classList.contains("vertical_center") ||
	b.classList.contains("vertical_right") ||
	b.classList.contains("horizontal_middle") ||
	b.classList.contains("diagonal_left") ||
	b.classList.contains("diagonal_right");
};

function clearElem (arr, a) {
	for (var i=0; i< arr.length; i++) {
		arr[i].classList.remove("zero");
		arr[i].classList.remove("plus");
	};
	a.classList.remove("horizontal_top");
	a.classList.remove("horizontal_middle");
	a.classList.remove("horizontal_bottom");
	a.classList.remove("vertical_left");
	a.classList.remove("vertical_center");
	a.classList.remove("vertical_right");
	a.classList.remove("horizontal_middle");
	a.classList.remove("diagonal_left");
	a.classList.remove("diagonal_right");
};

function winPlus (arr, a) {
	if (findPlus(arr[0]) && findPlus(arr[1]) && findPlus(arr[2])) {
		a.className +="horizontal_top";
		alert('Win player1');
		return true;
	} else if (findPlus(arr[3]) && findPlus(arr[4]) && findPlus(arr[5])) {
		a.className +="horizontal_middle";
		alert('Win player1');
		return true;
	} else if (findPlus(arr[6]) && findPlus(arr[7]) && findPlus(arr[8])) {
		a.className +="horizontal_bottom";
		alert('Win player1');
		return true;
	} else if (findPlus(arr[0]) && findPlus(arr[3]) && findPlus(arr[6])) {
		a.className +="vertical_left";
		alert('Win player1');
		return true;
	} else if (findPlus(arr[1]) && findPlus(arr[4]) && findPlus(arr[7])) {
		a.className +="vertical_center";
		alert('Win player1');
		return true;
	} else if (findPlus(arr[2]) && findPlus(arr[5]) && findPlus(arr[8])) {
		a.className +="vertical_right";
		alert('Win player1');
		return true;
	} else if (findPlus(arr[0]) && findPlus(arr[4]) && findPlus(arr[8])) {
		a.className +="diagonal_left";
		alert('Win player1');
		return true;
	} else if (findPlus(arr[2]) && findPlus(arr[4]) && findPlus(arr[6])) {
		a.className +="diagonal_right";
		alert('Win player1');
		return true;
	};
};

function winZero (arr, a) {
	if (findZero(arr[0]) && findZero(arr[1]) && findZero(arr[2])) {
		a.className +="horizontal_top";
		alert('Win player2');
		return true;
	} else if (findZero(arr[3]) && findZero(arr[4]) && findZero(arr[5])) {
		a.className +="horizontal_middle";
		alert('Win player2');
		return true;
	} else if (findZero(arr[6]) && findZero(arr[7]) && findZero(arr[8])) {
		a.className +="horizontal_bottom";
		alert('Win player2');
		return true;	
	} else if (findZero(arr[0]) && findZero(arr[3]) && findZero(arr[6])) {
		a.className +="vertical_left";
		alert('Win player2');
		return true;	
	} else if (findZero(arr[1]) && findZero(arr[4]) && findZero(arr[7])) {
		a.className +="vertical_center";
		alert('Win player2');
		return true;
	} else if (findZero(arr[2]) && findZero(arr[5]) && findZero(arr[8])) {
		a.className +="vertical_right";
		alert('Win player2');
		return true;
	} else if (findZero(arr[0]) && findZero(arr[4]) && findZero(arr[8])) {
		a.className +="diagonal_left";
		alert('Win player2');
		return true;
	} else if (findZero(arr[2]) && findZero(arr[4]) && findZero(arr[6])) {
		a.className +="diagonal_right";
		alert('Win player2');
		return true;
	};
};

function deadHeat () {
	var zero = document.querySelectorAll('.zero');
	var plus = document.querySelectorAll('.plus');
	if(zero.length + plus.length == 9) {
		return true;		
	};
};