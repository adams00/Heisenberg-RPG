var licznik = 0;
var szer = 14;
var generalTabXY = [];
var hero = [7, 13];
var seeTab = [];

<<<<<<< HEAD
function createSeeTab() {
  var counter = 0;
  for (let y = hero[1] - 2; y <= hero[1] + 2; y++) {
    for (let x = hero[0] - 2; x <= hero[0] + 2; x++) {
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

function createGenXY() {
  for (var i = 0; i < generalTab.length; i++) {
    var y = (i - (i % szer)) / szer + 1;
    var x = (y - 1) * szer + 1 + i;
    generalTabXY[i] = [x, y];
  }
}
function execute() {
  for (let i = 0; i < 25; i++) {
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
=======
function docReady() {
  window.addEventListener("keydown", moveSelection);
  createSeeTab();
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
>>>>>>> ea820d00ea8d5462cfb6d0b4159155721151e351
  }
}

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

function validate([x, y]) {
<<<<<<< HEAD
  /*if  ( (hero[0]+ x > 0) && (hero[1] + y > 0) && (hero[0]+x < najw(0)) && (hero[1] + y < najw(1))  ){*/ //Jeśli  nie wychodzi poza planszę to:
  let a = hero[0] + x;
  let b = hero[1] + y;
  if (
    generalTab[(b - 1) * szer + (a - 1)] != "rock" &&
    generalTab[(b - 1) * szer + (a - 1)] != "water"
  ) {
=======
  let a = hero[0] + x;
  let b = hero[1] + y;
  let stand = generalTab[(b - 1) * szer + (a - 1)];
  if (stand != "rock" && stand != "water") {
>>>>>>> ea820d00ea8d5462cfb6d0b4159155721151e351
    // jeśli nie wchodzi na skałę to:
    if (stand == "grassG") {
      generalTab[(b - 1) * szer + (a - 1)] = "grass";
      licznik++;
    }
    hero[0] = a;
    hero[1] = b;
    createSeeTab();
  }
}

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

function execute() {
  for (let i = 0; i < 25; i++) {
    let td = document.getElementsByTagName("td")[i]; ///To nie tak ma być
    let box = seeTab[i];
    let places = ["grass", "grassG", "hero", "rock", "water"];
    if (places.indexOf(box) != -1) {
      td.setAttribute("background", `${box}.png`);
    } else {
      td.setAttribute("background", "#AD58FF.png");
    }
  }
  var h3 = document.getElementsByTagName("h3")[0];
  h3.innerHTML = "Zebrałeś " + licznik + " sztabek złota.";
  if (licznik == 95) {
    h3.innerHTML = "Zebrałeś całe złoto!";
  }
}
