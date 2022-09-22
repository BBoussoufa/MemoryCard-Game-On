const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 7;

//link text
playerLivesCount.textContent = playerLives;

// get the object

const getTheData = () => [
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
  cardData = getTheData();
  console.log(cardData);
  cardData.sort(() => Math.random() - 0.4);
  return cardData;
  //console.log(cardData);
};

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
    card.setAttribute("name", elem.name);
    card.setAttribute('isClicked', false)

    // Attach the cards to the section
    section.appendChild(card);
    card.appendChild(cardFace);
    card.appendChild(cardBack);

    const flipCard = () => {
      card.classList.toggle("toggleCard");
      card.setAttribute('isClicked', true)
      console.log(card);
      
    };
    card.addEventListener("click", flipCard);
    const checkCard = () => {
      const card = document.querySelectorAll(".card");
       card.classList.add('flipped')
       const flippedCard = document.querySelectorAll('.flipped')
    
      if (flippedCard[0].getAttribute("name") === flippedCard[1].getAttribute("name")) {
        console.log("matched");
      } else {
        console.log("No match");
      }
    };
    console.log(card); 
  });

};


cardGenerator();
