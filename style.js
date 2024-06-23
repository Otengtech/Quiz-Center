const questions = [
    {
        question: "1. What is the largest planet in our solar system?",
        a: "Earth",
        b: "Saturn",
        c: "Jupiter",
        d: "Uranus",
        correct: "Jupiter",
    },
    {
        question: "2. Which scientist is credited with the discovery of gravity?",
        a: "Galileo Galilei",
        b: "Isaac Newton",
        c: "Albert Einstein",
        d: "Leonardo da Vinci",
        correct: "Isaac Newton",
    },
    {
        question: "3. Which planet is also known as the red planet?",
        a: "Jupiter",
        b: "Mercury",
        c: "Earth",
        d: "Mars",
        correct: "Mars",
    },
    {
        question: "4. Which planet is closer to the sun?",
        a: "Mercury",
        b: "Mars",
        c: "Venos",
        d: "Earth",
        correct: "Mercury",
    },
    {
        question: "5. What is the process by which plants make their own food?",
        a: "Respiration",
        b: "Photosynthesis",
        c: "Decomposition",
        d: "Fermentation",
        correct: "Photosynthesis",
    },
    {
        question: "6. What element is the lightest in the periodic table?",
        a: "Hydrogen",
        b: "Helium",
        c: "Oxygen",
        d: "Nitrogen",
        correct: "Hydrogen",
    },
    {
        question: "7. What is the largest mammal on earth?",
        a: "Elephant",
        b: "Blue Whale",
        c: "Hippopotamus",
        d: "Giraffe",
        correct: "Blue Whale",
    },
    {
        question: "8. What is the largest living structure on Earth?",
        a: "The Great Barrier Reef",
        b: "The Amazon Rainforest",
        c: "The Grand Canyon",
        d: "The Great Wall of China",
        correct: "The Great Barrier Reef",
    },
    {
        question: "9. What is the chemical symbol for gold?",
        a: "Ag",
        b: "AU",
        c: "Hg",
        d: "Pb",
        correct: "AU",
    },
    {
        question: "10. Which scientist developed the theory of evolution through natural selection?",
        a: "Charles Darwin",
        b: "Gregor Mendel",
        c: "Albert Einstein",
        d: "Louis Pasteur",
        correct: "Charles Darwin",
    },
    {
        question: "11. What is the smallest bone in the human body?",
        a: "Femur",
        b: "Tibia",
        c: "Fibula",
        d: "Stapes",
        correct: "Stapes",
    },
    {
        question: "12. Which planet in our solar system is no longer considered a planet?",
        a: "Pluto",
        b: "Neptune",
        c: "Mars",
        d: "Mercury",
        correct: "Pluto",
    },
    {
        question: "13. What is the process by which water moves through a plant?",
        a: "Respiration",
        b: "Photosynthesis",
        c: "Transpiration",
        d: "Evaporation",
        correct: "Transpiration",
    },
    {
        question: "14. Which scientist discorvered the structure of DNA?",
        a: "James Watson",
        b: "Francis Crick",
        c: "Rosalind Franklin",
        d: "Linus Pauling",
        correct: "Francis Crick",
    },
    {
        question: "15. What is the largest organ in the human body?",
        a: "Brain",
        b: "Heart",
        c: "Lungs",
        d: "Skin",
        correct: "Skin",
    },
    {
        question: "16. What is the process by which the universe became the way it is today?",
        a: "Big Bang",
        b: "Big Crunch",
        c: "Dark Matter",
        d: "Dark Energy",
        correct: "Big Bang",
    },
    {
        question: "17. Which scientist developed the theory of relativity?",
        a: "Albert Einstein",
        b: "Isaac Newton",
        c: "Galileo Galilei",
        d: "Marie Curie",
        correct: "Albert Einstein",
    },
    {
        question: "18. What is the smallest unit of life?",
        a: "Cell",
        b: "Molecule",
        c: "Tissue",
        d: "Organ",
        correct: "Cell",
    },
    {
        question: "19. Which planet in our solar sustem has the amost moons?",
        a: "Jupiter",
        b: "Sarurn",
        c: "Uranus",
        d: "Neptune",
        correct: "Jupiter",
    },
    {
        question: "20. What is the largest type of rock?",
        a: "Igneous",
        b: "Sedimentary",
        c: "Metamorphic",
        d: "Foiated",
        correct: "Igneous",
    },
    {
        question: "Which scientist developed the theory of vaccination?",
        a: "Edward Jenner",
        b: "Louis Pasteur",
        c: "Jonas Salk",
        d: "Alexander Fleming",
        correct: "Edwark Jenner",
    },
]

// Declaring variables
const scores = document.getElementById("scores")
const question = document.querySelector(".question")
const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const d = document.getElementById("d")
const pages = document.getElementById("pages")
const submit = document.getElementById("try")
const display = document.querySelector(".quizApp")
const btn = document.querySelectorAll('.btn')


let count = 0;
let score = scores;

// Displaying Questions
displayQuestion();

function displayQuestion() {
    let current = questions[count]
    question.innerHTML = questions[count].question
    a.innerHTML = questions[count].a
    b.innerHTML = questions[count].b
    c.innerHTML = questions[count].c
    d.innerHTML = questions[count].d   
    submit.style.display = 'none' 
}

// Dealing with answers
function showAns() {
    btn.forEach((each) => {
        each.addEventListener('click', () => {
            if (each.innerHTML === questions[count].correct) {
                score.innerHTML++;
                count++;
                displayQuestion()
                pages.innerHTML++;
            }
            else {
                count++
                displayQuestion()
                pages.innerHTML++;
            }
            showScore()
        })
    })
}
// Trying it again when a button is clicked
function tryagain(){

}
tryagain()

showAns()

// showing scores
function showScore() {
    if (count === 20) {
        tryagain()
        display.innerHTML = `
            <div class="showScore">
                <p>You scored ${score.innerHTML} out of 20 !</p>
            </div>
        `
    }
}



