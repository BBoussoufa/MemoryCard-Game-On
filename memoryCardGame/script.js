const section = document.querySelector('section')
const playerLivesCount = document.querySelector('span')
const playerLives = 4;

//link text
playerLivesCount.textContent = playerLives;


// get the object

  const getTheData = () => [ 
     {imgSrc: './Images/imgNature1.jpg',  name:'nature1'},
     {imgSrc: './Images/imgNature2.jpg' , name:'nature2'},
     {imgSrc: './Images/imgNature3.jpg' , name:'nature3'},
     {imgSrc: './Images/imgNature4.jpg' , name:'nature4'},
     {imgSrc: './Images/imgNature5.jpg' , name:'nature5'},
     {imgSrc: './Images/imgNature6.jpg' , name:'nature6'},
     {imgSrc: './Images/imgNature7.jpg' , name:'nature7'},
     {imgSrc: './Images/imgNature8.jpg' , name:'nature8'},
     {imgSrc: './Images/imgNature2.jpg' , name:'nature2'},
     {imgSrc: './Images/imgNature3.jpg' , name:'nature3'},
     {imgSrc: './Images/imgNature4.jpg' , name:'nature4'},
     {imgSrc: './Images/imgNature5.jpg' , name:'nature5'},
     {imgSrc: './Images/imgNature6.jpg' , name:'nature6'},
     {imgSrc: './Images/imgNature7.jpg' , name:'nature7'},
     {imgSrc: './Images/imgNature8.jpg' , name:'nature8'},
     {imgSrc: './Images/imgNature1.jpg',  name:'nature1'},
];
  const randomize = () => {
    cardData = getTheData();
    console.log(cardData);
    cardData.sort(() => Math.random() - 0.4);
    return cardData;
    //console.log(cardData);
  }

const cardGenerator = () => {
  cardData = randomize();
  // Generate the Html
  cardData.forEach((ele) => {
  const card = document.createElement('div');
  const cardFace = document.createElement('img');
  const cardBack = document.createElement('div');
  card.classList = 'card'
  cardFace.classList = 'face'
  cardBack.classList = 'back'
  // attach the cards to the section
  section.appendChild(card);
  card.appendChild(cardFace);
  card.appendChild(cardBack);
  cardFace.src = ele.imgSrc
   
  });
  
  


};

cardGenerator();