var licznik = 0;
var szer = 14;
var generalTabXY = [];
var hero = [7, 13];
var seeTab = [];

function createSeeTab() {
  var counter = 0;
  for (var y = hero[1] - 2; y <= hero[1] + 2; y++) {
    for (var x = hero[0] - 2; x <= hero[0] + 2; x++) {
      if (x < 15 && x > 0) {
        seeTab[counter] = generalTab[(y - 1) * szer + (x - 1)];
        counter++;
      } else {
        seeTab[counter] = undefined;
        counter++;
      }
    }

    seeTab[12] = "hero";
    execute();
  }
}

var generalTab = [
  undefined,
  undefined,
  undefined,
  undefined,
  "rock",
  "rock",
  "rock",
  "rock",
  "rock",
  "rock",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "rock",
  "rock",
  "rock",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "rock",
  "rock",
  "rock",
  undefined,
  undefined,
  undefined,
  "rock",
  "rock",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "rock",
  "rock",
  undefined,
  undefined,
  "rock",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "rock",
  undefined,
  "rock",
  "rock",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "rock",
  "rock",
  "rock",
  "grassG",
  "grassG",
  "rock",
  "rock",
  "water",
  "water",
  "water",
  "water",
  "rock",
  "rock",
  "grassG",
  "grassG",
  "rock",
  "rock",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "water",
  "water",
  "water",
  "water",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "rock",
  "rock",
  "rock",
  "rock",
  "rock",
  "grassG",
  "water",
  "water",
  "water",
  "water",
  "grassG",
  "rock",
  "rock",
  "rock",
  "rock",
  "rock",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "water",
  "water",
  "water",
  "water",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "rock",
  "rock",
  "grassG",
  "rock",
  "rock",
  "rock",
  "water",
  "water",
  "water",
  "water",
  "rock",
  "rock",
  "rock",
  "grassG",
  "rock",
  "rock",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "water",
  "water",
  "water",
  "water",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "rock",
  "rock",
  "rock",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "rock",
  "rock",
  undefined,
  "rock",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grass",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "rock",
  undefined,
  undefined,
  "rock",
  "rock",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "rock",
  "rock",
  undefined,
  undefined,
  undefined,
  "rock",
  "rock",
  "rock",
  "grassG",
  "grassG",
  "grassG",
  "grassG",
  "rock",
  "rock",
  "rock",
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "rock",
  "rock",
  "rock",
  "rock",
  "rock",
  "rock",
  undefined,
  undefined,
  undefined,
  undefined
];

function createGenXY() {
  for (var i = 0; i < generalTab.length; i++) {
    var y = (i - (i % szer)) / szer + 1;
    var x = (y - 1) * szer + 1 + i;
    generalTabXY[i] = [x, y];
  }
}
function execute() {
  for (i = 0; i < 25; i++) {
    var td = document.getElementsByTagName("td")[i]; ///To nie tak ma być
    if (seeTab[i] == undefined) {
      td.setAttribute("background", "#AD58FF.png");
    }
    if (seeTab[i] == "grass") {
      td.setAttribute("background", "grass.png");
    }
    if (seeTab[i] == "grassG") {
      td.setAttribute("background", "grassG.png");
    }
    if (seeTab[i] == "hero") {
      td.setAttribute("background", "hero.png");
    }
    if (seeTab[i] == "rock") {
      td.setAttribute("background", "rock.png");
    }
    if (seeTab[i] == "water") {
      td.setAttribute("background", "water.png");
    }
  }
  var h3 = document.getElementsByTagName("h3")[0];
  h3.innerHTML = "Zebrałeś " + licznik + " sztabek złota.";
  if (licznik == 95) {
    h3.innerHTML = "Zebrałeś całe złoto!";
  }
}
/*
 	if (seeTab[i] == undefined) {
 		td.background ="#AD58FF.png"
 	}
 	*/

function leftArrowPressed() {
  validate([-1, 0]);
}
function rightArrowPressed() {
  validate([1, 0]);
}
function downArrowPressed() {
  validate([0, 1]);
}
function upArrowPressed() {
  validate([0, -1]);
}

/*function najw(x){
	var tablica = [];
	for (var i = 0; i<generalTabXY.length; i++){
		tablica.push(generalTabXY[i][x])
	}
	return Math.max(...tablica)

}
*/

function validate([x, y]) {
  /*if  ( (hero[0]+ x > 0) && (hero[1] + y > 0) && (hero[0]+x < najw(0)) && (hero[1] + y < najw(1))  ){*/ //Jeśli  nie wychodzi poza planszę to:
  var a = hero[0] + x;
  var b = hero[1] + y;
  if (
    generalTab[(b - 1) * szer + (a - 1)] != "rock" &&
    generalTab[(b - 1) * szer + (a - 1)] != "water"
  ) {
    // jeśli nie wchodzi na skałę to:
    if (generalTab[(b - 1) * szer + (a - 1)] == "grassG") {
      generalTab[(b - 1) * szer + (a - 1)] = "grass";
      hero[0] = hero[0] + x;
      hero[1] = hero[1] + y;
      licznik++;
      createSeeTab();
    } else {
      hero[0] = hero[0] + x;
      hero[1] = hero[1] + y;
      createSeeTab();
    }
    //if (generalTab[(a-1)*szer + (b - 1)] == water){};
    //if (generalTab[(a-1)*szer + (b - 1)] == grassG){}
  }
}

function moveSelection(evt) {
  switch (evt.keyCode) {
    case 37:
      leftArrowPressed();
      break;
    case 39:
      rightArrowPressed();
      break;
    case 38:
      upArrowPressed();
      break;
    case 40:
      downArrowPressed();
      break;
  }
}

function docReady() {
  window.addEventListener("keydown", moveSelection);
  createSeeTab();
}
