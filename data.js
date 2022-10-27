var arrayDiv = [];
var choice;
var choixContainer = document.querySelector("#choix-container");
var choix02 = document.querySelector("#choix02");
var input01 = document.querySelector("#input01").value;
var input02 = document.getElementById("input02").value;
var menu = document.querySelector("#menu");
var label01 = document.querySelector("#label01");
var label02 = document.querySelector("#label02");
var answer = document.querySelector("#answer");
var btnValider = document.querySelector("#button-choix");
var btnRetourMenu = document.querySelector("#retour-menu");

btnRetourMenu.addEventListener("click", ReturnToMenu);

function addDiv(x, e = "choi") {
  if (x == "fouiller") {
    e = "fouiller";
  } else if (x == "enigme") {
    e = "enigme";
  } else {
    e = "choi";
  }
  let divbefore = document.querySelector("#menu");
  let div = document.createElement("div");
  div.className = e;
  div.textContent = x.charAt(0).toUpperCase() + x.slice(1);
  arrayDiv.push(div);
  appendAfter(div, divbefore, x);
}

function appendAfter(divToAppend, siblingBefore, x) {
  if (siblingBefore.nextSibling) {
    siblingBefore.parentNode.insertBefore(
      divToAppend,
      siblingBefore.nextSibling
    );
  } else {
    siblingBefore.parentNode.appendChild(divToAppend);
  }
  if (x == "fouiller") {
    btnFouiller = document.querySelector(".fouiller");
    btnFouiller.addEventListener("click", actionFouiller);
  } else {
    var btnDirection = document.querySelector(".choi");
    btnDirection.addEventListener("click", validChoice);
  }
}

function validChoice(e) {
  choice = e.target.textContent;
  switch (choice) {
    case "Connaitre le nombre de grammes":
      label01.textContent = "Glu pour 100 gr";
      label02.textContent = "Glu voulus";
      setValider("getGr");
      reveal(choixContainer);
      hide(menu);
      hideAll(arrayDiv);
      reveal(btnRetourMenu);
      break;
    case "Connaitre le nombre de glucides":
      label01.textContent = "Glu pour 100 gr";
      label02.textContent = "Gr voulus";
      setValider("getGlu");
      reveal(choixContainer);
      hide(menu);
      hideAll(arrayDiv);
      reveal(btnRetourMenu);
      break;
    case "Connaitre le nombre d'unités à prendre":
      label01.textContent = "Mon taux actuel";
      setValider("doses");
      reveal(choixContainer);
      hide(choix02);
      hide(menu);
      hideAll(arrayDiv);
      reveal(btnRetourMenu);
      break;
    case "Valider":
      //e.preventDefault();
      input01 = document.querySelector("#input01").value;
      input02 = document.getElementById("input02").value;

      hide(choixContainer);

      answer.textContent = GetGlu();
      break;

    default:
      break;
  }
  /*if (choice == "Connaitre le nombre de glucides") {
    var script = document.createElement("script");
    script.onload = function () {};
    script.src = "GetGlu.js";
    reveal(choixContainer);
    hide(menu);
    hideAll(arrayDiv);

    document.head.appendChild(script); //or something of the likes
  }*/
}

function hide(e) {
  e.style.display = "none";
}

function reveal(e) {
  e.style.display = "block";
}

function hideAll() {
  arrayDiv.forEach((e) => {
    hide(e);
  });
}

function revealAll() {
  arrayDiv.forEach((e) => {
    reveal(e);
  });
}

function setValider(x) {
  if (x == "getGlu") {
    btnValider.addEventListener("click", GetGlu);
  } else if (x == "getGr") {
    btnValider.addEventListener("click", GetGr);
  } else if (x == "doses") {
    btnValider.addEventListener("click", Doses);
  }
}

function GetGlu() {
  input01 = document.querySelector("#input01").value;
  input02 = document.getElementById("input02").value;
  formule = (input01 / 100) * input02;
  answer.textContent =
    "Pour les " +
    input02 +
    " grammes voulus, tu auras " +
    formule +
    " glucides.";
  reveal(answer);
}

function GetGr(gluPour100 = input01, gluVoulus = input02) {
  input01 = document.querySelector("#input01").value;
  input02 = document.getElementById("input02").value;
  formule = (100 / input01) * input02;
  answer.textContent =
    "Pour les " +
    input02 +
    " glucides voulus, tu dois prendre " +
    formule +
    " grammes.";
  reveal(answer);
}

function Doses() {
  input01 = document.querySelector("#input01").value;
  formule = input01 * 3 + 1;
  answer.textContent =
    "Ton taux est de " + input01 + ". Tu dois prendre " + formule + " unités.";
  reveal(answer);
}

hide(choixContainer);
hide(answer);
hide(btnRetourMenu);

function ReturnToMenu() {
  changeTitle("Menu");
  reveal(choix02);
  hide(choixContainer);
  hide(answer);
  revealAll();
  hide(btnRetourMenu);
  document.querySelector("#input01").value = "";
  document.querySelector("#input02").value = "";
}

function changeTitle(x) {
  document.querySelector("#title").textContent = x;
}
