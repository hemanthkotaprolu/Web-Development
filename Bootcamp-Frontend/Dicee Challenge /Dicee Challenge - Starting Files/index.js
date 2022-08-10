// Random number generated
var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

// create a string using the random number like "dice " + randomNumber1
var imageSource1 = `images/dice${randomNumber1}.png`;
var imageSource2 = `images/dice${randomNumber2}.png`;

console.log(imageSource1);
console.log(imageSource2);

// get the img elemts and change the attribute "src" value to the string which we created
var image1 = document.querySelectorAll("img")[0]
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src",imageSource1);
image2.setAttribute("src",imageSource2);


if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw!";
} else if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = " 🚩Player 1 Wins";
} else {
    document.querySelector("h1").textContent = " Player 2 Wins🚩";
}