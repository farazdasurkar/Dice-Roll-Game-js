var rn1 = Math.floor(Math.random() * 6) + 1

var ri1 = "dice" + rn1 + ".png"
var randomscroceimgae1 = "images/" + ri1;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomscroceimgae1);



var rn2 = Math.floor(Math.random() * 6) + 1

var ri2 = "dice" + rn2 + ".png"
var randomscroceimgae2 = "images/" + ri2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomscroceimgae2);

if (rn1 > rn2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins! ✈"
}
else if (rn1 < rn2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
