const cards = [
  {
    instrument: "telecaster",
    imageSrc: "assets/images/Telecaster.jpg",
    altText: "sunburst-guitar",
  },
  {
    instrument: "telecaster",
    imageSrc: "assets/images/Telecaster.jpg",
    altText: "sunburst-guitar",
  },
  {
    instrument: "stratocaster",
    imageSrc: "assets/images/Stratocaster.jpg",
    altText: "black-guitar",
  },
  {
    instrument: "stratocaster",
    imageSrc: "assets/images/Stratocaster.jpg",
    altText: "black-guitar",
  },
  {
    instrument: "bass",
    imageSrc: "assets/images/Precision.jpg",
    altText: "black-bass",
  },
  {
    instrument: "bass",
    imageSrc: "assets/images/Precision.jpg",
    altText: "black-bass",
  },
  {
    instrument: "mustang",
    imageSrc: "assets/images/Mustang.jpg",
    altText: "alder-wood-guitar",
  },
  {
    instrument: "mustang",
    imageSrc: "assets/images/Mustang.jpg",
    altText: "alder-wood-guitar",
  },
  {
    instrument: "jazzmaster",
    imageSrc: "assets/images/Jazzmaster.jpg",
    altText: "white-guitar",
  },
  {
    instrument: "jazzmaster",
    imageSrc: "assets/images/Jazzmaster.jpg",
    altText: "white-guitar",
  },
  {
    instrument: "jaguar",
    imageSrc: "assets/images/Jaguar.jpg",
    altText: "teal-guitar",
  },
  {
    instrument: "jaguar",
    imageSrc: "assets/images/Jaguar.jpg",
    altText: "teal-guitar",
  },
];

let counter = 0;
let firstCard = null;
let secondCard = null;
let canClick = true;
let countdownTimer = null;

const collection = document.querySelector(".collection");
const greatMemory = document.getElementById("great-memory");

collection.addEventListener("click", handleCardClick);

function handleCardClick(event) {
  const clickedCard = event.target.closest(".record");
  if (!clickedCard || !canClick) {
    return;
  }

  if (clickedCard === firstCard) {
    return; // Ignore a doulbe click
  }

  clickedCard.classList.add("clicked");

  if (!firstCard) {
    firstCard = clickedCard;
  } else {
    secondCard = clickedCard;
    canClick = false;
    checkCardMatch();
  }
}

function checkCardMatch() {
  const instrument1 = firstCard.getAttribute("instrument");
  const instrument2 = secondCard.getAttribute("instrument");

  if (instrument1 === instrument2) {
    setTimeout(() => {
      firstCard.classList.add("checked");
      secondCard.classList.add("checked");
      resetCards();
      checkGameCompletion();
    }, 1500);
  } else {
    setTimeout(() => {
      firstCard.classList.remove("clicked");
      secondCard.classList.remove("clicked");
      resetCards();
    }, 1855);
  }
}

function resetCards() {
  firstCard = null;
  secondCard = null;
  canClick = true;
}

function checkGameCompletion() {
  const checkedCards = document.querySelectorAll(".record.checked");
  if (checkedCards.length === cards.length) {
    clearTimeout(countdownTimer);
    countdownTimer = setTimeout(resetGame, 5000);
    greatMemory.style.display = "block";
  }
}

function resetGame() {
  const shuffledCards = shuffleCards(cards);
  collection.innerHTML = "";

  shuffledCards.forEach((card) => {
    const record = document.createElement("div");
    record.classList.add("record");
    record.setAttribute("instrument", card.instrument);

    const image = document.createElement("img");
    image.src = card.imageSrc;
    image.alt = card.altText;
    image.height = 200;
    image.width = 200;

    record.appendChild(image);
    collection.appendChild(record);
  });

  greatMemory.style.display = "none";
  startTimer();
}
function startTimer() {
  clearTimeout(countdownTimer);
  countdownTimer = setTimeout(resetGame, 120000);
}

function shuffleCards(cardArray) {
  const shuffledArray = [...cardArray];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

resetGame();
