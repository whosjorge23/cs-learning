const lessonData = [
  {
    id: 'algorithms',
    title: 'What is an Algorithm?',
    icon: '⚡',
    level: 'Beginner',
    path: 'Foundations',
    pathDescription: 'Start with the building blocks of how programs think and store information.',
    shortDesc: 'The foundation of all computer science. Learn how we solve problems step-by-step.',
    miniPractice: {
      title: 'Spot The Algorithm',
      question: 'Which choice is a true algorithm?',
      options: [
        'A vague tip like "just solve it somehow"',
        'A step-by-step recipe with a clear start and finish',
        'A random list of words'
      ],
      correct: 1,
      success: 'Exactly. Algorithms are precise instructions, not loose ideas.',
      retry: 'Look for the option with clear ordered steps and a definite ending.'
    },
    content: `
  <div class="ls-hero">
    <span class="ls-badge ls-badge--blue">Core Concept</span>
    <p class="ls-lead">An <strong>algorithm</strong> is a set of well-defined steps to solve a problem — like a recipe for a computer.</p>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">A simple pattern</h3>
    <div class="ls-steps">
      <div class="ls-step ls-step--1">
        <div class="ls-step-num">1</div>
        <div class="ls-step-label">Input</div>
        <div class="ls-step-sub">What you start with</div>
      </div>
      <div class="ls-step-arrow">→</div>
      <div class="ls-step ls-step--2">
        <div class="ls-step-num">2</div>
        <div class="ls-step-label">Process</div>
        <div class="ls-step-sub">The steps to take</div>
      </div>
      <div class="ls-step-arrow">→</div>
      <div class="ls-step ls-step--3">
        <div class="ls-step-num">3</div>
        <div class="ls-step-label">Output</div>
        <div class="ls-step-sub">The result</div>
      </div>
    </div>
  </div>

  <div class="ls-analogy-block">
    <div class="ls-analogy-icon">🍰</div>
    <div>
      <div class="ls-analogy-title">Think of a recipe</div>
      <div class="ls-analogy-text">Ingredients = Input. Mixing and baking = Process. Cake = Output.</div>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Every algorithm must be…</h3>
    <div class="ls-cards-row">
      <div class="ls-info-card ls-info-card--orange">
        <div class="ls-info-icon">🎯</div>
        <strong>Unambiguous</strong>
        <p>Each step must be perfectly clear — no room for guessing.</p>
      </div>
      <div class="ls-info-card ls-info-card--blue">
        <div class="ls-info-icon">🏁</div>
        <strong>Finite</strong>
        <p>It must eventually stop. Algorithms that run forever are broken.</p>
      </div>
      <div class="ls-info-card ls-info-card--green">
        <div class="ls-info-icon">✅</div>
        <strong>Effective</strong>
        <p>Every step must be doable — no impossible instructions.</p>
      </div>
    </div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>One sentence:</strong> An algorithm = a clear, finite set of steps that turns an input into an output.
  </div>
        `,
    quiz: [
      {
        question: "Which of the following is the best analogy for an algorithm?",
        options: ["A storybook", "A recipe", "A painting", "A mirror"],
        correct: 1,
        explanation: "A recipe works because it gives clear ordered steps, just like an algorithm."
      },
      {
        question: "What must an algorithm eventually do?",
        options: ["Repeat forever", "Change its goal", "End (terminate)", "Use all memory"],
        correct: 2,
        explanation: "An algorithm must be finite, which means it eventually stops instead of running forever."
      }
    ]
  },

  {
    id: 'variables-constants',
    title: 'Variables & Constants',
    icon: '📦',
    level: 'Beginner',
    path: 'Foundations',
    pathDescription: 'Start with the building blocks of how programs think and store information.',
    shortDesc: 'Learn how programs store information using variables and constants.',
    miniPractice: {
      title: 'Pick The Right Container',
      question: 'You want to store a player score that changes during a game. Which is the better choice?',
      options: ['A constant', 'A variable', 'Neither'],
      correct: 1,
      success: 'Right. Scores change over time, so a variable fits best.',
      retry: 'Ask whether the value needs to change later. If yes, choose a variable.'
    },
    content: `
  <div class="ls-hero">
    <span class="ls-badge ls-badge--green">Fundamentals</span>
    <p class="ls-lead">Programs need to remember things. <strong>Variables</strong> and <strong>Constants</strong> are labeled containers that hold values in memory.</p>
  </div>

  <div class="ls-compare-grid">
    <div class="ls-compare-card ls-compare-card--blue">
      <div class="ls-compare-icon">🔄</div>
      <div class="ls-compare-title">Variable</div>
      <div class="ls-compare-sub">Value <strong>can</strong> change</div>
      <div class="ls-code-block">let score = 10;
score = 20; // ✅ ok</div>
      <p>Like a reusable box you can refill anytime.</p>
    </div>
    <div class="ls-compare-card ls-compare-card--orange">
      <div class="ls-compare-icon">🔒</div>
      <div class="ls-compare-title">Constant</div>
      <div class="ls-compare-sub">Value <strong>cannot</strong> change</div>
      <div class="ls-code-block">const pi = 3.14;
pi = 3.2; // ❌ error</div>
      <p>Like a sealed box — once set, stays the same.</p>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">How to use them</h3>
    <div class="ls-numbered-list">
      <div class="ls-nl-item"><span class="ls-nl-num">1</span><div>Declare using a keyword: <code>let</code> or <code>const</code>.</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">2</span><div>Assign a value using <code>=</code>.</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">3</span><div>Use the name later to access the stored value.</div></div>
    </div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>Rule of thumb:</strong> Use <code>const</code> by default. Only use <code>let</code> if the value needs to change.
  </div>
        `,
    quiz: [
      {
        question: "What is the main difference between a variable and a constant?",
        options: ["Variables are faster", "Constants can change value", "Variables can change value, constants cannot", "They are exactly the same"],
        correct: 2,
        explanation: "Variables can hold changing values, while constants stay fixed after assignment."
      },
      {
        question: "Which keyword is typically used to declare a constant in JavaScript?",
        options: ["var", "let", "const", "define"],
        correct: 2,
        explanation: "`const` is the standard JavaScript keyword for declaring a value that should not be reassigned."
      },
      {
        question: "What symbol is used to assign a value?",
        options: ["==", "=", ":", "->"],
        correct: 1,
        explanation: "The single equals sign assigns a value. Double equals or triple equals compare values instead."
      }
    ]
  },
  {
    id: 'binary-basics',
    title: 'Binary: 0s and 1s',
    icon: '💾',
    level: 'Beginner',
    path: 'Foundations',
    pathDescription: 'Start with the building blocks of how programs think and store information.',
    shortDesc: 'Learn how computers use only 0 and 1 to represent numbers, text, images, and more.',
    miniPractice: {
      title: 'Bit Check',
      question: 'In binary, what symbols are used to store information?',
      options: ['0 and 1', 'A and B', '1 through 10'],
      correct: 0,
      success: 'Exactly. Binary uses just two digits: 0 and 1.',
      retry: 'Think of the smallest possible alphabet a computer can use.'
    },
    content: `
  <div class="ls-hero">
    <span class="ls-badge ls-badge--blue">Core Concept</span>
    <p class="ls-lead"><strong>Binary</strong> is the language computers use at the lowest level. Instead of ten digits like humans use, computers work with only <strong>0</strong> and <strong>1</strong>.</p>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Why only 0 and 1?</h3>
    <div class="ls-analogy-block">
      <div class="ls-analogy-icon">💡</div>
      <div>
        <div class="ls-analogy-title">Think like a light switch</div>
        <div class="ls-analogy-text">A switch can be <strong>off</strong> or <strong>on</strong>. Computers are built from tiny electronic parts that are also easiest to read as two states: off = 0, on = 1.</div>
      </div>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">A bit and a byte</h3>
    <div class="ls-cards-row">
      <div class="ls-info-card ls-info-card--blue">
        <div class="ls-info-icon">1️⃣</div>
        <strong>Bit</strong>
        <p>A single binary digit. It can be either 0 or 1.</p>
      </div>
      <div class="ls-info-card ls-info-card--green">
        <div class="ls-info-icon">8️⃣</div>
        <strong>Byte</strong>
        <p>A group of 8 bits. Bytes are often used to store one character like A or B.</p>
      </div>
      <div class="ls-info-card ls-info-card--orange">
        <div class="ls-info-icon">🧱</div>
        <strong>Big Idea</strong>
        <p>Everything on a computer is built from huge patterns of bits.</p>
      </div>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Binary numbers work by place value</h3>
    <div class="ls-numbered-list">
      <div class="ls-nl-item"><span class="ls-nl-num">1</span><div>In normal decimal, places are worth 1, 10, 100, 1000...</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">2</span><div>In binary, places are worth 1, 2, 4, 8, 16...</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">3</span><div>If a place has a 1, include that value. If it has a 0, skip it.</div></div>
    </div>
  </div>

  <div class="ls-visual-example">
    <div class="ls-ve-label">Example: binary 1011</div>
    <div class="ls-bubble-row">
      <div class="ls-bubble">8</div>
      <div class="ls-bubble">4</div>
      <div class="ls-bubble">2</div>
      <div class="ls-bubble">1</div>
    </div>
    <div class="ls-ve-arrow">↓ bits</div>
    <div class="ls-bubble-row">
      <div class="ls-bubble ls-bubble--done">1</div>
      <div class="ls-bubble">0</div>
      <div class="ls-bubble ls-bubble--done">1</div>
      <div class="ls-bubble ls-bubble--done">1</div>
    </div>
    <div class="ls-ve-note">1011₂ = 1×8 + 0×4 + 1×2 + 1×1 = 11₁₀</div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">What can binary represent?</h3>
    <div class="ls-cards-row">
      <div class="ls-info-card ls-info-card--purple">
        <div class="ls-info-icon">🔢</div>
        <strong>Numbers</strong>
        <p>Whole numbers can be stored as patterns of bits.</p>
      </div>
      <div class="ls-info-card ls-info-card--blue">
        <div class="ls-info-icon">🔤</div>
        <strong>Text</strong>
        <p>Letters are stored by assigning each character a binary code.</p>
      </div>
      <div class="ls-info-card ls-info-card--green">
        <div class="ls-info-icon">🖼️</div>
        <strong>Images</strong>
        <p>Pictures are stored as pixel data, which also becomes binary.</p>
      </div>
      <div class="ls-info-card ls-info-card--orange">
        <div class="ls-info-icon">🎵</div>
        <strong>Sound</strong>
        <p>Audio recordings are converted into numeric samples and stored in bits.</p>
      </div>
    </div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>One sentence:</strong> Computers use 0 and 1 because electronic hardware naturally works with two simple states, and those bit patterns can represent almost anything.
  </div>
        `,
    quiz: [
      {
        question: "What is a single 0 or 1 called?",
        options: ["A byte", "A bit", "A pixel", "A loop"],
        correct: 1,
        explanation: "A bit is the smallest unit of binary information and can only be 0 or 1."
      },
      {
        question: "Why do computers use binary?",
        options: ["Because humans prefer it", "Because it matches on/off electronic states", "Because it uses more digits", "Because it is only for text"],
        correct: 1,
        explanation: "Computer hardware can reliably detect two states, which makes binary practical and stable."
      },
      {
        question: "What decimal number does binary 101 equal?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "101 in binary means 4 + 0 + 1, which equals 5."
      }
    ]
  },
  {
    id: 'boolean-logic',
    title: 'Boolean Logic',
    icon: '⚖️',
    level: 'Beginner',
    path: 'Logic & Control Flow',
    pathDescription: 'Learn how computers make choices, branch, and repeat work.',
    shortDesc: 'Learn how computers make decisions using TRUE and FALSE.',
    miniPractice: {
      title: 'True Or False',
      question: 'If BOTH conditions must be true, which operator idea matches that rule?',
      options: ['AND', 'OR', 'NOT'],
      correct: 0,
      success: 'Yes. AND only succeeds when both conditions are true.',
      retry: 'Think of the stricter rule: both statements must pass.'
    },
    content: `
  <div class="ls-hero">
    <span class="ls-badge ls-badge--teal">Easy Mode On</span>
    <p class="ls-lead"><strong>Boolean Logic</strong> = decisions with only 2 choices. Every computer decision on Earth comes down to just <em>TRUE</em> or <em>FALSE</em>.</p>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">A simple pattern</h3>
    <div class="ls-steps">
      <div class="ls-step ls-step--1">
        <div class="ls-step-num">1</div>
        <div class="ls-step-label">Input</div>
        <div class="ls-step-sub">What we check</div>
      </div>
      <div class="ls-step-arrow">→</div>
      <div class="ls-step ls-step--2">
        <div class="ls-step-num">2</div>
        <div class="ls-step-label">Condition</div>
        <div class="ls-step-sub">The rule</div>
      </div>
      <div class="ls-step-arrow">→</div>
      <div class="ls-step ls-step--3">
        <div class="ls-step-num">3</div>
        <div class="ls-step-label">Result</div>
        <div class="ls-step-sub">True or False</div>
      </div>
      <div class="ls-step-arrow">→</div>
      <div class="ls-step ls-step--4">
        <div class="ls-step-num">4</div>
        <div class="ls-step-label">Action</div>
        <div class="ls-step-sub">What happens next</div>
      </div>
    </div>
  </div>

  <div class="ls-realworld-block">
    <div class="ls-rw-header">🌍 Real world → Computer world</div>
    <div class="ls-rw-rows">
      <div class="ls-rw-row"><span class="ls-rw-q">Is the pizza ready?</span><span class="ls-rw-arrow">→</span><span class="ls-rw-t">TRUE</span><span class="ls-rw-or">or</span><span class="ls-rw-f">FALSE</span></div>
      <div class="ls-rw-row"><span class="ls-rw-q">Is it raining?</span><span class="ls-rw-arrow">→</span><span class="ls-rw-t">TRUE</span><span class="ls-rw-or">or</span><span class="ls-rw-f">FALSE</span></div>
      <div class="ls-rw-row"><span class="ls-rw-q">Do you have money?</span><span class="ls-rw-arrow">→</span><span class="ls-rw-t">TRUE</span><span class="ls-rw-or">or</span><span class="ls-rw-f">FALSE</span></div>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">The 3 Main Operators</h3>
    <div class="ls-operator-list">
      <div class="ls-operator ls-op--and">
        <div class="ls-op-badge">AND <code>&&</code></div>
        <div class="ls-op-rule">Both must be TRUE</div>
        <div class="ls-op-example">Have money ✅ + Shop open ✅ → You buy ✅<br>Have money ✅ + Shop closed ❌ → You can't ❌</div>
      </div>
      <div class="ls-operator ls-op--or">
        <div class="ls-op-badge">OR <code>||</code></div>
        <div class="ls-op-rule">At least one must be TRUE</div>
        <div class="ls-op-example">Pizza ✅ OR Burger ❌ → You eat ✅<br>Pizza ❌ OR Burger ❌ → You don't eat ❌</div>
      </div>
      <div class="ls-operator ls-op--not">
        <div class="ls-op-badge">NOT <code>!</code></div>
        <div class="ls-op-rule">Flips the result</div>
        <div class="ls-op-example">NOT raining ❌ → It's sunny ☀️ (TRUE)<br>NOT raining ✅ → It's raining 🌧️ (FALSE)</div>
      </div>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Mini example: Can you go out?</h3>
    <div class="ls-example-card">
      <div class="ls-ex-conditions">
        <span class="ls-ex-cond">Homework done?</span>
        <span class="ls-ex-op">AND</span>
        <span class="ls-ex-cond">No rain?</span>
      </div>
      <div class="ls-ex-cases">
        <div class="ls-ex-case ls-ex-case--fail">
          <span>Homework ❌ AND No rain ✅</span>
          <span class="ls-ex-result ls-ex-result--false">Result = FALSE → Stay home</span>
        </div>
        <div class="ls-ex-case ls-ex-case--pass">
          <span>Homework ✅ AND No rain ✅</span>
          <span class="ls-ex-result ls-ex-result--true">Result = TRUE → You go out 🎉</span>
        </div>
      </div>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Boolean logic is everywhere</h3>
    <div class="ls-cards-row">
      <div class="ls-info-card ls-info-card--blue">
        <div class="ls-info-icon">📱</div>
        <strong>Phone unlock</strong>
        <p>Face recognized → TRUE → Unlock</p>
      </div>
      <div class="ls-info-card ls-info-card--green">
        <div class="ls-info-icon">🎮</div>
        <strong>Game</strong>
        <p>Health > 0 → TRUE → Continue</p>
      </div>
      <div class="ls-info-card ls-info-card--orange">
        <div class="ls-info-icon">🛒</div>
        <strong>Online Shop</strong>
        <p>Card valid AND balance > 0 → Purchase</p>
      </div>
      <div class="ls-info-card ls-info-card--purple">
        <div class="ls-info-icon">🎬</div>
        <strong>Streaming</strong>
        <p>Watched similar → TRUE → Recommend</p>
      </div>
    </div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>One sentence:</strong> Computers check a condition and get TRUE or FALSE — then act on it. That's everything.
  </div>
        `
    ,
    quiz: [
      {
        question: "What are the two possible values in Boolean logic?",
        options: ["Yes and Maybe", "True and False", "1 and 2", "Up and Down"],
        correct: 1,
        explanation: "Boolean logic reduces decisions to two states only: true or false."
      },
      {
        question: "Which operator requires BOTH conditions to be true?",
        options: ["OR (||)", "NOT (!)", "AND (&&)", "MAYBE"],
        correct: 2,
        explanation: "AND is the operator that only returns true when both conditions are true."
      },
      {
        question: "If a condition is True, what does the NOT (!) operator turn it into?",
        options: ["True", "False", "Both", "Nothing"],
        correct: 1,
        explanation: "NOT flips the value, so true becomes false and false becomes true."
      }
    ]
  },
  {
    id: 'if-else-statements',
    title: 'If, Else & Else If',
    icon: '⚖️',
    level: 'Intermediate',
    path: 'Logic & Control Flow',
    pathDescription: 'Learn how computers make choices, branch, and repeat work.',
    shortDesc: 'Learn how computers make decisions based on conditions.',
    miniPractice: {
      title: 'Choose The Branch',
      question: 'If `isLoggedIn` is false, which branch runs?',
      options: ['The `if` block', 'The `else` block', 'Both blocks'],
      correct: 1,
      success: 'Exactly. The `else` block is the fallback when the `if` condition is false.',
      retry: 'Trace the condition first. A false `if` sends execution to the fallback branch.'
    },
    content: `
  <div class="ls-hero">
    <span class="ls-badge ls-badge--orange">Fundamentals</span>
    <p class="ls-lead">Computers make decisions step by step. Programs don't think... they just follow <strong>conditions</strong>.</p>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">A simple pattern</h3>
    <div class="ls-steps">
      <div class="ls-step ls-step--1">
        <div class="ls-step-num">1</div>
        <div class="ls-step-label">Input</div>
        <div class="ls-step-sub">What we check</div>
      </div>
      <div class="ls-step-arrow">→</div>
      <div class="ls-step ls-step--2">
        <div class="ls-step-num">2</div>
        <div class="ls-step-label">Condition</div>
        <div class="ls-step-sub">The rule</div>
      </div>
      <div class="ls-step-arrow">→</div>
      <div class="ls-step ls-step--3">
        <div class="ls-step-num">3</div>
        <div class="ls-step-label">Decision</div>
        <div class="ls-step-sub">Which path</div>
      </div>
      <div class="ls-step-arrow">→</div>
      <div class="ls-step ls-step--4">
        <div class="ls-step-num">4</div>
        <div class="ls-step-label">Action</div>
        <div class="ls-step-sub">What happens</div>
      </div>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">So... what is an IF?</h3>
    <div class="ls-analogy-block">
      <div class="ls-analogy-icon"></div>
      <div>
        <div class="ls-analogy-title">Real World Decisions</div>
        <div class="ls-analogy-text">
          • If it rains → take umbrella ☔<br>
          • If you are hungry → eat 🍔<br>
          • If battery = 0 → charge 🔋
        </div>
      </div>
    </div>
    <div class="ls-code-block">if (condition) {
   // do something
}</div>
    <p class="ls-compare-sub"><strong>If TRUE</strong> → run the code. <strong>If FALSE</strong> → skip it.</p>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">IF + ELSE (The Plan B)</h3>
    <div class="ls-compare-grid">
      <div class="ls-compare-card ls-compare-card--blue">
        <div class="ls-compare-icon">✔</div>
        <div class="ls-compare-title">IF</div>
        <div class="ls-compare-sub">When TRUE</div>
        <p>If it rains → take umbrella ☔</p>
      </div>
      <div class="ls-compare-card ls-compare-card--orange">
        <div class="ls-compare-icon">❌</div>
        <div class="ls-compare-title">ELSE</div>
        <div class="ls-compare-sub">When FALSE</div>
        <p>Else → wear sunglasses 😎</p>
      </div>
    </div>
    <div class="ls-code-block">if (isRaining) {
   takeUmbrella();
} else {
   wearSunglasses();
}</div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">ELSE IF (The Decision Ladder)</h3>
    <p class="ls-compare-sub">What if we have MANY options? Use <strong>ELSE IF</strong>.</p>
    <div class="ls-code-block">if (score > 90) {
   grade = "Excellent";
} else if (score > 60) {
   grade = "Good";
} else {
   grade = "Try again";
}</div>
    <div class="ls-numbered-list">
      <div class="ls-nl-item"><span class="ls-nl-num">1</span><div><strong>IF</strong> → first check</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">2</span><div><strong>ELSE IF</strong> → more checks</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">3</span><div><strong>ELSE</strong> → default / fallback</div></div>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Why It Matters</h3>
    <div class="ls-cards-row">
      <div class="ls-info-card ls-info-card--blue">
        <div class="ls-info-icon">⚡</div>
        <strong>Decisions</strong>
        <p>Apps react to users in real-time.</p>
      </div>
      <div class="ls-info-card ls-info-card--green">
        <div class="ls-info-icon">🎮</div>
        <strong>Games</strong>
        <p>Win / Lose logic and health checks.</p>
      </div>
      <div class="ls-info-card ls-info-card--orange">
        <div class="ls-info-icon">📱</div>
        <strong>Apps</strong>
        <p>Login success vs. showing an error.</p>
      </div>
      <div class="ls-info-card ls-info-card--purple">
        <div class="ls-info-icon">🛒</div>
        <strong>E-commerce</strong>
        <p>Applying discounts and processing payments.</p>
      </div>
    </div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>Final sentence:</strong> Computers don't think — they choose between paths using IF statements.
  </div>
        `,
    quiz: [
      {
        question: "What happens if an 'IF' condition is FALSE and there is no 'ELSE' block?",
        options: ["The program crashes", "The code inside is skipped", "The code inside runs anyway", "It asks the user what to do"],
        correct: 1,
        explanation: "If there is no `else`, the program simply skips the code inside the false `if` block and moves on."
      },
      {
        question: "When should you use 'ELSE IF'?",
        options: ["When you have only one choice", "When you have multiple different conditions to check", "When you want to repeat code", "Only at the end of a program"],
        correct: 1,
        explanation: "`else if` is useful when you need to test several possible conditions in order."
      },
      {
        question: "Which part of an IF-ELSE statement runs if the condition is TRUE?",
        options: ["The ELSE block", "The IF block", "Both blocks", "Neither block"],
        correct: 1,
        explanation: "When the condition is true, the code inside the `if` block runs and the `else` block is skipped."
      }
    ]
  },
  {
    id: 'for-while-loops',
    title: 'For & While Loops',
    icon: '🔁',
    level: 'Intermediate',
    path: 'Logic & Control Flow',
    pathDescription: 'Learn how computers make choices, branch, and repeat work.',
    shortDesc: 'Learn how loops repeat instructions efficiently using for and while statements.',
    miniPractice: {
      title: 'Loop Match',
      question: 'You know you need to repeat a task exactly 5 times. Which loop usually fits best?',
      options: ['For loop', 'While loop', 'No loop'],
      correct: 0,
      success: 'Nice. A `for` loop is usually the clearest choice when the repeat count is known.',
      retry: 'Choose the loop that naturally includes a counter and stopping condition.'
    },
    content: `
  <div class="ls-hero">
    <span class="ls-badge ls-badge--purple">Control Flow</span>
    <p class="ls-lead"><strong>Loops</strong> let you repeat a block of code multiple times — without writing it over and over.</p>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">A simple pattern</h3>
    <div class="ls-steps">
      <div class="ls-step ls-step--1">
        <div class="ls-step-num">1</div>
        <div class="ls-step-label">Initialize</div>
        <div class="ls-step-sub">Set the start</div>
      </div>
      <div class="ls-step-arrow">→</div>
      <div class="ls-step ls-step--2">
        <div class="ls-step-num">2</div>
        <div class="ls-step-label">Condition</div>
        <div class="ls-step-sub">Keep going?</div>
      </div>
      <div class="ls-step-arrow">→</div>
      <div class="ls-step ls-step--3">
        <div class="ls-step-num">3</div>
        <div class="ls-step-label">Action</div>
        <div class="ls-step-sub">Run the code</div>
      </div>
      <div class="ls-step-arrow">→</div>
      <div class="ls-step ls-step--4">
        <div class="ls-step-num">4</div>
        <div class="ls-step-label">Update</div>
        <div class="ls-step-sub">Change counter</div>
      </div>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Real World Repetition</h3>
    <div class="ls-analogy-block">
      <div class="ls-analogy-icon">🏃‍♂️</div>
      <div>
        <div class="ls-analogy-title">How we loop in real life</div>
        <div class="ls-analogy-text">
          • <strong>For loop:</strong> Do exactly 10 pushups.<br>
          • <strong>While loop:</strong> Walk forward until you hit a wall.<br>
          • <strong>Do-While loop:</strong> Eat one bite, then check if you're still hungry.
        </div>
      </div>
    </div>
  </div>

  <div class="ls-compare-grid">
    <div class="ls-compare-card ls-compare-card--blue">
      <div class="ls-compare-icon">🔢</div>
      <div class="ls-compare-title">For Loop</div>
      <div class="ls-compare-sub">Use when you <strong>know</strong> the count</div>
      <div class="ls-code-block">for (let i = 0; i < 5; i++) {
  console.log("Repeat 5 times");
}</div>
      <p>Like running laps on a track.</p>
    </div>
    <div class="ls-compare-card ls-compare-card--orange">
      <div class="ls-compare-icon">🔄</div>
      <div class="ls-compare-title">While Loop</div>
      <div class="ls-compare-sub">Use when you <strong>don't know</strong> the count</div>
      <div class="ls-code-block">let isHungry = true;
while (isHungry) {
  eat();
  isHungry = checkStomach();
}</div>
      <p>Like waiting in line until it's your turn.</p>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Loop Control: Break & Continue</h3>
    <div class="ls-numbered-list">
      <div class="ls-nl-item"><span class="ls-nl-num">1</span><div><strong>BREAK</strong>: Stops the loop immediately. Exit now!</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">2</span><div><strong>CONTINUE</strong>: Skips the rest of this turn and starts the next one.</div></div>
    </div>
    <div class="ls-code-block">for (let i = 1; i <= 10; i++) {
  if (i === 5) break; // Stops at 5
  console.log(i);
}</div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Why It Matters</h3>
    <div class="ls-cards-row">
      <div class="ls-info-card ls-info-card--blue">
        <div class="ls-info-icon">📋</div>
        <strong>Lists</strong>
        <p>Displaying 100 products on a page automatically.</p>
      </div>
      <div class="ls-info-card ls-info-card--green">
        <div class="ls-info-icon">🎮</div>
        <strong>Games</strong>
        <p>The "game loop" that updates the screen 60 times a second.</p>
      </div>
      <div class="ls-info-card ls-info-card--orange">
        <div class="ls-info-icon">🔎</div>
        <strong>Searching</strong>
        <p>Looking through all your files for a specific name.</p>
      </div>
      <div class="ls-info-card ls-info-card--purple">
        <div class="ls-info-icon">📧</div>
        <strong>Automation</strong>
        <p>Sending the same email to a list of subscribers.</p>
      </div>
    </div>
  </div>

  <div class="ls-warning-block">
    <span>⚠️</span>
    <div><strong>Infinite Loop Warning!</strong> If the condition never becomes false, your program will crash. Always make sure the loop can end.</div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>Final sentence:</strong> Loops save time by automating repetitive tasks — making computers do the boring work.
  </div>
        `,
    quiz: [
      {
        question: "When is a for loop usually preferred?",
        options: ["When you know the number of repetitions", "When the loop runs forever", "When you don't need a condition", "When using constants only"],
        correct: 0,
        explanation: "A `for` loop is best when you already know how many iterations you want."
      },
      {
        question: "What happens if a while loop's condition never becomes false?",
        options: ["It stops automatically", "It creates an infinite loop", "It throws a syntax error", "It runs only once"],
        correct: 1,
        explanation: "If the condition never changes to false, the loop keeps running forever and becomes an infinite loop."
      },
      {
        question: "What keyword is used to stop a loop immediately?",
        options: ["stop", "exit", "break", "continue"],
        correct: 2,
        explanation: "`break` exits the loop immediately, even if the normal condition would keep it going."
      }
    ]
  },
  {
    id: 'decomposition',
    title: 'Decomposition',
    icon: '🧩',
    level: 'Beginner',
    path: 'Computational Thinking',
    pathDescription: 'Learn how to approach big problems like a computer scientist.',
    shortDesc: 'Break one complex problem into smaller, solvable parts.',
    miniPractice: {
      title: 'Break It Down',
      question: 'You need to build a school portal. What is the best first move?',
      options: [
        'Build every feature in one file',
        'Split the project into login, courses, grades, and notifications',
        'Pick colors and animations before planning features'
      ],
      correct: 1,
      success: 'Exactly. That is decomposition: divide a big goal into smaller modules.',
      retry: 'Look for the option that turns one big task into smaller manageable tasks.'
    },
    content: `
  <div class="ls-hero">
    <span class="ls-badge ls-badge--green">Computational Thinking</span>
    <p class="ls-lead"><strong>Decomposition</strong> means breaking a large problem into smaller parts that are easier to understand, solve, and test.</p>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Why decomposition helps</h3>
    <div class="ls-cards-row">
      <div class="ls-info-card ls-info-card--blue">
        <div class="ls-info-icon">🧠</div>
        <strong>Less Overwhelm</strong>
        <p>Small tasks are easier to reason about than one giant challenge.</p>
      </div>
      <div class="ls-info-card ls-info-card--orange">
        <div class="ls-info-icon">🛠️</div>
        <strong>Easier Debugging</strong>
        <p>If something fails, you can locate the issue in one specific part.</p>
      </div>
      <div class="ls-info-card ls-info-card--green">
        <div class="ls-info-icon">🤝</div>
        <strong>Team Friendly</strong>
        <p>Different people can work on different pieces at the same time.</p>
      </div>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Simple process</h3>
    <div class="ls-numbered-list">
      <div class="ls-nl-item"><span class="ls-nl-num">1</span><div>Write the main goal clearly.</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">2</span><div>List major components needed.</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">3</span><div>Split each component into smaller tasks.</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">4</span><div>Solve each task and combine results.</div></div>
    </div>
  </div>

  <div class="ls-analogy-block">
    <div class="ls-analogy-icon">🍕</div>
    <div>
      <div class="ls-analogy-title">Real-life analogy</div>
      <div class="ls-analogy-text">You do not eat a whole pizza in one bite. You slice it first, then handle one slice at a time.</div>
    </div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>One sentence:</strong> Decomposition turns complexity into a checklist.
  </div>
        `,
    quiz: [
      {
        question: "What is decomposition?",
        options: ["Optimizing memory usage", "Breaking a big problem into smaller parts", "Hiding implementation details", "Repeating code blocks"],
        correct: 1,
        explanation: "Decomposition is the process of dividing a complex problem into manageable pieces."
      },
      {
        question: "What is a key benefit of decomposition?",
        options: ["It removes all testing", "It makes debugging harder", "It helps isolate and solve parts step by step", "It avoids planning"],
        correct: 2,
        explanation: "When work is split into parts, each part can be solved and tested more easily."
      },
      {
        question: "Which approach shows decomposition?",
        options: ["Build everything at once", "Ignore modules", "Split an app into authentication, lessons, and quiz systems", "Only design UI first"],
        correct: 2,
        explanation: "Dividing by feature/module is a classic decomposition strategy."
      }
    ]
  },
  {
    id: 'abstraction',
    title: 'Abstraction',
    icon: '🎯',
    level: 'Beginner',
    path: 'Computational Thinking',
    pathDescription: 'Learn how to approach big problems like a computer scientist.',
    shortDesc: 'Focus on important details and ignore the rest to simplify solutions.',
    miniPractice: {
      title: 'Focus The Model',
      question: 'For a bus route app, which details are most important to show first?',
      options: [
        'The driver favorite music',
        'Route number, stops, and arrival times',
        'Paint color of every bus seat'
      ],
      correct: 1,
      success: 'Right. Abstraction keeps only details that matter for the goal.',
      retry: 'Pick the option with information users need to complete the task.'
    },
    content: `
  <div class="ls-hero">
    <span class="ls-badge ls-badge--blue">Computational Thinking</span>
    <p class="ls-lead"><strong>Abstraction</strong> means keeping the important details and hiding unnecessary complexity so a problem is easier to work with.</p>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Why abstraction helps</h3>
    <div class="ls-cards-row">
      <div class="ls-info-card ls-info-card--blue">
        <div class="ls-info-icon">⚡</div>
        <strong>Faster Decisions</strong>
        <p>You focus only on data that affects the outcome.</p>
      </div>
      <div class="ls-info-card ls-info-card--purple">
        <div class="ls-info-icon">🧱</div>
        <strong>Cleaner Design</strong>
        <p>Systems become simpler when each part has a clear role.</p>
      </div>
      <div class="ls-info-card ls-info-card--green">
        <div class="ls-info-icon">🔁</div>
        <strong>Reusable Components</strong>
        <p>Abstract interfaces can be reused across many projects.</p>
      </div>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Common examples</h3>
    <div class="ls-numbered-list">
      <div class="ls-nl-item"><span class="ls-nl-num">1</span><div><strong>Map:</strong> shows roads and landmarks, not every blade of grass.</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">2</span><div><strong>Function call:</strong> <code>saveFile()</code> hides low-level file operations.</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">3</span><div><strong>User interface:</strong> a button hides networking and database logic.</div></div>
    </div>
  </div>

  <div class="ls-analogy-block">
    <div class="ls-analogy-icon">🗺️</div>
    <div>
      <div class="ls-analogy-title">Real-life analogy</div>
      <div class="ls-analogy-text">A subway map is not geographically perfect. It is simplified to help you travel, which is exactly the goal of abstraction.</div>
    </div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>One sentence:</strong> Abstraction removes noise so the core logic stands out.
  </div>
        `,
    quiz: [
      {
        question: "What is abstraction in computational thinking?",
        options: ["Adding as many details as possible", "Focusing on important details and ignoring irrelevant ones", "Splitting tasks into teams only", "Running code without testing"],
        correct: 1,
        explanation: "Abstraction simplifies problem-solving by keeping only what matters."
      },
      {
        question: "Which example best shows abstraction?",
        options: ["A function that exposes every internal variable", "A city map with every house interior", "A button that hides backend complexity", "Writing the same code in many places"],
        correct: 2,
        explanation: "A simple interface that hides complexity is a core abstraction pattern."
      },
      {
        question: "Why is abstraction useful?",
        options: ["It always makes code longer", "It helps simplify systems and reduce cognitive load", "It removes the need for structure", "It prevents modularity"],
        correct: 1,
        explanation: "By reducing unnecessary detail, abstraction makes systems easier to design and understand."
      }
    ]
  },
  {
    id: 'bubble-sort',
    title: 'Bubble Sort',
    icon: '🧼',
    level: 'Advanced',
    path: 'Algorithms',
    pathDescription: 'Move from fundamentals into algorithmic thinking and performance ideas.',
    shortDesc: 'One of the simplest sorting algorithms. Visualize how data elements "bubble" to the top.',
    miniPractice: {
      title: 'Predict The Swap',
      question: 'In Bubble Sort, what do you compare first during a pass?',
      options: ['The smallest and largest numbers', 'Two adjacent items', 'Every item at the same time'],
      correct: 1,
      success: 'Exactly. Bubble Sort works by comparing neighboring items and swapping when needed.',
      retry: 'Think local, not global. Bubble Sort only checks nearby pairs one step at a time.'
    },
    content: `
  <div class="ls-hero">
    <span class="ls-badge ls-badge--purple">Sorting Algorithm</span>
    <p class="ls-lead"><strong>Bubble Sort</strong> repeatedly compares adjacent elements and swaps them if they're in the wrong order — like bubbles rising to the surface.</p>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">How it works — step by step</h3>
    <div class="ls-numbered-list">
      <div class="ls-nl-item"><span class="ls-nl-num">1</span><div>Compare the first two items in the list.</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">2</span><div>If the first is <strong>greater</strong> than the second, <strong>swap</strong> them.</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">3</span><div>Move to the next pair and repeat until the end of the list.</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">4</span><div>Repeat all passes until <strong>no more swaps</strong> are needed.</div></div>
    </div>
  </div>

  <div class="ls-visual-example">
    <div class="ls-ve-label">Example: sorting [5, 3, 8, 1]</div>
    <div class="ls-bubble-row">
      <div class="ls-bubble ls-bubble--swap">5</div>
      <div class="ls-bubble ls-bubble--swap">3</div>
      <div class="ls-bubble">8</div>
      <div class="ls-bubble">1</div>
    </div>
    <div class="ls-ve-arrow">↓ after pass 1</div>
    <div class="ls-bubble-row">
      <div class="ls-bubble">3</div>
      <div class="ls-bubble">5</div>
      <div class="ls-bubble">1</div>
      <div class="ls-bubble ls-bubble--done">8</div>
    </div>
    <div class="ls-ve-note">8 "bubbled up" to its correct position ✅</div>
  </div>

  <div class="ls-cards-row">
    <div class="ls-info-card ls-info-card--green">
      <div class="ls-info-icon">✅</div>
      <strong>Pro</strong>
      <p>Very simple to understand and implement.</p>
    </div>
    <div class="ls-info-card ls-info-card--red">
      <div class="ls-info-icon">⚠️</div>
      <strong>Con</strong>
      <p>Slow for large lists — worst case is O(n²).</p>
    </div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>Remember:</strong> Largest values bubble up to the end with each pass.
  </div>
        `,
    quiz: [
      {
        question: "What does Bubble Sort compare in each step?",
        options: ["First and last items", "Random items", "Adjacent items", "The whole list"],
        correct: 2,
        explanation: "Bubble Sort compares neighboring elements because it swaps local pairs one step at a time."
      },
      {
        question: "Why is it called 'Bubble Sort'?",
        options: ["It pops the data", "Larger elements 'bubble up' to the end", "It creates bubbles in memory", "It uses circular logic"],
        correct: 1,
        explanation: "On each pass, larger values move toward the end of the list, which looks like them bubbling upward."
      }
    ]
  },
];
