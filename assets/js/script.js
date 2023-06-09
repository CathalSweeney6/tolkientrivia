// Question variables 

const questions = [{
    question: "The Dúnedain were descendants of which race of people from the Second-Age?",
    answers: [{
            text: "The Elves of Lindon",
            correct: false
        },
        {
            text: "The Númenóreans",
            correct: true
        },
        {
            text: "The Dwarves of Khazad-dûm",
            correct: false
        },
        {
            text: "The Orcs of Mordor",
            correct: false
        },
    ]
}, {
    question: "Which Orc lieutenant shared his name with the Lord of the Balrogs?",
    answers: [{
            text: "Grishnákh",
            correct: false
        },
        {
            text: "Shagrat",
            correct: false
        },
        {
            text: "Snaga",
            correct: false
        },
        {
            text: "Gothmog",
            correct: true
        },
    ]
}, {
    question: "What was the name of the Golden Hall at Edoras?",
    answers: [{
            text: "The Great Hall of Thingol",
            correct: false
        },
        {
            text: "Meduseld",
            correct: true
        },
        {
            text: "The Great Hall of Thráin",
            correct: false
        },
        {
            text: "Heorot",
            correct: false
        },
    ]
}, {
    question: "Which creature was the chieftain of the Mearas?",
    answers: [{
            text: "Quickbeam",
            correct: false
        },
        {
            text: "Shadowfax",
            correct: true
        },
        {
            text: "Carcharoth",
            correct: false
        },
        {
            text: "Gwaihir",
            correct: false
        },
    ]
}, {
    question: "'The Children of Húrin', was heavily inspired by which Finnish epic-poem?",
    answers: [{
            text: "The Kalevala",
            correct: true
        },
        {
            text: "The Volsunga Saga",
            correct: false
        },
        {
            text: "The Mabinogion",
            correct: false
        },
        {
            text: "The Prose Edda",
            correct: false
        },
    ]
}, {
    question: "Which Great-Spider devoured the light of the Two Trees of Valinor?",
    answers: [{
            text: "Shelob",
            correct: false
        },
        {
            text: "Saenathra",
            correct: false
        },
        {
            text: "Ungoliant",
            correct: true
        },
        {
            text: "Unglob",
            correct: false
        },
    ]
}, {
    question: "What Quenyan name did Saruman the White go by, in Valinor?",
    answers: [{
            text: "Aiwendil",
            correct: false
        },
        {
            text: "Alatar",
            correct: false
        },
        {
            text: "Olórin",
            correct: false
        },
        {
            text: "Curumo",
            correct: true
        },
    ]
}, {
    question: "What creatures did Sauron have command over in Tol-in-Gaurhoth?",
    answers: [{
            text: "Vampires",
            correct: false
        },
        {
            text: "Trolls",
            correct: false
        },
        {
            text: "Werewolves",
            correct: true
        },
        {
            text: "Goblins",
            correct: false
        },
    ]
}, {
    question: "The Phial of Galadriel contained the light of which Elf's star?",
    answers: [{
            text: "Thingol",
            correct: false
        },
        {
            text: "Eärendil",
            correct: true
        },
        {
            text: "Fëanor",
            correct: false
        },
        {
            text: "Celebrimbor",
            correct: false
        },
    ]
}, {
    question: "Gimli became the Lord of which realm, at the beginning of the Fourth Age?",
    answers: [{
            text: "Erebor",
            correct: false
        },
        {
            text: "The Glittering Caves of Aglarond",
            correct: true
        },
        {
            text: "Moria",
            correct: false
        },
        {
            text: "The Iron Hills",
            correct: false
        },
    ]
}, {
    question: "How many Rings of Power were forged, in total?",
    answers: [{
            text: "Nine",
            correct: false
        },
        {
            text: "Seven",
            correct: false
        },
        {
            text: "Three",
            correct: false
        },
        {
            text: "Twenty",
            correct: true
        },
    ]
}, {
    question: "Who gifted Bilbo Baggins with a Mithril vest?",
    answers: [{
            text: "Balin, son of Fundin",
            correct: false
        },
        {
            text: "Glóin, son of Gróin",
            correct: false
        },
        {
            text: "Thorin II, son of Thráin",
            correct: true
        },
        {
            text: "Dwalin, son of Fundin",
            correct: false
        },
    ]
}, {
    question: "What was the name of the Innkeeper of the Prancing Pony in Bree?",
    answers: [{
            text: "Harry Goatleaf",
            correct: false
        },
        {
            text: "Barliman Butterbur",
            correct: true
        },
        {
            text: "Mat Heathertoes",
            correct: false
        },
        {
            text: "Bill Fenry",
            correct: false
        },
    ]
}, {
    question: "Where were the Fellowship of the Ring formed?",
    answers: [{
            text: "Gondor",
            correct: false
        },
        {
            text: "Edoras",
            correct: false
        },
        {
            text: "Rivendell",
            correct: true
        },
        {
            text: "Lothlórien",
            correct: false
        },
    ]
}, {
    question: "Sméagol was originally what breed of Halfling?",
    answers: [{
            text: "A Hobbit of the Shire",
            correct: false
        },
        {
            text: "A Fallohide",
            correct: false
        },
        {
            text: "A Harfoot",
            correct: false
        },
        {
            text: "A Stoor",
            correct: true
        },
    ]
}, {
    question: "Who was the original wielder of the longsword Narsil?",
    answers: [{
            text: "Isildur",
            correct: false
        },
        {
            text: "Anárion",
            correct: false
        },
        {
            text: "Elendil",
            correct: true
        },
        {
            text: "Elessar",
            correct: false
        },
    ]
}, {
    question: "Which Hobbit informed a Black Rider that the Bagginses lived in Hobbiton?",
    answers: [{
            text: "Odo Proudfoot",
            correct: false
        },
        {
            text: "Hamfast “Gaffer” Gamgee",
            correct: false
        },
        {
            text: "Sandyman",
            correct: false
        },
        {
            text: "Farmer Maggot",
            correct: true
        },
    ]
}, {
    question: "What was the name of the largest Dragon in all of Middle-Earth?",
    answers: [{
            text: "Smaug",
            correct: false
        },
        {
            text: "Glaurung",
            correct: false
        },
        {
            text: "Ancalagon",
            correct: true
        },
        {
            text: "Scatha",
            correct: false
        },
    ]
}, {
    question: "What was the name of the fortress of Melkor?",
    answers: [{
            text: "Orthanc",
            correct: false
        },
        {
            text: "Angband",
            correct: true
        },
        {
            text: "Minas Morgul",
            correct: false
        },
        {
            text: "Cirith Ungol",
            correct: false
        },
    ]
}, {
    question: "Which of the following, is a common Sindarin greeting?",
    answers: [{
            text: "Mellon",
            correct: false
        },
        {
            text: "Mithrandir",
            correct: false
        },
        {
            text: "Namárië",
            correct: false
        },
        {
            text: "Mae Govannen",
            correct: true
        },
    ]
}, ];

// Consts.
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer");
const nextButton = document.getElementById("next-button");
// Shuffles question order.
let shuffledQuestions, currentQuestionIndex;
let score = 0;
// Next button function.
nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
// Next button function.
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
// Starts the quiz.
function startQuiz() {
    resetState();
    score = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    nextButton.innerHTML = "NEXT >>";
    document.getElementById("highscore").style.display = 'none';
    setNextQuestion();
}
// Sets the next question.
function setNextQuestion() {
    resetState();
    localStorage.setItem("latestScore", score);
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestion;
    questionElement.innerHTML = currentQuestion.question;
    // Adds answer text to each new question.
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-variables");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Hides the Next button at the start of each question.
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
// Displays correct/incorrect answer on selection.
function selectAnswer(event) {
    const selectedBtn = event.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    nextButton.style.display = "block";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {}
        button.disabled = true;
    });
}
// Displays final score.
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} / ${questions.length}!`;
    nextButton.innerHTML = "PLAY AGAIN!";
    nextButton.style.display = "block";
    document.getElementById("highscore").style.display = 'block';
    username.addEventListener('keyup', () => {
        saveYourScore.disabled = !username.value;
    });
}
// Starts the quiz. 
startQuiz();