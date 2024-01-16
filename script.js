const questionLabel = document.getElementById("questionText");
const answerLabel = document.getElementById("answer");
const nappi1 = document.getElementById("nappi1");
const nappi2 = document.getElementById("nappi2");
const nappi3 = document.getElementById("nappi3");
const nappi4 = document.getElementById("nappi4");
const nappi5 = document.getElementById("nappi5");


let questions = [
    {
        question: "Mikä on Suomen pääkaupunki?",
        rightAnswer: "Helsinki",
        wrongs: ["Oulu", "Tampere", "Vaasa", "Vantaa"]
    },    
    {
        question: "Mikä on Ruotsin pääkaupunki?",
        rightAnswer: "Tukholma",
        wrongs: ["Haaparanta", "Malmö", "Göteborg", "Jönköping"]
    },
    {
        question: "Mikä on Saksan pääkaupunki?",
        rightAnswer: "Berliini",
        wrongs: ["München", "Frankfurt", "Hampuri", "Köln"]
    },
    {
        question: "Mikä on Italian pääkaupunki?",
        rightAnswer: "Rooma",
        wrongs: ["Milano", "Napoli", "Torino", "Firenze"]
    },
    {
        question: "Mikä on Espanjan pääkaupunki?",
        rightAnswer: "Madrid",
        wrongs: ["Barcelona", "Valencia", "Sevilla", "Malaga"]
    },
    {
        question: "Mikä on Australian pääkaupunki?",
        rightAnswer: "Canberra",
        wrongs: ["Sydney", "Melbourne", "Brisbane", "Perth"]
    },
    {
        question: "Mikä on Brasilian pääkaupunki?",
        rightAnswer: "Brasília",
        wrongs: ["Rio de Janeiro", "São Paulo", "Salvador", "Fortaleza"]
    },
    {
        question: "Mikä on Intian pääkaupunki?",
        rightAnswer: "Uusi-Delhi",        
        wrongs: ["Mumbai", "Kolkata", "Bangalore", "Chennai"]
    },
    {
        question: "Mikä on Kanadan pääkaupunki?",
        rightAnswer: "Ottawa",
        wrongs: ["Toronto", "Montreal", "Vancouver", "Calgary"]
    },
    {
        question: "Mikä on Kiinan pääkaupunki?",
        rightAnswer: "Peking",
        wrongs: ["Shanghai", "Chongqing", "Guangzhou", "Shenzhen"]
    },
    {
        question: "Mikä on Venäjän pääkaupunki?",
        rightAnswer: "Moskova",
        wrongs: ["Pietari", "Novosibirsk", "Jekaterinburg", "Kazan"]
    }
];

let currentQuestion;
let score = 0;
let attempts = 15;

function askQuestion () {
    let randomIndex = Math.floor(Math.random() * questions.length);
    currentQuestion = questions[randomIndex];

    let buttons = shuffle([nappi1, nappi2, nappi3, nappi4, nappi5]);
    buttons[0].innerHTML = currentQuestion.rightAnswer;
    buttons[1].innerHTML = currentQuestion.wrongs[0];
    buttons[2].innerHTML = currentQuestion.wrongs[1];
    buttons[3].innerHTML = currentQuestion.wrongs[2];
    buttons[4].innerHTML = currentQuestion.wrongs[3];

    questionLabel.innerHTML = currentQuestion.question;

    if (attempts <= 0) {
        alert("Hävisit pelin. Yritä uudelleen!");
        location.reload();
        return;
    }
}

function answerHandler() {
    answerLabel.innerHTML = "Vastaus oli " + currentQuestion.rightAnswer;
    attempts--;
    askQuestion();
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

document.getElementById("lisaaPiste").addEventListener("click", function() {
    score++;
    document.getElementById("pisteet").innerHTML = "Pisteet: " + score;

    if (score >= 10) {
        alert("Voitit pelin! Onneksi olkoon!");
        location.reload();
    } else {
        askQuestion();
    }
});

askQuestion();

