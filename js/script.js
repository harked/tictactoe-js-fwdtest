// JavaScript Document
console.log("Welcome to Digdagdoe!");

function check_o_win() {
	if (
		$("#box1").hasClass('o') && $("#box2").hasClass('o') && $("#box3").hasClass('o') || 
		$("#box4").hasClass('o') && $("#box5").hasClass('o') && $("#box6").hasClass('o') || 
		$("#box7").hasClass('o') && $("#box8").hasClass('o') && $("#box9").hasClass('o') || 
		$("#box1").hasClass('o') && $("#box4").hasClass('o') && $("#box7").hasClass('o') || 
		$("#box2").hasClass('o') && $("#box5").hasClass('o') && $("#box8").hasClass('o') || 
		$("#box3").hasClass('o') && $("#box6").hasClass('o') && $("#box9").hasClass('o') || 
		$("#box1").hasClass('o') && $("#box5").hasClass('o') && $("#box9").hasClass('o') || 
		$("#box3").hasClass('o') && $("#box5").hasClass('o') && $("#box7").hasClass('o')
	) {
		return true;
	} else {
		return false;
	}
}

function check_x_win() {
	if (
		$("#box1").hasClass('x') && $("#box2").hasClass('x') && $("#box3").hasClass('x') || 
		$("#box4").hasClass('x') && $("#box5").hasClass('x') && $("#box6").hasClass('x') || 
		$("#box7").hasClass('x') && $("#box8").hasClass('x') && $("#box9").hasClass('x') || 
		$("#box1").hasClass('x') && $("#box4").hasClass('x') && $("#box7").hasClass('x') || 
		$("#box2").hasClass('x') && $("#box5").hasClass('x') && $("#box8").hasClass('x') || 
		$("#box3").hasClass('x') && $("#box6").hasClass('x') && $("#box9").hasClass('x') || 
		$("#box1").hasClass('x') && $("#box5").hasClass('x') && $("#box9").hasClass('x') || 
		$("#box3").hasClass('x') && $("#box5").hasClass('x') && $("#box7").hasClass('x')
	) {
		return true;
	} else {
		return false;
	}
}

function resetBoard() {
	$("#gameBoard div").text("+");
	$("#gameBoard div").removeClass('selected');
	$("#gameBoard div").removeClass('o');
	$("#gameBoard div").removeClass('x');
}

function fnLoad() {
    var select = document.getElementById("matches");
    for (i = 3; i <= 30; i += 1) {
        var option = document.createElement('option');
        select.options[select.options.length] = new Option(i, i);
    }
}

$(document).ready(function() {
	var count = 0;
	var o_win = 0;
	var x_win = 0;

	$('#gameBoard div').click(function() {
		var matches = $('#matches').val();
		if (count == 8) {
			alert('Draw! It will restart...');
			resetBoard();
			count = 0;
		} else if ($(this).hasClass('selected')) {
			alert('Already selected');
	  	} else if (count%2 == 0) {
			count++
			$(this).text("o");
			$(this).addClass('selected o');
		    if (check_o_win()) {
		   		count = 0;
		   		o_win++
				$('#o_win').text(o_win);
				resetBoard();
				if (o_win == matches) {
					alert("O the champione! ole ole ole...");
					var backgroundInterval = setInterval(function() {
					    $("body").toggleClass("winthegame");
				 	},300);
				 	$('#reset').text("Play Again");
				} else {
					alert('O wins');
				}
	        }
	  	} else {
			count++
			$(this).text("x");
			$(this).addClass('selected x');
	   		if (check_x_win()) {
	   			count = 0;
	   			x_win++
				$('#x_win').text(x_win);
				resetBoard();
	   			if (x_win == matches) {
					alert("X the champione! ole ole ole...");
					var backgroundInterval = setInterval(function() {
					    $("body").toggleClass("winthegame");
				 	},300);
				 	$('#reset').text("Play Again");
				} else {
					alert('X wins');
				}
	        }
		}
	});

    $("#reset").click(function () {
		count = 0;
		o_win = 0;
		x_win = 0;
		$('#o_win').text(0);
		$('#x_win').text(0);
		resetBoard();
		if ($(this).text() == "Play Again") {
			location.reload(); 
		}
  	});
});