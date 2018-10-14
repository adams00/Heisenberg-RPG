function docReady() {
  window.addEventListener("keydown", game.moveSelection);
  game.inicjalizeSeeTab();
  game.createSeeTab();
}
const game = {
  licznik: 0,
  seeTab: [],
  hero: [1, 5],
  l: 2,
  p: 2,
  d: 2,
  g: 2,
  moveSelection(evt) {
    switch (evt.keyCode) {
      case 37:
        game.validate([-1, 0]); //lewo
        break;
      case 39:
        game.validate([1, 0]); //prawo
        break;
      case 38:
        game.validate([0, -1]); //góra
        break;
      case 40:
        game.validate([0, 1]); //dół
        break;
    }
  },
  inicjalizeSeeTab() {
    // da się prościej (forum)
    for (let i = 0; i < this.l + this.p + 1; i++) {
      this.seeTab.push([]);
      for (let j = 0; j < this.l + this.p + 1; j++) {
        this.seeTab[i].push(null);
      }
    }
  },
  validate([x, y]) {
    let a = this.hero[0] + y;
    let b = this.hero[1] + x;
    let c = generalTab[a][b];
    if (c != "rock" && c != "water") {
      if (c == "grassG") {
        generalTab[a][b] = "grass";
        this.licznik++;
      }
      this.hero[0] = a;
      this.hero[1] = b;
      this.createSeeTab();
    }
  },
  createSeeTab() {
    let x = this.hero[0];
    let y = this.hero[1];
    let l = this.l;
    let g = this.g;
    let d = this.d;
    let p = this.p;
    for (let j = 0; j <= g + d; j++) {
      for (let i = 0; i <= l + p; i++) {
        let tabl = generalTab[x - l + i] && generalTab[x - l + i][y - g + j];
        this.seeTab[i][j] = tabl;
      }
    }
    this.seeTab[2][2] = "hero";
    this.execute();
  },
  execute() {
    let counterr = 0;
    this.seeTab.map(x => {
      x.map(y => {
        let td = document.getElementsByTagName("td")[counterr]; // jeśli będzie wszystko działało to spróbować querySelector [count]
        const places = ["grass", "grassG", "hero", "rock", "water"];
        if (places.indexOf(y) != -1) {
          td.setAttribute("background", `${y}.png`);
        } else {
          td.setAttribute("background", "#AD58FF.png");
        }
        counterr++;
        let h3 = document.getElementsByTagName("h3")[0];
        h3.innerHTML = "Zebrałeś " + this.licznik + " sztabek złota.";
        if (this.licznik == 95) {
          h3.innerHTML = "Zebrałeś całe złoto!";
        }
      });
    });
  }
};
