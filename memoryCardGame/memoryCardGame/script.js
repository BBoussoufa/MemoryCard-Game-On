const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");

let playerLives = 4;
updatePlyerLives();

// get the object
const getImages = () => [
  { imgSrc: "./Images/imgNature1.jpg", name: "nature1" },
  { imgSrc: "./Images/imgNature2.jpg", name: "nature2" },
  { imgSrc: "./Images/imgNature3.jpg", name: "nature3" },
  { imgSrc: "./Images/imgNature4.jpg", name: "nature4" },
  { imgSrc: "./Images/imgNature5.jpg", name: "nature5" },
  { imgSrc: "./Images/imgNature6.jpg", name: "nature6" },
  { imgSrc: "./Images/imgNature7.jpg", name: "nature7" },
  { imgSrc: "./Images/imgNature8.jpg", name: "nature8" },
  { imgSrc: "./Images/imgNature2.jpg", name: "nature2" },
  { imgSrc: "./Images/imgNature3.jpg", name: "nature3" },
  { imgSrc: "./Images/imgNature4.jpg", name: "nature4" },
  { imgSrc: "./Images/imgNature5.jpg", name: "nature5" },
  { imgSrc: "./Images/imgNature6.jpg", name: "nature6" },
  { imgSrc: "./Images/imgNature7.jpg", name: "nature7" },
  { imgSrc: "./Images/imgNature8.jpg", name: "nature8" },
  { imgSrc: "./Images/imgNature1.jpg", name: "nature1" },
];
const randomize = () => {
  cardData = getImages();
  console.log(cardData);
  cardData.sort(() => Math.random() - 0.4);
  return cardData;
};
flipCardArray = [];

const flipCard = (e) => {
  if (playerLives <= 0) {
    return;
  }
  const card = e.target;

  card.classList.toggle("toggleCard");

  card.classList.add("flipped");
  flipCardArray.push(card);

  console.dir(card);
  console.log(flipCardArray);

  if (flipCardArray.length == 2) {
    if (
      flipCardArray[0].getAttribute("name") ===
      flipCardArray[1].getAttribute("name")
    ) {
      console.log("match");
      console.dir(flipCardArray[0]);
      for (let i = 0; i <= flipCardArray.length; i++) {
        flipCardArray.pop();
      }
    } else {
      playerLives = playerLives - 1;
      if (playerLives > 0) {
        updatePlyerLives();
      } else {
        return (playerLivesCount.textContent = "Game Over");
      }
      updatePlyerLives();
    }
    if (flipCardArray.length == 2) {
      console.log("No match");

      for (let i = 0; i < flipCardArray.length; i++) {
        console.log(i);
        console.log(flipCardArray.length);
        let curr = flipCardArray[i];
        setTimeout(function () {
          curr.classList.toggle("toggleCard");
        }, 500);
      }
      for (let i = 0; i < 2; i++) {
        flipCardArray.pop();
      }
      console.log("array", flipCardArray);
      console.log(flipCardArray.length);
    }
  }
};
//update player lives
function updatePlyerLives() {
  playerLivesCount.textContent = playerLives;
}

const cardGenerator = () => {
  cardData = randomize();

  // Generate the Html
  cardData.forEach((elem) => {
    const card = document.createElement("div");
    const cardFace = document.createElement("img");
    const cardBack = document.createElement("div");
    card.classList = "card";
    cardFace.classList = "cardFace";
    cardBack.classList = "cardBack";

    // Attach the info to the cards
    cardFace.src = elem.imgSrc;
    cardBack.setAttribute("name", elem.name);

    // Attach the cards to the section
    card.appendChild(cardFace);
    card.appendChild(cardBack);
    section.appendChild(card);
    console.log(card);

    card.addEventListener("click", flipCard);
  });
};

cardGenerator();
