document.addEventListener("DOMContentLoaded", function () {
  const complimentGenerator = document.getElementById("compliment-generator");
  const compliments = [
    "You're  an awesome friend.",
    "You're a great listener",
    "You have a fantastic sense of humour",
    "You're incredibly talented.",
    "You're a hard worker.",
    "You're always so kind and thoughtful.",
    "You're a great problem solver.",
    "You have a wonderful smile.",
    "You're very creative.",
    "You're  so supportive."
  ]
  //create a button to generate a random compliment
  const generateButton = document.createElement("button");
  generateButton.textContent = "Generate compliment";

  const complimentDisplay = document.createElement("p");

  //add event listener to the generate button

  generateButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const randomCompliment = compliments[randomIndex];
    complimentDisplay.textContent = randomCompliment;
  })
  complimentGenerator.appendChild(generateButton);
  complimentGenerator.appendChild(complimentDisplay);


})