const questionLabel = document.getElementById("questionText");
const answerLabel = document.getElementById("answer");
const nappi1 = document.getElementById("nappi1");
const nappi2 = document.getElementById("nappi2");
const nappi3 = document.getElementById("nappi3");
const nappi4 = document.getElementById("nappi4");

let questions = [
    {
        question: "Mikä on Suomen pääkaupunki?",
        rightAnswer: "Helsinki",
        wrongs: ["Oulu", "Tampere", "Vaasa"]
    },    
    {
        question: "Mikä on Ruotsin pääkaupunki?",
        rightAnswer: "Tukholma",
        wrongs: ["Haaparanta", "Malmö", "Göteborg"]
    },
];

function askQuestion () {
    let randomIndex = Math.floor(Math.random() * questions.length);
    let currentQuestion = questions[randomIndex];

    let buttons = shuffle([nappi1, nappi2, nappi3, nappi4]);
    buttons[0].innerHTML = currentQuestion.rightAnswer;
    buttons[1].innerHTML = currentQuestion.wrongs[0];
    buttons[2].innerHTML = currentQuestion.wrongs[1];
    buttons[3].innerHTML = currentQuestion.wrongs[2];

    questionLabel.innerHTML = currentQuestion.question;
}

askQuestion();

function answerHandler() {
    console.log("Terve");
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

console.log(shuffle([1,2,3,4,5])); //shuffle function testaus