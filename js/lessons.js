const lessonData = [
  {
    id: 'algorithms',
    title: 'What is an Algorithm?',
    icon: '⚡',
    shortDesc: 'The foundation of all computer science. Learn how we solve problems step-by-step.',
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
    id: 'boolean-logic',
    title: 'Boolean Logic',
    icon: '⚖️',
    shortDesc: 'Learn how computers make decisions using TRUE and FALSE.',
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
        correct: 1
      },
      {
        question: "Which operator requires BOTH conditions to be true?",
        options: ["OR (||)", "NOT (!)", "AND (&&)", "MAYBE"],
        correct: 2
      },
      {
        question: "If a condition is True, what does the NOT (!) operator turn it into?",
        options: ["True", "False", "Both", "Nothing"],
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
  <div class="ls-hero">
    <span class="ls-badge ls-badge--purple">Control Flow</span>
    <p class="ls-lead"><strong>Loops</strong> let you repeat a block of code multiple times — without writing it over and over.</p>
  </div>

  <div class="ls-compare-grid">
    <div class="ls-compare-card ls-compare-card--blue">
      <div class="ls-compare-icon">🔢</div>
      <div class="ls-compare-title">For Loop</div>
      <div class="ls-compare-sub">Use when you <strong>know</strong> the count</div>
      <div class="ls-code-block">for (let i = 0; i &lt; 5; i++) {
  console.log(i);
}</div>
    </div>
    <div class="ls-compare-card ls-compare-card--orange">
      <div class="ls-compare-icon">🔄</div>
      <div class="ls-compare-title">While Loop</div>
      <div class="ls-compare-sub">Use when you <strong>don't know</strong> the count</div>
      <div class="ls-code-block">let count = 0;
while (count &lt; 5) {
  count++;
}</div>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">How a For Loop works</h3>
    <div class="ls-numbered-list">
      <div class="ls-nl-item"><span class="ls-nl-num">1</span><div>Initialize a counter <code>(let i = 0)</code>.</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">2</span><div>Check the condition <code>(i &lt; 5)</code>.</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">3</span><div>Run the code block.</div></div>
      <div class="ls-nl-item"><span class="ls-nl-num">4</span><div>Increase the counter <code>(i++)</code> and go back to step 2.</div></div>
    </div>
  </div>

  <div class="ls-warning-block">
    <span>⚠️</span>
    <div><strong>Infinite Loop Warning!</strong> If the condition never becomes false, your program will crash. Always make sure the loop can end.</div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>Shortcut:</strong> For = known count. While = condition-based.
  </div>
        `,
    quiz: [
      {
        question: "When is a for loop usually preferred?",
        options: ["When you know the number of repetitions", "When the loop runs forever", "When you don't need a condition", "When using constants only"],
        correct: 0
      },
      {
        question: "What happens if a while loop's condition never becomes false?",
        options: ["It stops automatically", "It creates an infinite loop", "It throws a syntax error", "It runs only once"],
        correct: 1
      },
      {
        question: "What does i++ do in a for loop?",
        options: ["Resets the counter", "Decreases i by 1", "Increases i by 1", "Checks the condition"],
        correct: 2
      }
    ]
  },
  {
    id: 'data-structures-1',
    title: 'Arrays vs Linked Lists',
    icon: '🔗',
    shortDesc: 'The building blocks of data organization. Compare how they store information.',
    content: `
  <div class="ls-hero">
    <span class="ls-badge ls-badge--blue">Data Structures</span>
    <p class="ls-lead">How you <strong>store</strong> data matters as much as the data itself. Arrays and Linked Lists solve this differently.</p>
  </div>

  <div class="ls-compare-grid">
    <div class="ls-compare-card ls-compare-card--blue">
      <div class="ls-compare-icon">📦</div>
      <div class="ls-compare-title">Array</div>
      <div class="ls-compare-sub">Contiguous (side-by-side) memory</div>
      <div class="ls-bubble-row" style="margin:0.75rem 0;">
        <div class="ls-bubble">A</div>
        <div class="ls-bubble">B</div>
        <div class="ls-bubble">C</div>
        <div class="ls-bubble">D</div>
      </div>
      <p>✅ Fast access by index — O(1)</p>
      <p>❌ Slow to insert/delete in middle — O(n)</p>
    </div>
    <div class="ls-compare-card ls-compare-card--orange">
      <div class="ls-compare-icon">🔗</div>
      <div class="ls-compare-title">Linked List</div>
      <div class="ls-compare-sub">Nodes scattered in memory, linked by pointers</div>
      <div class="ls-linked-visual">
        <span class="ls-node">A</span><span class="ls-link">→</span>
        <span class="ls-node">B</span><span class="ls-link">→</span>
        <span class="ls-node">C</span><span class="ls-link">→</span>
        <span class="ls-node">null</span>
      </div>
      <p>✅ Fast insert/delete — O(1) with pointer</p>
      <p>❌ Slow to find an element — O(n)</p>
    </div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>Choose wisely:</strong> Need fast lookups? Array. Need fast inserts/deletes? Linked List.
  </div>
        `,
    quiz: [
      {
        question: "Which data structure stores elements in contiguous memory?",
        options: ["Linked List", "Array", "Stack", "Queue"],
        correct: 1
      },
      {
        question: "What is a major disadvantage of a standard array?",
        options: ["Slow access speed", "It cannot store numbers", "Difficult to resize", "Uses too many pointers"],
        correct: 2
      }
    ]
  },
  {
    id: 'stacks-queues',
    title: 'Stacks & Queues',
    icon: '📚',
    shortDesc: 'Understand the difference between LIFO and FIFO ordering.',
    content: `
  <div class="ls-hero">
    <span class="ls-badge ls-badge--green">Data Structures</span>
    <p class="ls-lead"><strong>Stacks</strong> and <strong>Queues</strong> define the order in which items are added and removed — two opposite strategies.</p>
  </div>

  <div class="ls-compare-grid">
    <div class="ls-compare-card ls-compare-card--blue">
      <div class="ls-compare-icon">🥞</div>
      <div class="ls-compare-title">Stack</div>
      <div class="ls-compare-sub"><strong>LIFO</strong> — Last In, First Out</div>
      <div class="ls-stack-visual">
        <div class="ls-stack-item ls-stack-top">📄 Last added ← out first</div>
        <div class="ls-stack-item">📄 Middle</div>
        <div class="ls-stack-item">📄 First added</div>
      </div>
      <p>Like a stack of plates — you take from the top.</p>
      <p>Operations: <strong>Push</strong> (add top) / <strong>Pop</strong> (remove top)</p>
    </div>
    <div class="ls-compare-card ls-compare-card--orange">
      <div class="ls-compare-icon">🎟️</div>
      <div class="ls-compare-title">Queue</div>
      <div class="ls-compare-sub"><strong>FIFO</strong> — First In, First Out</div>
      <div class="ls-queue-visual">
        <span class="ls-q-item ls-q-front">1st ← out first</span>
        <span class="ls-q-arrow">→</span>
        <span class="ls-q-item">2nd</span>
        <span class="ls-q-arrow">→</span>
        <span class="ls-q-item ls-q-back">3rd ← in last</span>
      </div>
      <p>Like a cinema line — first person in gets in first.</p>
      <p>Operations: <strong>Enqueue</strong> (add back) / <strong>Dequeue</strong> (remove front)</p>
    </div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>Shortcut:</strong> Stack = plates (top first). Queue = line (front first).
  </div>
        `,
    quiz: [
      {
        question: "What does LIFO stand for?",
        options: ["Link In, Fold Out", "Last In, First Out", "List In, Fast Out", "Line In, First Out"],
        correct: 1
      },
      {
        question: "In a queue, where are new items added?",
        options: ["The front", "The middle", "The back", "Randomly"],
        correct: 2
      }
    ]
  },
  {
    id: 'big-o-notation',
    title: 'Big O Notation',
    icon: '📉',
    shortDesc: 'How we measure the efficiency of an algorithm as data grows.',
    content: `
  <div class="ls-hero">
    <span class="ls-badge ls-badge--red">Complexity</span>
    <p class="ls-lead"><strong>Big O Notation</strong> measures how an algorithm's speed or memory grows as input size increases. It's the language of efficiency.</p>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">The common complexities</h3>
    <div class="ls-bigo-list">
      <div class="ls-bigo-item ls-bigo--green">
        <div class="ls-bigo-notation">O(1)</div>
        <div class="ls-bigo-name">Constant</div>
        <div class="ls-bigo-desc">Speed doesn't change no matter how big the data. Best case. (e.g., array index access)</div>
      </div>
      <div class="ls-bigo-item ls-bigo--yellow">
        <div class="ls-bigo-notation">O(log n)</div>
        <div class="ls-bigo-name">Logarithmic</div>
        <div class="ls-bigo-desc">Grows slowly. Very efficient. (e.g., binary search)</div>
      </div>
      <div class="ls-bigo-item ls-bigo--orange">
        <div class="ls-bigo-notation">O(n)</div>
        <div class="ls-bigo-name">Linear</div>
        <div class="ls-bigo-desc">Time grows proportionally with input. (e.g., simple list search)</div>
      </div>
      <div class="ls-bigo-item ls-bigo--red">
        <div class="ls-bigo-notation">O(n²)</div>
        <div class="ls-bigo-name">Quadratic</div>
        <div class="ls-bigo-desc">Time grows fast! Usually means nested loops. (e.g., Bubble Sort)</div>
      </div>
    </div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>Goal:</strong> Always aim for the smallest Big O you can achieve.
  </div>
        `,
    quiz: [
      {
        question: "Which Big O complexity is generally considered the fastest for large N?",
        options: ["O(n²)", "O(n)", "O(1)", "O(log n)"],
        correct: 2
      },
      {
        question: "Searching through a simple list once usually has what complexity?",
        options: ["Linear - O(n)", "Constant - O(1)", "Quadratic - O(n²)", "Exponential"],
        correct: 0
      }
    ]
  },
  {
    id: 'recursion',
    title: 'Recursion',
    icon: '🌀',
    shortDesc: 'When a function calls itself to solve a smaller version of a problem.',
    content: `
  <div class="ls-hero">
    <span class="ls-badge ls-badge--purple">Advanced Concept</span>
    <p class="ls-lead"><strong>Recursion</strong> is when a function solves a problem by calling <em>itself</em> with a smaller version of the same problem.</p>
  </div>

  <div class="ls-analogy-block">
    <div class="ls-analogy-icon">🪆</div>
    <div>
      <div class="ls-analogy-title">Think of Russian Dolls</div>
      <div class="ls-analogy-text">Each doll contains a smaller version of itself — until you reach the smallest one (the base case).</div>
    </div>
  </div>

  <div class="ls-section">
    <h3 class="ls-section-title">Every recursive function needs 2 parts</h3>
    <div class="ls-cards-row">
      <div class="ls-info-card ls-info-card--green">
        <div class="ls-info-icon">🛑</div>
        <strong>Base Case</strong>
        <p>The condition that <strong>stops</strong> the recursion. Without it → Stack Overflow crash.</p>
      </div>
      <div class="ls-info-card ls-info-card--blue">
        <div class="ls-info-icon">🔁</div>
        <strong>Recursive Step</strong>
        <p>The function calls <strong>itself</strong> with a slightly smaller input.</p>
      </div>
    </div>
  </div>

  <div class="ls-visual-example">
    <div class="ls-ve-label">Example: 5! (factorial)</div>
    <div class="ls-recursion-chain">
      <span class="ls-rc-item">5!</span>
      <span class="ls-rc-arrow">= 5 × </span>
      <span class="ls-rc-item">4!</span>
      <span class="ls-rc-arrow">= 4 × </span>
      <span class="ls-rc-item">3!</span>
      <span class="ls-rc-arrow">= 3 × </span>
      <span class="ls-rc-item ls-rc-base">1 ← base</span>
    </div>
  </div>

  <div class="ls-takeway-banner">
    <span>💡</span> <strong>Remember:</strong> No base case = infinite loop = crash. Always define when to stop.
  </div>
        `,
    quiz: [
      {
        question: "What is the most important part of a recursive function to prevent it from running forever?",
        options: ["The recursive step", "The function name", "The base case", "The return type"],
        correct: 2
      },
      {
        question: "What happens if a recursive call never hits a base case?",
        options: ["The program speeds up", "Stack Overflow error", "It returns zero", "The computer restarts"],
        correct: 1
      }
    ]
  }

];
