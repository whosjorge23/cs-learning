const lessonData = [
  {
    id: 'algorithms',
    title: 'What is an Algorithm?',
    icon: '⚡',
    shortDesc: 'The foundation of all computer science. Learn how we solve problems step-by-step.',
    content: `
      <p>An algorithm is simply a set of well-defined instructions for completing a task or solving a problem. Think of it like a <strong>recipe</strong> for a cake.</p>
      <br>
      <p>Every algorithm must have three things:</p>
      <ul style="margin-left: 1.5rem; margin-top: 1rem;">
        <li><strong>Input:</strong> What you start with (e.g., ingredients).</li>
        <li><strong>Process:</strong> The steps to take (e.g., mix, bake).</li>
        <li><strong>Output:</strong> The result (e.g., a cake).</li>
      </ul>
      <br>
      <p>In computer science, algorithms need to be <em>unambiguous</em> and <em>finite</em>, meaning they must eventually end.</p>
    `,
    quiz: [
      {
        question: "Which of the following is the best analogy for an algorithm?",
        options: ["A storybook", "A recipe", "A painting", "A mirror"],
        correct: 1
      },
      {
        question: "What must an algorithm eventually do?",
        options: ["Repeat forever", "Change its goal", "End (terminate)", "Use all memory"],
        correct: 2
      }
    ]
  },
  {
    id: 'bubble-sort',
    title: 'Bubble Sort',
    icon: '🧼',
    shortDesc: 'One of the simplest sorting algorithms. Visualize how data elements "bubble" to the top.',
    content: `
      <p>Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.</p>
      <br>
      <p>How it works:</p>
      <ul style="margin-left: 1.5rem; margin-top: 1rem;">
        <li>Compare the first two items.</li>
        <li>If the first is greater than the second, swap them.</li>
        <li>Move to the next pair and repeat until the end of the list.</li>
        <li>Repeat these passes until no more swaps are needed.</li>
      </ul>
      <br>
      <p>The largest values <strong>"bubble up"</strong> to their correct positions at the end of the list with each pass.</p>
    `,
    quiz: [
      {
        question: "What does Bubble Sort compare in each step?",
        options: ["First and last items", "Random items", "Adjacent items", "The whole list"],
        correct: 2
      },
      {
        question: "Why is it called 'Bubble Sort'?",
        options: ["It pops the data", "Larger elements 'bubble up' to the end", "It creates bubbles in memory", "It uses circular logic"],
        correct: 1
      }
    ]
  },
  {
    id: 'variables-constants',
    title: 'Variables & Constants',
    icon: '📦',
    shortDesc: 'Learn how programs store information using variables and constants.',
    content: `
    <p>In programming, <strong>variables</strong> and <strong>constants</strong> are used to store data. 
    They act like labeled containers that hold values.</p>
    <br>

    <p><strong>Variables</strong> are containers whose values can change during program execution.</p>
    <p>Example:</p>
    <pre>
let score = 10;
score = 20; // value changed
    </pre>

    <p><strong>Constants</strong> are containers whose values cannot change after being assigned.</p>
    <p>Example:</p>
    <pre>
const pi = 3.14;
// pi = 3.14159 ❌ This would cause an error
    </pre>

    <br>
    <p>How it works:</p>
    <ul style="margin-left: 1.5rem; margin-top: 1rem;">
      <li>Declare a variable or constant using a keyword (e.g., <code>let</code> or <code>const</code>).</li>
      <li>Assign a value using the equals sign <code>=</code>.</li>
      <li>Use the name later in your program to access the stored value.</li>
      <li>Variables can be reassigned; constants cannot.</li>
    </ul>

    <br>
    <p>Think of a <strong>variable</strong> like a reusable box you can refill.</p>
    <p>Think of a <strong>constant</strong> like a sealed box — once set, it stays the same.</p>

    <br>
    <p>Using variables and constants properly helps make your code clear, organized, and predictable.</p>
  `,
    quiz: [
      {
        question: "What is the main difference between a variable and a constant?",
        options: [
          "Variables are faster",
          "Constants can change value",
          "Variables can change value, constants cannot",
          "They are exactly the same"
        ],
        correct: 2
      },
      {
        question: "Which keyword is typically used to declare a constant in JavaScript?",
        options: ["var", "let", "const", "define"],
        correct: 2
      },
      {
        question: "What symbol is used to assign a value?",
        options: ["==", "=", ":", "->"],
        correct: 1
      }
    ]
  },
  {
    id: 'for-while-loops',
    title: 'For & While Loops',
    icon: '🔁',
    shortDesc: 'Learn how loops repeat instructions efficiently using for and while statements.',
    content: `
    <p>In programming, <strong>loops</strong> allow us to repeat a block of code multiple times 
    without writing it over and over again.</p>
    <br>

    <p>There are different types of loops, but two of the most common are 
    <strong>for loops</strong> and <strong>while loops</strong>.</p>

    <br>
    <h3>🔹 For Loop</h3>
    <p>A <strong>for loop</strong> is used when you know how many times you want to repeat something.</p>

    <p>Example:</p>
    <pre>
for (let i = 0; i < 5; i++) {
  console.log(i);
}
    </pre>

    <p>How it works:</p>
    <ul style="margin-left: 1.5rem; margin-top: 1rem;">
      <li>Initialize a counter (let i = 0).</li>
      <li>Check the condition (i < 5).</li>
      <li>Run the code block.</li>
      <li>Increase the counter (i++).</li>
      <li>Repeat until the condition becomes false.</li>
    </ul>

    <br>
    <h3>🔹 While Loop</h3>
    <p>A <strong>while loop</strong> is used when you want to repeat code 
    as long as a condition remains true.</p>

    <p>Example:</p>
    <pre>
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
    </pre>

    <p>How it works:</p>
    <ul style="margin-left: 1.5rem; margin-top: 1rem;">
      <li>Check the condition first.</li>
      <li>If it is true, run the code block.</li>
      <li>Update the variable inside the loop.</li>
      <li>Repeat until the condition becomes false.</li>
    </ul>

    <br>
    <p>⚠️ Be careful! If the condition never becomes false, you create an 
    <strong>infinite loop</strong>, which can crash your program.</p>

    <br>
    <p><strong>When to use each:</strong></p>
    <ul style="margin-left: 1.5rem; margin-top: 1rem;">
      <li>Use <strong>for</strong> when the number of repetitions is known.</li>
      <li>Use <strong>while</strong> when the repetition depends on a condition.</li>
    </ul>
  `,
    quiz: [
      {
        question: "When is a for loop usually preferred?",
        options: [
          "When you know the number of repetitions",
          "When the loop runs forever",
          "When you don't need a condition",
          "When using constants only"
        ],
        correct: 0
      },
      {
        question: "What must change inside a while loop to avoid an infinite loop?",
        options: [
          "The console",
          "The condition variable",
          "The loop keyword",
          "The function name"
        ],
        correct: 1
      },
      {
        question: "Which loop checks the condition before every iteration?",
        options: ["for only", "while only", "both for and while", "neither"],
        correct: 2
      }
    ]
  }
];

const achievementData = [
  {
    id: 'first-steps',
    title: 'First Steps',
    icon: '🌱',
    desc: 'Complete your first lesson.',
    check: (app) => app.completedLessons.length >= 1
  },
  {
    id: 'fast-learner',
    title: 'Fast Learner',
    icon: '🚀',
    desc: 'Complete 3 lessons.',
    check: (app) => app.completedLessons.length >= 3
  },
  {
    id: 'perfectionist',
    title: 'Perfectionist',
    icon: '🎯',
    desc: 'Maintain a GPA of 4.0.',
    check: (app) => app.gpa >= 4.0
  },
  {
    id: 'honor-roll',
    title: 'Honor Roll',
    icon: '📜',
    desc: 'Reach a GPA of 3.5 or higher.',
    check: (app) => app.gpa >= 3.5
  }
];

class App {
  constructor() {
    this.currentLesson = null;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.gpa = parseFloat(localStorage.getItem('cs-gpa')) || 0;
    this.completedLessons = JSON.parse(localStorage.getItem('cs-completed-lessons')) || [];
    this.theme = localStorage.getItem('cs-theme') || 'light';
    this.answers = [];

    this.init();
  }

  init() {
    this.applyTheme();
    this.renderHome();
    this.updateGPA();
    this.renderAchievements();

    document.getElementById('btn-back-home').onclick = (e) => {
      e.preventDefault();
      this.showHome();
    };

    document.getElementById('btn-start-quiz').onclick = () => {
      this.startQuiz();
    };

    document.getElementById('btn-next-question').onclick = () => {
      this.nextQuestion();
    };

    document.getElementById('theme-toggle').onclick = () => {
      this.toggleTheme();
    };
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('cs-theme', this.theme);
    this.applyTheme();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
    document.getElementById('theme-toggle').innerText = this.theme === 'light' ? '🌙' : '☀️';
  }

  updateGPA() {
    document.getElementById('gpa-display').innerText = `GPA: ${this.gpa.toFixed(2)}`;
    localStorage.setItem('cs-gpa', this.gpa);
  }

  renderHome() {
    const list = document.getElementById('course-list');
    list.innerHTML = lessonData.map(lesson => {
      const isCompleted = this.completedLessons.includes(lesson.id);
      return `
        <div class="glass-card course-card ${isCompleted ? 'completed' : ''}" onclick="app.showLesson('${lesson.id}')">
          ${isCompleted ? '<div class="completion-badge">Completed</div>' : ''}
          <div class="course-icon">${lesson.icon}</div>
          <h3>${lesson.title}</h3>
          <p>${lesson.shortDesc}</p>
          <span style="color: var(--primary); font-weight: 600; font-size: 0.8rem;">
            ${isCompleted ? 'REVIEW LESSON →' : 'START LESSON →'}
          </span>
        </div>
      `;
    }).join('');
  }

  showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);
  }

  showHome() {
    this.showView('home-view');
  }

  showLesson(id) {
    this.currentLesson = lessonData.find(l => l.id === id);
    document.getElementById('lesson-title').innerText = this.currentLesson.title;
    document.getElementById('lesson-body').innerHTML = this.currentLesson.content;
    document.getElementById('lesson-progress').style.width = '0%';
    this.showView('lesson-view');

    // Animate progress bar for aesthetic effect
    setTimeout(() => {
      document.getElementById('lesson-progress').style.width = '100%';
    }, 100);
  }

  startQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.answers = [];
    this.renderQuestion();
    this.showView('quiz-view');
  }

  renderQuestion() {
    const question = this.currentLesson.quiz[this.currentQuestionIndex];
    document.getElementById('quiz-question').innerText = question.question;
    document.getElementById('quiz-feedback').innerText = '';
    document.getElementById('btn-next-question').style.display = 'none';

    const container = document.getElementById('quiz-options-container');
    container.innerHTML = question.options.map((opt, i) => `
      <button class="option-btn" onclick="app.checkAnswer(${i})">${opt}</button>
    `).join('');
  }

  checkAnswer(index) {
    const question = this.currentLesson.quiz[this.currentQuestionIndex];
    const buttons = document.querySelectorAll('.option-btn');

    // Disable all buttons after choice
    buttons.forEach(btn => btn.disabled = true);

    if (index === question.correct) {
      buttons[index].classList.add('correct');
      document.getElementById('quiz-feedback').innerText = '✨ Correct!';
      document.getElementById('quiz-feedback').style.color = 'var(--accent)';
      this.score++;
    } else {
      buttons[index].classList.add('incorrect');
      buttons[question.correct].classList.add('correct');
      document.getElementById('quiz-feedback').innerText = '❌ Not quite. The correct answer is highlighted.';
      document.getElementById('quiz-feedback').style.color = '#ef4444';
    }

    this.answers.push({
      question: question.question,
      userAnswer: question.options[index],
      correctAnswer: question.options[question.correct],
      isCorrect: index === question.correct
    });

    document.getElementById('btn-next-question').style.display = 'inline-flex';
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    if (this.currentQuestionIndex < this.currentLesson.quiz.length) {
      this.renderQuestion();
    } else {
      this.showResults();
    }
  }

  showResults() {
    const total = this.currentLesson.quiz.length;
    const percentage = (this.score / total) * 100;

    // Update GPA (very simple logic: weighted average)
    this.gpa = (this.gpa + (this.score / total) * 4) / (this.gpa === 0 ? 1 : 1.1);
    if (this.gpa > 4) this.gpa = 4;

    // Save completion
    if (percentage >= 100 && !this.completedLessons.includes(this.currentLesson.id)) {
      this.completedLessons.push(this.currentLesson.id);
      localStorage.setItem('cs-completed-lessons', JSON.stringify(this.completedLessons));
    }

    this.updateGPA();
    this.renderHome(); // Refresh home grid
    this.renderAchievements(); // Refresh achievements

    this.downloadResults();

    document.getElementById('results-score').innerText = `You got ${this.score} out of ${total} correct (${percentage}%).`;
    this.showView('results-view');
  }

  renderAchievements() {
    const grid = document.getElementById('achievement-grid');
    if (!grid) return;

    grid.innerHTML = achievementData.map(ach => {
      const unlocked = ach.check(this);
      return `
        <div class="glass-card achievement-card ${unlocked ? 'unlocked' : ''}">
          <div class="achievement-icon">${ach.icon}</div>
          <h4>${ach.title}</h4>
          <p>${ach.desc}</p>
        </div>
      `;
    }).join('');
  }

  downloadResults() {
    const total = this.currentLesson.quiz.length;
    const percentage = ((this.score / total) * 100).toFixed(2);
    const date = new Date().toLocaleString();

    let answersBreakdown = this.answers.map((ans, i) => `
Q${i + 1}: ${ans.question}
Your Answer: ${ans.userAnswer}
Correct Answer: ${ans.correctAnswer}
Result: ${ans.isCorrect ? 'CORRECT' : 'WRONG'}
    `).join('\n');

    const content = `
COMPUTER SCIENCE TEST RESULTS (.cst)
=====================================
Lesson: ${this.currentLesson.title}
Date: ${date}
-------------------------------------
Score: ${this.score} / ${total}
Percentage: ${percentage}%
Current GPA: ${this.gpa.toFixed(2)}
-------------------------------------
Status: ${percentage >= 100 ? 'PASSED (Mastered)' : 'COMPLETED'}
=====================================

DETAILED BREAKDOWN:
${answersBreakdown}
=====================================
    `.trim();

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.currentLesson.id}-results.cst`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

const app = new App();
window.app = app;
