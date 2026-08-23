/* ---------------------- 1. QUESTION BANK ---------------------- */
 
const QUESTIONS = [
  // ---- Quantitative (7) ----
  { id: 1, category: "Quantitative", difficulty: "Easy",
    text: "A train travels 120 km in 2 hours. What is its average speed?",
    options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"], answer: 2 },
  { id: 2, category: "Quantitative", difficulty: "Easy",
    text: "What is 15% of 200?",
    options: ["20", "25", "30", "35"], answer: 2 },
  { id: 3, category: "Quantitative", difficulty: "Medium",
    text: "If a shirt costs ₹800 after a 20% discount, what was its original price?",
    options: ["₹960", "₹1000", "₹1200", "₹1600"], answer: 1 },
  { id: 4, category: "Quantitative", difficulty: "Medium",
    text: "The average of 5 numbers is 24. If one number is removed, the average becomes 20. What was the removed number?",
    options: ["30", "36", "40", "44"], answer: 2 },
  { id: 5, category: "Quantitative", difficulty: "Medium",
    text: "A can complete a job in 6 days, B in 12 days. Working together, how many days will they take?",
    options: ["3 days", "4 days", "5 days", "6 days"], answer: 1 },
  { id: 6, category: "Quantitative", difficulty: "Hard",
    text: "Simple interest on ₹5000 at 8% per annum for 3 years is:",
    options: ["₹1000", "₹1100", "₹1200", "₹1300"], answer: 2 },
  { id: 7, category: "Quantitative", difficulty: "Hard",
    text: "The ratio of two numbers is 3:5 and their sum is 96. Find the larger number.",
    options: ["36", "48", "60", "72"], answer: 2 },
 
  // ---- Logical Reasoning (7) ----
  { id: 8, category: "Logical Reasoning", difficulty: "Easy",
    text: "Find the next number in the series: 2, 4, 8, 16, ?",
    options: ["24", "28", "32", "36"], answer: 2 },
  { id: 9, category: "Logical Reasoning", difficulty: "Easy",
    text: "If MONDAY is coded as NPOEBZ, how is TUESDAY coded?",
    options: ["UVFTEBZ", "UVFTEZB", "UVFTBEZ", "UVFTEBZ"], answer: 0 },
  { id: 10, category: "Logical Reasoning", difficulty: "Medium",
    text: "Pointing to a photograph, a man says, 'She is the daughter of my grandfather's only son.' How is the woman related to the man?",
    options: ["Mother", "Sister", "Aunt", "Cousin"], answer: 1 },
  { id: 11, category: "Logical Reasoning", difficulty: "Medium",
    text: "Find the odd one out: Triangle, Square, Circle, Sphere",
    options: ["Triangle", "Square", "Circle", "Sphere"], answer: 3 },
  { id: 12, category: "Logical Reasoning", difficulty: "Medium",
    text: "Complete the series: A, C, F, J, ?",
    options: ["M", "N", "O", "P"], answer: 2 },
  { id: 13, category: "Logical Reasoning", difficulty: "Hard",
    text: "In a certain code, 'BALL' is written as 'DCNN'. How is 'GAME' written?",
    options: ["ICOG", "IBOG", "ICNG", "ICOF"], answer: 0 },
  { id: 14, category: "Logical Reasoning", difficulty: "Hard",
    text: "If all Bloops are Razzles and all Razzles are Lazzles, are all Bloops definitely Lazzles?",
    options: ["Yes", "No", "Cannot be determined", "Only some"], answer: 0 },
 
  // ---- Verbal (6) ----
  { id: 15, category: "Verbal", difficulty: "Easy",
    text: "Choose the synonym of 'Abundant'.",
    options: ["Scarce", "Plentiful", "Rare", "Limited"], answer: 1 },
  { id: 16, category: "Verbal", difficulty: "Easy",
    text: "Choose the antonym of 'Optimistic'.",
    options: ["Hopeful", "Cheerful", "Pessimistic", "Confident"], answer: 2 },
  { id: 17, category: "Verbal", difficulty: "Medium",
    text: "Fill in the blank: She has been working here ___ 2019.",
    options: ["since", "for", "from", "at"], answer: 0 },
  { id: 18, category: "Verbal", difficulty: "Medium",
    text: "Identify the correctly spelled word.",
    options: ["Recieve", "Receive", "Receeve", "Receve"], answer: 1 },
  { id: 19, category: "Verbal", difficulty: "Hard",
    text: "Choose the correctly punctuated sentence.",
    options: [
      "Its a great day, isnt it?",
      "It's a great day, isn't it?",
      "Its a great day, isn't it.",
      "It's a great day isnt it?"
    ], answer: 1 },
  { id: 20, category: "Verbal", difficulty: "Hard",
    text: "Choose the word that best completes the analogy: Doctor is to Hospital as Teacher is to ___.",
    options: ["Book", "School", "Student", "Classroom"], answer: 1 },
];
 
const CATEGORIES = ["Quantitative", "Logical Reasoning", "Verbal"];
 
/* ---------------------- 2. TEST STATE ---------------------- */
 
const TestState = {
  studentInfo: { name: "", roll: "", branch: "" },
  current: 0,
  userAnswers: new Array(QUESTIONS.length).fill(null), // stores selected option index or null
  startTime: null,
};
 
function setStudentInfo(name, roll, branch) {
  TestState.studentInfo = { name, roll, branch };
}
 
/* ---------------------- 3. RENDERING A QUESTION ---------------------- */
 
function renderQuestion(index) {
  const q = QUESTIONS[index];
  if (!q) return;
 
  const total = QUESTIONS.length;
 
  // Header: "Question 07 / 20"
  const qTop = document.querySelector(".question-top h3");
  if (qTop) qTop.textContent = `Question ${String(index + 1).padStart(2, "0")} / ${total}`;
 
  const badge = document.querySelector(".category-badge");
  if (badge) badge.textContent = q.category;
 
  // Question text
  const qCard = document.querySelector(".question-card h2");
  if (qCard) qCard.textContent = q.text;
 
  // Options
  const optionEls = document.querySelectorAll(".question-card .options .option");
  optionEls.forEach((el, i) => {
    const letterEl = el.querySelector(".letter");
    const textEl = el.querySelector("span:not(.letter)");
    const inputEl = el.querySelector("input[type='radio']");
    if (letterEl) letterEl.textContent = String.fromCharCode(65 + i); // A, B, C, D
    if (textEl && q.options[i] !== undefined) textEl.textContent = q.options[i];
 
    const selected = TestState.userAnswers[index] === i;
    el.classList.toggle("selected", selected);
    if (inputEl) {
      inputEl.checked = selected;
      inputEl.onclick = () => selectAnswer(index, i);
    }
    el.onclick = () => selectAnswer(index, i);
  });
 
  // Top progress bar (overall)
  updateProgressBars(index, total);
 
  // Prev button disabled on first question
  const prevBtn = document.querySelector(".question-buttons .secondary-btn");
  if (prevBtn) prevBtn.disabled = index === 0;
 
  // Next button label on last question
  const nextBtn = document.querySelector(".question-buttons .primary-btn");
  if (nextBtn) nextBtn.textContent = index === total - 1 ? "Submit ✓" : "Next →";
}
 
function selectAnswer(qIndex, optionIndex) {
  TestState.userAnswers[qIndex] = optionIndex;
  renderQuestion(qIndex); // re-render to reflect selection
}
 
function updateProgressBars(index, total) {
  const percent = Math.round(((index + 1) / total) * 100);
 
  const progressLabel = document.querySelector(".question-progress span:last-child");
  if (progressLabel) progressLabel.textContent = `${percent}%`;
 
  const progressBars = document.querySelectorAll(".progress-bar .progress");
  progressBars.forEach((bar) => (bar.style.width = `${percent}%`));
}
 
/* ---------------------- 4. NAVIGATION ---------------------- */
 
function nextQuestion() {
  if (TestState.current < QUESTIONS.length - 1) {
    TestState.current++;
    renderQuestion(TestState.current);
  } else {
    finishTest();
  }
}
 
function previousQuestion() {
  if (TestState.current > 0) {
    TestState.current--;
    renderQuestion(TestState.current);
  }
}
 
function startTest() {
  TestState.current = 0;
  TestState.userAnswers = new Array(QUESTIONS.length).fill(null);
  TestState.startTime = Date.now();
  renderQuestion(0);
}
 
/* ---------------------- 5. RESULT CALCULATION ---------------------- */
 
function calculateResult() {
  let correct = 0;
  let wrong = 0;
  let unattempted = 0;
 
  const categoryBreakdown = {};
  CATEGORIES.forEach((c) => (categoryBreakdown[c] = { correct: 0, total: 0 }));
 
  QUESTIONS.forEach((q, i) => {
    categoryBreakdown[q.category].total++;
    const given = TestState.userAnswers[i];
    if (given === null || given === undefined) {
      unattempted++;
    } else if (given === q.answer) {
      correct++;
      categoryBreakdown[q.category].correct++;
    } else {
      wrong++;
    }
  });
 
  const total = QUESTIONS.length;
  const scorePercent = Math.round((correct / total) * 100);
 
  let performanceText = "Needs Improvement";
  if (scorePercent >= 90) performanceText = "Excellent Performance";
  else if (scorePercent >= 75) performanceText = "Very Good Performance";
  else if (scorePercent >= 50) performanceText = "Good Performance";
 
  const timeTakenSec = TestState.startTime
    ? Math.round((Date.now() - TestState.startTime) / 1000)
    : null;
 
  return {
    correct,
    wrong,
    unattempted,
    total,
    scorePercent,
    performanceText,
    categoryBreakdown,
    timeTakenSec,
  };
}
 
function renderResult() {
  const result = calculateResult();
 
  const scoreCircle = document.querySelector(".score-circle strong");
  if (scoreCircle) scoreCircle.textContent = `${result.scorePercent}%`;
 
  const resultHeading = document.querySelector(".result-content h1");
  if (resultHeading) resultHeading.textContent = `${result.correct} / ${result.total}`;
 
  const successText = document.querySelector(".result-content .success-text");
  if (successText) successText.textContent = result.performanceText;
 
  const correctStat = document.querySelector(".result-stats .stat .correct");
  if (correctStat) correctStat.textContent = result.correct;
 
  const wrongStat = document.querySelector(".result-stats .stat .wrong");
  if (wrongStat) wrongStat.textContent = result.wrong;
 
  return result;
}
 
function finishTest() {
  const result = renderResult();
  saveScoreToLeaderboard(result);
  renderPerformanceChart(result);
  return result;
}
 
/* ---------------------- 6. LEADERBOARD (localStorage) ---------------------- */
 
const LEADERBOARD_KEY = "mindmetrix_leaderboard";
 
function getLeaderboard() {
  try {
    const raw = localStorage.getItem(LEADERBOARD_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Failed to read leaderboard:", e);
    return [];
  }
}
 
function saveScoreToLeaderboard(result) {
  const entry = {
    name: TestState.studentInfo.name || "Anonymous",
    roll: TestState.studentInfo.roll || "-",
    branch: TestState.studentInfo.branch || "-",
    correct: result.correct,
    total: result.total,
    percent: result.scorePercent,
    date: new Date().toISOString(),
  };
 
  const board = getLeaderboard();
  board.push(entry);
 
  // Sort by percent descending, keep top 20 entries
  board.sort((a, b) => b.percent - a.percent);
  const trimmed = board.slice(0, 20);
 
  try {
    localStorage.setItem(LEADERBOARD_KEY, JSON.stringify(trimmed));
  } catch (e) {
    console.error("Failed to save leaderboard:", e);
  }
 
  renderLeaderboard();
  return entry;
}
 
function renderLeaderboard() {
  const board = getLeaderboard();
  const tbody = document.querySelector(".leaderboard-card table tbody");
  if (!tbody) return;
 
  const medals = ["🥇", "🥈", "🥉"];
 
  tbody.innerHTML = board
    .map((entry, i) => {
      const rankLabel = medals[i] ? `${medals[i]} ${i + 1}` : `${i + 1}`;
      const rowClass = i < 3 ? ' class="top-student"' : "";
      return `
        <tr${rowClass}>
          <td>${rankLabel}</td>
          <td>${escapeHtml(entry.name)}</td>
          <td>${entry.correct} / ${entry.total}</td>
          <td>${entry.percent}%</td>
        </tr>`;
    })
    .join("");
}
 
function clearLeaderboard() {
  localStorage.removeItem(LEADERBOARD_KEY);
  renderLeaderboard();
}
 
function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
 
/* ---------------------- 7. PERFORMANCE CHART (if time permits) ---------------------- */
/* Simple dependency-free canvas bar chart of correct-answers-per-category.
   Call renderPerformanceChart(result) after the test finishes.
   Expects a <canvas id="performanceChart"> somewhere in the result section
   (add one to the HTML if you want the chart to show). */
 
function renderPerformanceChart(result) {
  const canvas = document.getElementById("performanceChart");
  if (!canvas) return; // chart is optional — skip quietly if not present
 
  const ctx = canvas.getContext("2d");
  const categories = Object.keys(result.categoryBreakdown);
  const width = canvas.width;
  const height = canvas.height;
  const padding = 40;
  const barWidth = (width - padding * 2) / categories.length / 1.5;
  const chartHeight = height - padding * 2;
 
  ctx.clearRect(0, 0, width, height);
 
  // Axis
  ctx.strokeStyle = "#ccc";
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.stroke();
 
  const colors = ["#6366f1", "#22c55e", "#f59e0b"];
 
  categories.forEach((cat, i) => {
    const data = result.categoryBreakdown[cat];
    const pct = data.total ? data.correct / data.total : 0;
    const barHeight = pct * chartHeight;
    const x = padding + i * ((width - padding * 2) / categories.length) + barWidth / 2;
    const y = height - padding - barHeight;
 
    ctx.fillStyle = colors[i % colors.length];
    ctx.fillRect(x, y, barWidth, barHeight);
 
    ctx.fillStyle = "#333";
    ctx.font = "12px Inter, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(`${data.correct}/${data.total}`, x + barWidth / 2, y - 6);
    ctx.fillText(cat, x + barWidth / 2, height - padding + 16);
  });
}
 
/* ---------------------- 8. WIRE UP EVENT LISTENERS ---------------------- */
 
document.addEventListener("DOMContentLoaded", () => {
  // Details form -> Start Test
  const detailsForm = document.querySelector(".details-card form");
  if (detailsForm) {
    detailsForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const [nameInput, rollInput] = detailsForm.querySelectorAll("input[type='text']");
      const branchSelect = detailsForm.querySelector("select");
      setStudentInfo(
        nameInput ? nameInput.value.trim() : "",
        rollInput ? rollInput.value.trim() : "",
        branchSelect ? branchSelect.value : ""
      );
      startTest();
    });
  }
 
  // Next / Previous buttons inside the test section
  const testButtons = document.querySelectorAll(".question-buttons button");
  testButtons.forEach((btn) => {
    if (btn.classList.contains("primary-btn")) btn.addEventListener("click", nextQuestion);
    if (btn.classList.contains("secondary-btn")) btn.addEventListener("click", previousQuestion);
  });
 
  // Retake Test button in result section
  const retakeBtn = document.querySelector(".result-buttons .primary-btn");
  if (retakeBtn) retakeBtn.addEventListener("click", startTest);
 
  // Leaderboard button in result section
  const leaderboardBtn = Array.from(document.querySelectorAll(".result-buttons .secondary-btn")).find(
    (b) => b.textContent.includes("Leaderboard")
  );
  if (leaderboardBtn) leaderboardBtn.addEventListener("click", renderLeaderboard);
 
  // Populate leaderboard on load (in case results already exist)
  renderLeaderboard();
});
 
/* ---------------------- EXPORTS (for testing / other modules) ---------------------- */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    QUESTIONS,
    CATEGORIES,
    TestState,
    calculateResult,
    saveScoreToLeaderboard,
    getLeaderboard,
    clearLeaderboard,
  };
}