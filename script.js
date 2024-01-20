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
    },
    {
        question: "Mikä on Yhdysvaltojen pääkaupunki?",
        rightAnswer: "Washington D.C.",
        wrongs: ["New York", "Los Angeles", "Chicago", "San Francisco"]
    },
    {
        question: "Mikä on Japanin pääkaupunki?",
        rightAnswer: "Tokio",
        wrongs: ["Osaka", "Kyoto", "Nagoya", "Sapporo"]
    },
    {
        question: "Mikä on Ranskan pääkaupunki?",
        rightAnswer: "Pariisi",
        wrongs: ["Marseille", "Lyon", "Toulouse", "Nizza"]
    },
    {
        question: "Mikä on Etelä-Afrikan pääkaupunki?",
        rightAnswer: "Pretoria",
        wrongs: ["Johannesburg", "Kapkaupunki", "Durban", "Port Elizabeth"]
    },
    {
        question: "Mikä on Meksikon pääkaupunki?",
        rightAnswer: "México",
        wrongs: ["Guadalajara", "Monterrey", "Puebla", "Cancún"]
    },
    {
        question: "Mikä on Egyptin pääkaupunki?",
        rightAnswer: "Kairo",
        wrongs: ["Aleksandria", "Giza", "Luxor", "Aswan"]
    },
    {
        question: "Mikä on Etelä-Korean pääkaupunki?",
        rightAnswer: "Soul",
        wrongs: ["Busan", "Incheon", "Daegu", "Gwangju"]
    },
    {
        question: "Mikä on Thaimaan pääkaupunki?",
        rightAnswer: "Bangkok",
        wrongs: ["Chiang Mai", "Phuket", "Pattaya", "Krabi"]
    },
    {
        question: "Mikä on Argentiinan pääkaupunki?",
        rightAnswer: "Buenos Aires",
        wrongs: ["Córdoba", "Rosario", "Mendoza", "La Plata"]
    },
    {
        question: "Mikä on Nigerian pääkaupunki?",
        rightAnswer: "Abuja",
        wrongs: ["Lagos", "Kano", "Ibadan", "Benin City"]
    },
    {
        question: "Mikä on Uuden-Seelannin pääkaupunki?",
        rightAnswer: "Wellington",
        wrongs: ["Auckland", "Christchurch", "Hamilton", "Tauranga"]
    },
    {
        question: "Mikä on Iranin pääkaupunki?",
        rightAnswer: "Teheran",
        wrongs: ["Mashhad", "Isfahan", "Shiraz", "Tabriz"]
    },
    {
        question: "Mikä on Indonesian pääkaupunki?",
        rightAnswer: "Jakarta",
        wrongs: ["Surabaya", "Bandung", "Medan", "Bali"]
    },
    {
        question: "Mikä on Israelin pääkaupunki?",
        rightAnswer: "Jerusalem",
        wrongs: ["Tel Aviv", "Haifa", "Eilat", "Nazareth"]
    },
    {
        question: "Mikä on Irlannin pääkaupunki?",
        rightAnswer: "Dublin",
        wrongs: ["Cork", "Galway", "Limerick", "Belfast"]
    },
    {
        question: "Mikä on Viron pääkaupunki?",
        rightAnswer: "Tallinna",
        wrongs: ["Tartto", "Pärnu", "Narva", "Viljandi"]
    },
    {
        question: "Mikä on Marokon pääkaupunki?",
        rightAnswer: "Rabat",
        wrongs: ["Casablanca", "Marrakech", "Fes", "Tangier"]
    },
    {
        question: "Mikä on Tanskan pääkaupunki?",
        rightAnswer: "Kööpenhamina",
        wrongs: ["Aarhus", "Odense", "Aalborg", "Esbjerg"]
    },
    {
        question: "Mikä on Kroatian pääkaupunki?",
        rightAnswer: "Zagreb",
        wrongs: ["Split", "Dubrovnik", "Rijeka", "Zadar"]
    },
    {
        question: "Mikä on Kenian pääkaupunki?",
        rightAnswer: "Nairobi",
        wrongs: ["Mombasa", "Kisumu", "Nakuru", "Eldoret"]
    },
    {
        question: "Mikä on Kolumbian pääkaupunki?",
        rightAnswer: "Bogotá",
        wrongs: ["Medellín", "Cali", "Barranquilla", "Cartagena"]
    },
    {
        question: "Mikä on Kuuban pääkaupunki?",
        rightAnswer: "Havanna",
        wrongs: ["Santiago de Cuba", "Camagüey", "Holguín", "Guantánamo"]
    },
    {
        question: "Mikä on Unkarin pääkaupunki?",
        rightAnswer: "Budapest",
        wrongs: ["Debrecen", "Szeged", "Miskolc", "Pécs"]
    },
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
    answerLabel.innerHTML = "Edellisen maan pääkaupunki oli  " + currentQuestion.rightAnswer;
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
    }
});

askQuestion();

