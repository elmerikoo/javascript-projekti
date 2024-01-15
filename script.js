const questionLabel = document.getElementById("questionText");
const answerLabel = document.getElementById("answer");
const nappi1 = document.getElementById("nappi1");
const nappi2 = document.getElementById("nappi2");
const nappi3 = document.getElementById("nappi3");
const nappi4 = document.getElementById("nappi4");

let questions = [
    {
        question: "Mikä on suomen pääkaupunki?",
        rightAnswer: "Helsinki",
        wrongs: ["Oulu", "Tampere", "Vaasa"]
    }
]

function answerHandler() {
    console.log("Terve");
}