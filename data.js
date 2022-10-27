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
var clone;

btnRetourMenu.addEventListener("click", ReturnToMenu);

function addDiv(x, e = "choi") {
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
      changeTitle("Connaitre le nombre de grammes");
      label01.textContent = "Glu pour 100 gr";
      label02.textContent = "Glu voulus";
      setValider("getGr");
      reveal(choixContainer);
      hide(menu);
      hideAll(arrayDiv);
      reveal(btnRetourMenu);
      break;
    case "Connaitre le nombre de glucides":
      changeTitle("Connaitre le nombre de glucides");
      label01.textContent = "Glu pour 100 gr";
      label02.textContent = "Gr voulus";
      setValider("getGlu");
      reveal(choixContainer);
      hide(menu);
      hideAll(arrayDiv);
      reveal(btnRetourMenu);
      break;
    case "Unités à prendre si je ne mange pas et que mon taux est élevé":
      changeTitle(
        "Unités à prendre si je ne mange pas et que mon taux est élevé"
      );
      label01.textContent = "Mon taux actuel";
      setValider("doses");
      reveal(choixContainer);
      hide(choix02);
      hide(menu);
      hideAll(arrayDiv);
      reveal(btnRetourMenu);
      break;
    case "Voir mes bolus selon mon taux":
      label01.textContent = "Mon taux actuel";
      setValider("bolus");
      reveal(choixContainer);
      hide(choix02);
      hide(menu);
      hideAll(arrayDiv);
      reveal(btnRetourMenu);
      break;
    case "Valider":
      input01 = document.querySelector("#input01").value;
      input02 = document.getElementById("input02").value;

      hide(choixContainer);

      //answer.textContent = GetGlu();
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
  //clone = btnValider.cloneNode(true);
  btnValider.removeEventListener("click", GetGlu);
  btnValider.removeEventListener("click", GetGr);
  btnValider.removeEventListener("click", Doses);
  btnValider.removeEventListener("click", Bolus);
  if (x == "getGlu") {
    btnValider.addEventListener("click", GetGlu);
  } else if (x == "getGr") {
    btnValider.addEventListener("click", GetGr);
  } else if (x == "doses") {
    btnValider.addEventListener("click", Doses);
  } else if (x == "bolus") {
    btnValider.addEventListener("click", Bolus);
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

function GetGr() {
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

function Bolus() {
  input01 = document.querySelector("#input01").value;
  if (input01 < 0.8) {
    answer.textContent =
      "Ton taux est de " +
      input01 +
      ". Tu dois enlever 1 unité à ton bolus fixe.";
  } else if (input01 >= 0.8 && input01 < 1.7) {
    answer.textContent =
      "Ton taux est de " + input01 + ". Tu dois faire ton bolus fixe.";
  } else if (input01 >= 1.7 && input01 < 2.4) {
    answer.textContent =
      "Ton taux est de " +
      input01 +
      ". Tu dois ajouter 1 unité à ton bolus fixe.";
  } else if (input01 >= 2.4 && input01 < 3.4) {
    answer.textContent =
      "Ton taux est de " +
      input01 +
      ". Tu dois ajouter 2 unités à ton bolus fixe.";
  } else if (input01 >= 3.4 && input01 < 4.4) {
    answer.textContent =
      "Ton taux est de " +
      input01 +
      ". Tu dois ajouter 3 unités à ton bolus fixe.";
  } else if (input01 >= 4.4 && input01 < 5.3) {
    answer.textContent =
      "Ton taux est de " +
      input01 +
      ". Tu dois ajouter 4 unités à ton bolus fixe.";
  } else {
    answer.textContent =
      "Si tu es HI, tu dois ajouter 5 unités à ton bolus fixe.";
  }
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
  document.querySelector("#answer").textContent = "";
  revealAll();
  hide(btnRetourMenu);
  document.querySelector("#input01").value = "";
  document.querySelector("#input02").value = "";
}

function changeTitle(x) {
  document.querySelector("#title").textContent = x;
}
