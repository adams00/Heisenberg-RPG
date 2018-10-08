function docReady() {
  window.addEventListener("keydown", game.moveSelection);
  game.createSeeTab();
}
const game = {
  licznik: 0,
  szer: 14,
  hero: [7, 13],
  seeTab: [],
  moveSelection: function(evt) {
    switch (evt.keyCode) {
      case 37:
        game.leftArrowPressed();
        break;
      case 39:
        game.rightArrowPressed();
        break;
      case 38:
        game.upArrowPressed();
        break;
      case 40:
        game.downArrowPressed();
        break;
    }
  },
  leftArrowPressed: function() {
    this.validate([-1, 0]);
  },
  rightArrowPressed: function() {
    this.validate([1, 0]);
  },
  downArrowPressed: function() {
    this.validate([0, 1]);
  },
  upArrowPressed: function() {
    this.validate([0, -1]);
  },
  validate: function([x, y]) {
    let a = this.hero[0] + x;
    let b = this.hero[1] + y;
    let stand = generalTab[(b - 1) * this.szer + (a - 1)];
    if (stand != "rock" && stand != "water") {
      // jeśli nie wchodzi na skałę to:
      if (stand == "grassG") {
        generalTab[(b - 1) * this.szer + (a - 1)] = "grass";
        this.licznik++;
      }
      this.hero[0] = a;
      this.hero[1] = b;
      this.createSeeTab();
    }
  },
  createSeeTab: function() {
    var counter = 0;
    for (var y = this.hero[1] - 2; y <= this.hero[1] + 2; y++) {
      for (var x = this.hero[0] - 2; x <= this.hero[0] + 2; x++) {
        if (x < 15 && x > 0) {
          this.seeTab[counter] = generalTab[(y - 1) * this.szer + (x - 1)];
          counter++;
        } else {
          this.seeTab[counter] = undefined;
          counter++;
        }
      }
      this.seeTab[12] = "hero";
      this.execute();
    }
  },
  execute: function() {
    for (let i = 0; i < 25; i++) {
      let td = document.getElementsByTagName("td")[i]; ///To nie tak ma być
      let box = this.seeTab[i];
      let places = ["grass", "grassG", "hero", "rock", "water"];
      if (places.indexOf(box) != -1) {
        td.setAttribute("background", `${box}.png`);
      } else {
        td.setAttribute("background", "#AD58FF.png");
      }
    }
    var h3 = document.getElementsByTagName("h3")[0];
    h3.innerHTML = "Zebrałeś " + this.licznik + " sztabek złota.";
    if (this.licznik == 95) {
      h3.innerHTML = "Zebrałeś całe złoto!";
    }
  }
};
