// Java// ============================================================
// MINDMETRIX - MAIN JAVASCRIPT
// ============================================================

// ---------------- TEST STATE ----------------

const TestState = {
    studentInfo: {
        name: "",
        roll: "",
        branch: ""
    },

    current: 0,

    userAnswers: new Array(QUESTIONS.length).fill(null),

    startTime: null
};


// ---------------- TIMER ----------------

let timeRemaining = 15 * 60;
let timerInterval = null;


// ---------------- DOM ELEMENTS ----------------

const heroSection = document.querySelector(".hero");
const detailsSection = document.querySelector(".details-section");
const testSection = document.querySelector(".test-section");
const resultSection = document.querySelector(".result-section");
const leaderboardSection =
    document.querySelector(".leaderboard-section");


// ---------------- PAGE CONTROL ----------------

function showSection(sectionToShow) {

    const sections = [
        heroSection,
        detailsSection,
        testSection,
        resultSection,
        leaderboardSection
    ];

    sections.forEach(section => {

        if (section) {

            section.style.display =
                section === sectionToShow ? "block" : "none";

        }

    });
}


// ---------------- STUDENT INFORMATION ----------------

function setStudentInfo(name, roll, branch) {

    TestState.studentInfo = {
        name: name,
        roll: roll,
        branch: branch
    };
}


// ---------------- START TEST ----------------

function startTest() {

    TestState.current = 0;

    TestState.userAnswers =
        new Array(QUESTIONS.length).fill(null);

    TestState.startTime = Date.now();

    showSection(testSection);

    startTimer();

    renderQuestion(0);
}


// ---------------- TIMER ----------------

function startTimer() {

    clearInterval(timerInterval);

    timeRemaining = 15 * 60;

    updateTimer();

    timerInterval = setInterval(() => {

        timeRemaining--;

        updateTimer();

        if (timeRemaining <= 0) {

            clearInterval(timerInterval);

            alert("Time is up! Your test will now be submitted.");

            finishTest();
        }

    }, 1000);
}


function updateTimer() {

    const timerElement =
        document.querySelector(".timer");

    if (!timerElement) return;

    const minutes =
        Math.floor(timeRemaining / 60);

    const seconds =
        timeRemaining % 60;

    timerElement.textContent =
        `⏱ ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


// ---------------- RENDER QUESTION ----------------

function renderQuestion(index) {

    const question = QUESTIONS[index];

    if (!question) return;

    TestState.current = index;


    // Question number

    const questionTitle =
        document.querySelector(".question-top h3");

    if (questionTitle) {

        questionTitle.textContent =
            `Question ${String(index + 1).padStart(2, "0")} / ${QUESTIONS.length}`;

    }


    // Category

    const categoryBadge =
        document.querySelector(".category-badge");

    if (categoryBadge) {

        categoryBadge.textContent =
            question.category;

    }


    // Question text

    const questionText =
        document.querySelector(".question-card h2");

    if (questionText) {

        questionText.textContent =
            question.text;

    }


    // Options

    const optionElements =
        document.querySelectorAll(
            ".question-card .option"
        );

    optionElements.forEach((optionElement, index) => {

        const letter =
            optionElement.querySelector(".letter");

        const input =
            optionElement.querySelector(
                "input[type='radio']"
            );

        const spans =
            optionElement.querySelectorAll("span");

        if (letter) {

            letter.textContent =
                String.fromCharCode(65 + index);

        }

        if (spans.length > 1) {

            spans[1].textContent =
                question.options[index];

        }

        const isSelected =
            TestState.userAnswers[TestState.current] === index;

        optionElement.classList.toggle(
            "selected",
            isSelected
        );

        if (input) {

            input.checked = isSelected;

        }

    });


    updateProgress(index);

    updateNavigationButtons();
}


// ---------------- SELECT ANSWER ----------------

function selectAnswer(optionIndex) {

    TestState.userAnswers[TestState.current] =
        optionIndex;

    renderQuestion(TestState.current);
}


// ---------------- NEXT QUESTION ----------------

function nextQuestion() {

    if (
        TestState.current <
        QUESTIONS.length - 1
    ) {

        TestState.current++;

        renderQuestion(TestState.current);

    } else {

        finishTest();

    }
}


// ---------------- PREVIOUS QUESTION ----------------

function previousQuestion() {

    if (TestState.current > 0) {

        TestState.current--;

        renderQuestion(TestState.current);

    }
}


// ---------------- PROGRESS ----------------

function updateProgress(index) {

    const percent =
        Math.round(
            ((index + 1) / QUESTIONS.length) * 100
        );


    const progressLabel =
        document.querySelector(
            ".question-progress span:last-child"
        );

    if (progressLabel) {

        progressLabel.textContent =
            `${percent}%`;

    }


    const progressBars =
        document.querySelectorAll(
            ".progress-bar .progress"
        );

    progressBars.forEach(bar => {

        bar.style.width =
            `${percent}%`;

    });

}


// ---------------- NAVIGATION BUTTONS ----------------

function updateNavigationButtons() {

    const previousButton =
        document.querySelector(
            ".question-buttons .secondary-btn"
        );

    const nextButton =
        document.querySelector(
            ".question-buttons .primary-btn"
        );


    if (previousButton) {

        previousButton.disabled =
            TestState.current === 0;

    }


    if (nextButton) {

        nextButton.textContent =
            TestState.current === QUESTIONS.length - 1
                ? "Submit ✓"
                : "Next →";

    }

}


// ---------------- CALCULATE RESULT ----------------

function calculateResult() {

    let correct = 0;

    let wrong = 0;

    let unattempted = 0;


    QUESTIONS.forEach((question, index) => {

        const userAnswer =
            TestState.userAnswers[index];


        if (
            userAnswer === null ||
            userAnswer === undefined
        ) {

            unattempted++;

        }

        else if (
            userAnswer === question.answer
        ) {

            correct++;

        }

        else {

            wrong++;

        }

    });


    const total =
        QUESTIONS.length;


    const percentage =
        Math.round(
            (correct / total) * 100
        );


    let performance =
        "Needs Improvement";


    if (percentage >= 90) {

        performance =
            "Excellent Performance";

    }

    else if (percentage >= 75) {

        performance =
            "Very Good Performance";

    }

    else if (percentage >= 50) {

        performance =
            "Good Performance";

    }


    return {
        correct: correct,
        wrong: wrong,
        unattempted: unattempted,
        total: total,
        percentage: percentage,
        performance: performance
    };
}


// ---------------- DISPLAY RESULT ----------------

function displayResult() {

    const result =
        calculateResult();


    // Percentage

    const score =
        document.querySelector(
            ".score-circle strong"
        );

    if (score) {

        score.textContent =
            `${result.percentage}%`;

    }


    // Score

    const scoreHeading =
        document.querySelector(
            ".result-content h1"
        );

    if (scoreHeading) {

        scoreHeading.textContent =
            `${result.correct} / ${result.total}`;

    }


    // Performance

    const performance =
        document.querySelector(
            ".success-text"
        );

    if (performance) {

        performance.textContent =
            result.performance;

    }


    // Correct

    const correct =
        document.querySelector(
            ".result-stats .correct"
        );

    if (correct) {

        correct.textContent =
            result.correct;

    }


    // Wrong

    const wrong =
        document.querySelector(
            ".result-stats .wrong"
        );

    if (wrong) {

        wrong.textContent =
            result.wrong;

    }


    return result;
}


// ---------------- FINISH TEST ----------------

function finishTest() {

    clearInterval(timerInterval);

    const result =
        displayResult();

    saveToLeaderboard(result);

    showSection(resultSection);
}


// ---------------- LEADERBOARD ----------------

const LEADERBOARD_KEY =
    "mindmetrix_leaderboard";


function getLeaderboard() {

    const saved =
        localStorage.getItem(
            LEADERBOARD_KEY
        );

    if (!saved) {

        return [];

    }

    try {

        return JSON.parse(saved);

    }

    catch {

        return [];

    }

}


function saveToLeaderboard(result) {

    const leaderboard =
        getLeaderboard();


    leaderboard.push({

        name:
            TestState.studentInfo.name ||
            "Anonymous",

        roll:
            TestState.studentInfo.roll ||
            "-",

        branch:
            TestState.studentInfo.branch ||
            "-",

        correct:
            result.correct,

        total:
            result.total,

        percent:
            result.percentage

    });


    leaderboard.sort(
        (a, b) =>
            b.percent - a.percent
    );


    const topStudents =
        leaderboard.slice(0, 20);


    localStorage.setItem(
        LEADERBOARD_KEY,
        JSON.stringify(topStudents)
    );


    renderLeaderboard();
}


// ---------------- DISPLAY LEADERBOARD ----------------

function renderLeaderboard() {

    const tableBody =
        document.querySelector(
            ".leaderboard-card table tbody"
        );


    if (!tableBody) return;


    const leaderboard =
        getLeaderboard();


    if (leaderboard.length === 0) {

        return;

    }


    const medals =
        ["🥇", "🥈", "🥉"];


    tableBody.innerHTML =
        leaderboard.map((student, index) => {

            const rank =
                medals[index]
                    ? `${medals[index]} ${index + 1}`
                    : `${index + 1}`;


            return `
                <tr>
                    <td>${rank}</td>
                    <td>${escapeHTML(student.name)}</td>
                    <td>${student.correct} / ${student.total}</td>
                    <td>${student.percent}%</td>
                </tr>
            `;

        }).join("");

}


// ---------------- SECURITY ----------------

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        value;

    return div.innerHTML;

}


// ---------------- VIEW ANSWERS ----------------

function viewAnswers() {

    let message =
        "YOUR ANSWERS\n\n";


    QUESTIONS.forEach(
        (question, index) => {

            const selected =
                TestState.userAnswers[index];


            const correct =
                question.answer;


            message +=
                `${index + 1}. ${question.text}\n`;


            if (
                selected === null ||
                selected === undefined
            ) {

                message +=
                    "Your answer: Not attempted\n";

            }

            else {

                message +=
                    `Your answer: ${question.options[selected]}\n`;

            }


            message +=
                `Correct answer: ${question.options[correct]}\n\n`;

        }
    );


    alert(message);
}


// ---------------- RETAKE TEST ----------------

function retakeTest() {

    clearInterval(timerInterval);

    TestState.current = 0;

    TestState.userAnswers =
        new Array(QUESTIONS.length).fill(null);

    TestState.startTime =
        Date.now();

    startTest();
}


// ============================================================
// EVENT LISTENERS
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        // Initially show landing page

        showSection(heroSection);


        // ---------------- LANDING START BUTTON ----------------

        const landingStart =
            document.querySelector(
                ".hero .primary-btn"
            );


        if (landingStart) {

            landingStart.addEventListener(
                "click",
                () => {

                    showSection(
                        detailsSection
                    );

                }
            );

        }


        // ---------------- DETAILS FORM ----------------

        const form =
            document.querySelector(
                ".details-card form"
            );


        if (form) {

            form.addEventListener(
                "submit",
                event => {

                    event.preventDefault();


                    const name =
                        form.querySelector(
                            "input[placeholder='Enter your name']"
                        ).value.trim();


                    const roll =
                        form.querySelector(
                            "input[placeholder='Enter your roll number']"
                        ).value.trim();


                    const branch =
                        form.querySelector(
                            "select"
                        ).value;


                    if (
                        !name ||
                        !roll ||
                        !branch
                    ) {

                        alert(
                            "Please fill in all your details."
                        );

                        return;

                    }


                    setStudentInfo(
                        name,
                        roll,
                        branch
                    );


                    startTest();

                }
            );

        }


        // ---------------- QUESTION OPTIONS ----------------

        document.addEventListener(
            "click",
            event => {

                const option =
                    event.target.closest(
                        ".question-card .option"
                    );


                if (!option) return;


                const options =
                    Array.from(
                        document.querySelectorAll(
                            ".question-card .option"
                        )
                    );


                const index =
                    options.indexOf(option);


                if (index !== -1) {

                    selectAnswer(index);

                }

            }
        );


        // ---------------- PREVIOUS BUTTON ----------------

        const previousButton =
            document.querySelector(
                ".question-buttons .secondary-btn"
            );


        if (previousButton) {

            previousButton.addEventListener(
                "click",
                previousQuestion
            );

        }


        // ---------------- NEXT BUTTON ----------------

        const nextButton =
            document.querySelector(
                ".question-buttons .primary-btn"
            );


        if (nextButton) {

            nextButton.addEventListener(
                "click",
                nextQuestion
            );

        }


        // ---------------- RESULT BUTTONS ----------------

        const resultButtons =
            document.querySelectorAll(
                ".result-buttons button"
            );


        if (resultButtons[0]) {

            resultButtons[0].addEventListener(
                "click",
                viewAnswers
            );

        }


        if (resultButtons[1]) {

            resultButtons[1].addEventListener(
                "click",
                () => {

                    showSection(
                        leaderboardSection
                    );

                    renderLeaderboard();

                }
            );

        }


        if (resultButtons[2]) {

            resultButtons[2].addEventListener(
                "click",
                retakeTest
            );

        }


        // ---------------- MENU ----------------

        const menuButton =
            document.querySelector(
                ".menu-btn"
            );


        if (menuButton) {

            menuButton.addEventListener(
                "click",
                () => {

                    alert(
                        "MINDMETRIX\n\n" +
                        "Aptitude Test\n" +
                        "3 Categories\n" +
                        "20 Questions\n" +
                        "15 Minutes"
                    );

                }
            );

        }

    }
);Script functionality will be added by Member 4
