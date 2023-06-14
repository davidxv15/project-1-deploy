// let counter = 0;
// let firstSpin = "";
// let secondSpin = "";

// const collection = document.querySelectorAll(".collection .record");
// collection.forEach((record) => {
//     record.addEventListener("click", () => {
//      record.classList.add("clicked");

//     if (counter === 0) {
//         firstSpin = record.getAttribute("instrument");
//         counter++;
//     } else {
//         secondSpin = record.getAttribute("instrument");
//         counter = 0;
//     }

//     if (firstSpin === secondSpin) {
//         const itsAMatch = document.querySelectorAll(
//             ".record[instrument='" + firstSpin + "']"
//         );

//         itsAMatch[0].classList.add("checked");
//         itsAMatch[0].classList.remove("clicked");
//         itsAMatch[1].classList.add("checked");
//         itsAMatch[1].classList.remove("clicked");
//     } else {
//         const notAMatch = document.querySelectorAll(".record.clicked");

//         setTimeout(() => {
//             notAMatch[0].classList.remove("clicked");
//             notAMatch[1].classList.remove("clicked");
//         }, 2300);
//     }

// const greatMemory = document.getElementById("great-memory");
//     greatMemory.style.display = "none";

//     });
// });
