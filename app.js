class App {
  constructor() {
    this.currentLesson = null;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.gpa = parseFloat(localStorage.getItem('cs-gpa')) || 0;
    this.completedLessons = JSON.parse(localStorage.getItem('cs-completed-lessons')) || [];
    this.theme = localStorage.getItem('cs-theme') || 'light';
    this.streak = parseInt(localStorage.getItem('cs-streak')) || 0;
    this.lastChallengeDate = localStorage.getItem('cs-last-challenge-date') || '';
    this.answers = [];
    this.isDailyChallenge = false;
    this.currentDaily = null;

    this.init();
  }

  init() {
    this.applyTheme();
    this.renderHome();
    this.updateStats();
    this.renderAchievements();
    this.checkDailyChallenge();

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

    document.getElementById('btn-start-daily').onclick = () => {
      this.startDailyChallenge();
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

  updateStats() {
    document.getElementById('gpa-display').innerText = `GPA: ${this.gpa.toFixed(2)}`;
    document.getElementById('streak-display').innerText = `🔥 ${this.streak}`;
    localStorage.setItem('cs-gpa', this.gpa);
    localStorage.setItem('cs-streak', this.streak);
    localStorage.setItem('cs-last-challenge-date', this.lastChallengeDate);
  }

  checkDailyChallenge() {
    const today = new Date().toDateString();
    const container = document.getElementById('daily-challenge-container');
    const card = document.getElementById('daily-challenge-card');

    // Choose challenge based on date hash
    const dayHash = new Date().getDate() % dailyChallengeData.length;
    this.currentDaily = dailyChallengeData[dayHash];

    container.style.display = 'block';

    if (this.lastChallengeDate === today) {
      card.classList.add('completed');
      document.getElementById('daily-desc').innerText = "Come back tomorrow for a new challenge!";
      document.getElementById('btn-start-daily').innerText = "Completed today";
      document.getElementById('btn-start-daily').disabled = true;
    } else {
      card.classList.remove('completed');
      document.getElementById('daily-desc').innerText = "Test your knowledge and boost your GPA!";
      document.getElementById('btn-start-daily').innerText = "Solve Now";
      document.getElementById('btn-start-daily').disabled = false;
    }
  }

  startDailyChallenge() {
    this.isDailyChallenge = true;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.answers = [];

    // Mock a lesson structure for the daily challenge
    this.currentLesson = {
      title: "Daily Challenge",
      id: "daily-challenge",
      quiz: [this.currentDaily]
    };

    this.renderQuestion();
    this.showView('quiz-view');
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
      const bar = document.getElementById('lesson-progress');
      if (bar) bar.style.width = '100%';
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

    if (this.isDailyChallenge) {
      if (percentage >= 100) {
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        if (this.lastChallengeDate === yesterday) {
          this.streak++;
        } else if (this.lastChallengeDate !== today) {
          this.streak = 1;
        }

        this.lastChallengeDate = today;
        this.gpa = Math.min(4, this.gpa + 0.1); // Bonus for daily
      }
      this.isDailyChallenge = false;
    } else {
      // Update GPA (very simple logic: weighted average)
      const lessonWeight = 4 / lessonData.length;
      this.gpa = (this.gpa * 0.9) + ((this.score / total) * lessonWeight);
      if (this.gpa > 4) this.gpa = 4;

      // Save completion
      if (percentage >= 100 && !this.completedLessons.includes(this.currentLesson.id)) {
        this.completedLessons.push(this.currentLesson.id);
        localStorage.setItem('cs-completed-lessons', JSON.stringify(this.completedLessons));
      }
    }

    this.updateStats();
    this.renderHome(); // Refresh home grid
    this.renderAchievements(); // Refresh achievements
    this.checkDailyChallenge();

    if (this.currentLesson.id !== 'daily-challenge') this.downloadResults();

    document.getElementById('results-score').innerText = percentage >= 100 ?
      `Perfect score! You've mastered this topic.` :
      `You got ${this.score} out of ${total} correct (${percentage}%).`;
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
