addEventListener("load", function () {
  randomize(questions);
  prepareQuizz();
  checkQuizz();
});
let result = document.getElementById("result");
result.addEventListener("click", function () {
  getResultOfQuizz();
});
function randomize(tab) {
  var i, j, tmp;
  for (i = tab.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    tmp = tab[i];
    tab[i] = tab[j];
    tab[j] = tmp;
  }
  return tab;
}

function prepareQuizz() {
  let div = document.getElementById("quizz");
  let row = document.createElement("div");
  row.className = "row";
  for (let i = 0; i < questions.length; i++) {
    let col = document.createElement("div");
    col.className = "col s12 m6 offset-m3";
    row.append(col);
    let card = document.createElement("div");
    card.className = "card lime lighten-2";
    col.append(card);
    if (questions[i].img) {
      let cardImg = document.createElement("div");
      cardImg.className = "card-image";
      cardImg.innerHTML = `<img src="${questions[i].img}">`;
      card.append(cardImg);
    }
    let cardContent = document.createElement("div");
    cardContent.className = "card-content black-text";
    card.append(cardContent);
    let cardTitle = document.createElement("div");
    cardTitle.className = "card-title";
    cardTitle.setAttribute("id", `${i}`);
    cardTitle.innerText = `Question ${i + 1}`;
    cardContent.append(cardTitle);
    let p = document.createElement("p");
    p.innerText = questions[i].question;
    cardContent.append(p);

    //action card 1 (radio button)
    let cardAction = document.createElement("div");
    cardAction.className = "card-action";
    questions[i].choice.forEach((element) => {
      let p = document.createElement("p");
      p.innerHTML = `
        <label>
        <input name="question${i}" type="radio" />
        <span class="black-text">${element}</span>
        </label>
        `;
      cardAction.appendChild(p);
    });
    card.append(cardAction);

    //action card 2 (valider button)
    let cardAction2 = document.createElement("div");
    cardAction2.className = "card-action";
    let a = document.createElement("a");
    a.className = "waves-effect waves-light btn quizz-btn";
    a.innerText = "valider";
    cardAction2.appendChild(a);
    card.append(cardAction2);
    div.append(row);
  }
}

function checkQuizz() {
  let point = 1;
  let buttons = document.getElementsByClassName("quizz-btn");
  for (const button of buttons) {
    button.addEventListener("click", function (e) {
      let cardTitle =
        e.target.parentElement.parentElement.getElementsByClassName(
          "card-title"
        );
      let cardAction2 = e.target.parentElement;
      let idQuizz = cardTitle[0].getAttribute("id");
      inputs =
        button.parentElement.previousElementSibling.getElementsByTagName(
          "input"
        );
      //   console.log(inputs);
      for (const input of inputs) {
        if (input.checked) {
          if (
            questions[idQuizz].answer === input.nextElementSibling.innerText
          ) {
            input.nextElementSibling.className = "green-text";
            e.target.setAttribute("disabled", "");
            cardAction2.innerHTML += `<span class="badge quizz-badge"> Point: ${point}/1 </span>`;
          } else {
            input.nextElementSibling.className = "red-text";
          }

          let incorrectElement =
            input.nextElementSibling.classList.contains("red-text");
          if (incorrectElement) {
            point = 0;
          } else point = 1;
        }
      }
    });
  }
}

function getResultOfQuizz() {
  let point = 0;
  badges = document.getElementsByClassName("quizz-badge");
  for (let i = 0; i < badges.length; i++) {
    console.log(badges[i].innerText);
    if (badges[i].innerText === "Point: 1/1") point++;
  }
  element = document.createElement("p");
  element.innerHTML = `Score: ${point}/${badges.length}`;
  result.parentElement.appendChild(element);
}
