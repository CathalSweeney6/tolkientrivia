const questions = [
    {
        question: "The Dúnedain were descendants of which race of people from the Second-Age?",
        answers: [
            { text: "The Elves of Lindon", correct: false},
            { text: "The Númenóreans", correct: true},
            { text: "The Dwarves of Khazad-dûm", correct: false},
            { text: "The Orcs of Mordor", correct: false},
        ]
    }, {
        question: "Which Orc lieutenant shared his name with the Lord of the Balrogs?",
        answers: [
            { text: "Grishnákh", correct: false},
            { text: "Shagrat", correct: false},
            { text: "Snaga", correct: false},
            { text: "Gothmog", correct: true},
        ]
    }, {
        question: "What was the name of the Golden Hall that stood upon the green terrace of Edoras, capital city of the kingdom of Rohan?",
        answers: [
            { text: "The Great Hall of Thingol", correct: false},
            { text: "Meduseld", correct: true},
            { text: "The Great Hall of Thráin", correct: false},
            { text: "Heorot", correct: false},
        ] 
    }, {
        question: "Who was the chieftain of the Mearas?",
        answers: [
            { text: "Quickbeam", correct: false},
            { text: "Shadowfax", correct: true},
            { text: "Carcharoth", correct: false},
            { text: "Gwaihir", correct: false},
        ]
    },  {
        question: "J.R.R. Tolkien's novel, 'The Children of Húrin,' was heavily inspired by which Finnish epic-poem?",
        answers: [
            { text: "The Kalevala", correct: true},
            { text: "The Volsunga Saga", correct: false},
            { text: "The Mabinogion", correct: false},
            { text: "The Prose Edda", correct: false},
        ]
    }, {
        question: "Which Great-Spider devoured the light of the Two Trees of Valinor, at the behest of Melkor?",
        answers: [
            { text: "Shelob", correct: false},
            { text: "Saenathra", correct: false},
            { text: "Ungoliant", correct: true},
            { text: "Unglob", correct: false},
        ]
    }, {
        question: "What Quenyan name did Saruman the White go by, during his early days in Valinor?",
        answers: [
            { text: "Aiwendil", correct: false},
            { text: "Alatar", correct: false},
            { text: "Olórin", correct: false},
            { text: "Curumo", correct: true},
        ]
    }, {
        question: "What creatures did Sauron have command over in Tol-in-Gaurhoth?",
        answers: [
            { text: "Vampires", correct: false},
            { text: "Trolls", correct: false},
            { text: "Werewolves", correct: true},
            { text: "Goblins", correct: false},
        ]
    }, {
        question: "The Phial of Galadriel contained the light of which Elf's star?",
        answers: [
            { text: "Thingol", correct: false},
            { text: "Eärendil", correct: true},
            { text: "Fëanor", correct: false},
            { text: "Celebrimbor", correct: false},
        ]
    }, {
        question: "How many Rings of Power were forged?",
        answers: [
            { text: "Nine", correct: false},
            { text: "Seven", correct: false},
            { text: "Three", correct: false},
            { text: "Twenty", correct: true},
        ]
    }, {
        question: "Which Dwarf gifted Bilbo Baggins with a Mithril vest?",
        answers: [
            { text: "Balin, son of Fundin", correct: false},
            { text: "Glóin, son of Gróin", correct: false},
            { text: "Thorin II “Oakenshield,” son of Thráin", correct: true},
            { text: "Dwalin, son of Fundin", correct: false},
        ]
    }, {
        question: "What was the name of the Innkeeper of the Prancing Pony in Bree?",
        answers: [
            { text: "Harry Goatleaf", correct: false},
            { text: "Barliman Butterbur", correct: true},
            { text: "Mat Heathertoes", correct: false},
            { text: "Bill Fenry", correct: false},
        ]
    }, {
        question: "Where were the Fellowship of the Ring formed?",
        answers: [
            { text: "Gondor", correct: false},
            { text: "Edoras", correct: false},
            { text: "Rivendell", correct: true},
            { text: "Lothlórien", correct: false},
        ]
    }, {
        question: "Sméagol was originally what breed of Halfling?",
        answers: [
            { text: "A Hobbit of the Shire", correct: false},
            { text: "A Fallohide", correct: false},
            { text: "A Harfoot", correct: false},
            { text: "A Stoor", correct: true},
        ]
    }, {
        question: "Who founded the kingdom of Gondor?",
        answers: [
            { text: "Isildur", correct: false},
            { text: "Anárion", correct: false},
            { text: "Elendil", correct: true},
            { text: "Elessar", correct: false},
        ]
    }, {
        question: "When questioned in Buckland, which Hobbit informed a Black Rider that the Bagginses lived in Hobbiton?",
        answers: [
            { text: "Odo Proudfoot", correct: false},
            { text: "Hamfast “Gaffer” Gamgee", correct: false},
            { text: "Sandyman", correct: false},
            { text: "Farmer Maggot", correct: true},
        ]
    }, {
        question: "What did the Black Speech inscription on the One Ring read?",
        answers: [
            { text: "Ash nazg gimbatul, Ash nazg durbatulûk, ash nazg thrakatulûk, agh burzum-ishi krimpatul", correct: false},
            { text: "Ash nazg durbatulûk, ash nazg gimbatul, ash nazg thrakatulûk, agh burzum-ishi krimpatul", correct: true},
            { text: "Ash nazg thrakatulûk, agh burzum-ishi krimpatul, ash nazg gimbatul, ash nazg durbatulûk", correct: false},
            { text: "Ash nazg gimbatul, ash nazg durbatulûk, agh burzum-ishi krimpatul, ash nazg thrakatulûk", correct: false},
        ]
    }, {
        question: "What was the name of the largest Dragon in all of Middle-Earth?",
        answers: [
            { text: "Smaug", correct: false},
            { text: "Glaurung", correct: false},
            { text: "Ancalagon", correct: true},
            { text: "Scatha", correct: false},
        ]
    }, {
        question: "What was the name of the fortress of Melkor?",
        answers: [
            { text: "Orthanc", correct: false},
            { text: "Angband", correct: true},
            { text: "Minas Morgul", correct: false},
            { text: "Cirith Ungol", correct: false},
        ]
    }, {
        question: "Which of the following, is a common Sindarin greeting?",
        answers: [
            { text: "Mellon", correct: false},
            { text: "Mithrandir", correct: false},
            { text: "Namárië", correct: false},
            { text: "Mae Govannen", correct: true},
        ]
    }, 
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT >>";
    showQuestion();
}

function  showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestion;
    questionElement.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    }


    function resetState() {
        nextButton.style.display = "none";
        while(answerButtons.firstChild) {
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(event) {
        const selectedBtn = event.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }


    function  showScore() {
        resetState(); 
        questionElement.innerHTML= `You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML = "PLAY AGAIN";
        nextButton.style.display ="block";

    }

    function handleNextButton() {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        } else {
            showScore();
        }

    }

    nextButton.addEventListener("click", ()=>{
        if(currentQuestionIndex < questions.length){
            handleNextButton();
        } else {
            startQuiz();
        }

    });

    startQuiz();

