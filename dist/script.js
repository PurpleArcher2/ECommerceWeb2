// First
let counter1 = 0;
const addCard1 = document.getElementById("addCard1");
const deductCard1 = document.getElementById("deductCard1");
let resultCard1 = document.getElementById("resultCard1");
// Second
let counter2 = 0;
const addCard2 = document.getElementById("addCard2");
const deductCard2 = document.getElementById("deductCard2");
let resultCard2 = document.getElementById("resultCard2");
// third
let counter3 = 0;
const addCard3 = document.getElementById("addCard3");
const deductCard3 = document.getElementById("deductCard3");
let resultCard3 = document.getElementById("resultCard3");
// Fourth
let counter4 = 0;
const addCard4 = document.getElementById("addCard4");
const deductCard4 = document.getElementById("deductCard4");
let resultCard4 = document.getElementById("resultCard4");
// Fifth
let counter5 = 0;
const addCard5 = document.getElementById("addCard5");
const deductCard5 = document.getElementById("deductCard5");
let resultCard5 = document.getElementById("resultCard5");
// Sixth
let counter6 = 0;
const addCard6 = document.getElementById("addCard6");
const deductCard6 = document.getElementById("deductCard6");
let resultCard6 = document.getElementById("resultCard6");

addCard1.addEventListener("click", function () {
  counter1++;
  resultCard1.innerHTML = counter1;
});

deductCard1.addEventListener("click", function () {
  counter1--;
  if (counter1 < 0) {
    counter1 = 0;
  }
  resultCard1.innerHTML = counter1;
});

// Second
addCard2.addEventListener("click", function () {
  counter2++;
  resultCard2.innerHTML = counter2;
});

deductCard2.addEventListener("click", function () {
  counter2--;
  if (counter2 < 0) {
    counter2 = 0;
  }
  resultCard2.innerHTML = counter2;
});

//   Third
addCard3.addEventListener("click", function () {
  counter3++;
  resultCard3.innerHTML = counter3;
});

deductCard3.addEventListener("click", function () {
  counter3--;
  if (counter3 < 0) {
    counter3 = 0;
  }
  resultCard3.innerHTML = counter3;
});

//   Fourth
addCard4.addEventListener("click", function () {
  counter4++;
  resultCard4.innerHTML = counter4;
});

deductCard4.addEventListener("click", function () {
  counter4--;
  if (counter4 < 0) {
    counter4 = 0;
  }
  resultCard4.innerHTML = counter4;
});

//   Fifth
addCard5.addEventListener("click", function () {
  counter5++;
  resultCard5.innerHTML = counter5;
});

deductCard5.addEventListener("click", function () {
  counter5--;
  if (counter5 < 0) {
    counter5 = 0;
  }
  resultCard5.innerHTML = counter5;
});

//   Sixth

addCard6.addEventListener("click", function () {
  counter6++;
  resultCard6.innerHTML = counter6;
});

deductCard6.addEventListener("click", function () {
  counter6--;
  if (counter6 < 0) {
    counter6 = 0;
  }
  resultCard6.innerHTML = counter6;
});
