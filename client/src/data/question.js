 export const questions = [
  // Mathematics (15 Questions)
  {
    question: "What is the derivative of \(x^4 - 2x^3 + x - 7\)?",
    options: ["4x³ - 6x² + 1", "3x² - 6x + 1", "4x³ - 2x² + 1", "4x³ - 6x² - 1"],
    answer: "A",
    section: "Mathematics"
  },
  {
    question: "Evaluate the integral \(\int e^{2x} dx\).",
    options: ["\(\frac{e^{2x}}{2} + C\)", "\(2e^{2x} + C\)", "\(e^{2x} + C\)", "\(\frac{e^{x}}{2} + C\)"],
    answer: "A",
    section: "Mathematics"
  },
  {
    question: "What is the distance between points \((1, 2)\) and \((4, 6)\)?",
    options: ["5", "\(\sqrt{20}\)", "7", "\(\sqrt{25}\)"],
    answer: "B",
    section: "Mathematics"
  },
  {
    question: "At what angle (in degrees) do the hands of a clock form a right angle between 3:00 and 4:00?",
    options: ["75°", "82.5°", "90°", "97.5°"],
    answer: "D",
    section: "Mathematics"
  },
  {
    question: "Evaluate the limit: \(\lim_{x \to 0} \frac{1 - \cos x}{x^2}\).",
    options: ["0", "\(\frac{1}{2}\)", "1", "Undefined"],
    answer: "B",
    section: "Mathematics"
  },
  {
    question: "Find the roots of \(x^2 - 6x + 9 = 0\).",
    options: ["3, 3", "-3, -3", "6, -3", "0, 9"],
    answer: "A",
    section: "Mathematics"
  },
  {
    question: "What is the inverse function of \(f(x) = \frac{2x - 1}{3}\)?",
    options: ["\(f^{-1}(x) = \frac{3x + 1}{2}\)", "\(f^{-1}(x) = \frac{3x - 1}{2}\)", "\(f^{-1}(x) = \frac{2x + 1}{3}\)", "\(f^{-1}(x) = \frac{x + 1}{3}\)"],
    answer: "A",
    section: "Mathematics"
  },
  {
    question: "What is the median of the set \{4, 9, 15, 7, 11\}?",
    options: ["9", "11", "7", "15"],
    answer: "A",
    section: "Mathematics"
  },
  {
    question: "Find the next number in the Fibonacci sequence: 0, 1, 1, 2, 3, 5, ?",
    options: ["7", "8", "10", "9"],
    answer: "B",
    section: "Mathematics"
  },
  {
    question: "What is the sum of all interior angles of a pentagon?",
    options: ["540°", "360°", "720°", "900°"],
    answer: "A",
    section: "Mathematics"
  },
  {
    question: "Calculate: \(3^3 \times 3^2\).",
    options: ["\(3^6\)", "\(3^5\)", "15", "125"],
    answer: "A",
    section: "Mathematics"
  },
  {
    question: "What is the standard deviation of \{5, 5, 5, 5, 5\}?",
    options: ["0", "5", "1", "2"],
    answer: "A",
    section: "Mathematics"
  },
  {
    question: "Which of the following equations represents a parabola?",
    options: ["\(y = x^2 + 2x + 1\)", "\(y = 2x + 3\)", "\(y = \sqrt{x}\)", "\(y = \frac{1}{x}\)"],
    answer: "A",
    section: "Mathematics"
  },
  {
    question: "If \(A = \begin{bmatrix} 2 & 3 \\ 1 & 4 \end{bmatrix}\), what is the determinant of \(A\)?",
    options: ["5", "8", "10", "6"],
    answer: "B",
    section: "Mathematics"
  },
  {
    question: "If \(f(x) = 4x^3 - x\), what is \(f''(x)\)?",
    options: ["\(24x^2\)", "\(24x\)", "\(12x^2 - 1\)", "\(12x\)"],
    answer: "A",
    section: "Mathematics"
  },

  // Computer Science (15 Questions)
  {
    question: "What is the full form of CPU?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Processing Unit", "Central Peripheral Unit"],
    answer: "B",
    section: "Computer Science"
  },
  {
    question: "Which of the following is not a programming language?",
    options: ["Python", "Java", "HTML", "C++"],
    answer: "C",
    section: "Computer Science"
  },
  {
    question: "What does RAM stand for?",
    options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Readily Available Memory"],
    answer: "B",
    section: "Computer Science"
  },
  {
    question: "Which data structure uses FIFO (First In First Out) principle?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    answer: "B",
    section: "Computer Science"
  },
  {
    question: "What is the output of: `print(type([]))` in Python?",
    options: ["<class 'list'>", "<class 'dict'>", "<class 'tuple'>", "<class 'set'>"],
    answer: "A",
    section: "Computer Science"
  },
  {
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
    answer: "B",
    section: "Computer Science"
  },
  {
    question: "What is the purpose of the OS?",
    options: ["To manage hardware", "To run applications", "To store data", "To compile code"],
    answer: "A",
    section: "Computer Science"
  },
  {
    question: "What does SQL stand for?",
    options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Structured Question Language"],
    answer: "A",
    section: "Computer Science"
  },
  {
    question: "What is a primary key in a database?",
    options: ["Unique identifier for records", "A column storing dates", "A key to encrypt data", "Another name for foreign key"],
    answer: "A",
    section: "Computer Science"
  },
  {
    question: "Which one is an example of NoSQL database?",
    options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
    answer: "B",
    section: "Computer Science"
  },
  {
    question: "Which language is mainly used for web front-end development?",
    options: ["Python", "JavaScript", "C#", "Java"],
    answer: "B",
    section: "Computer Science"
  },
  {
    question: "What is the binary equivalent of decimal number 13?",
    options: ["1101", "1011", "1110", "1001"],
    answer: "A",
    section: "Computer Science"
  },
  {
    question: "What is the output of `5 & 3` in Python (bitwise AND)?",
    options: ["1", "0", "7", "3"],
    answer: "A",
    section: "Computer Science"
  },
  {
    question: "Which HTTP status code means 'Not Found'?",
    options: ["404", "200", "500", "403"],
    answer: "A",
    section: "Computer Science"
  },
  {
    question: "In Big-O notation, what is the complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "B",
    section: "Computer Science"
  },

  // Logical Reasoning (10 Questions)
  {
    question: "What comes next in the sequence: 2, 4, 8, 16, ?",
    options: ["18", "20", "32", "24"],
    answer: "C",
    section: "Logical Reasoning"
  },
  {
    question: "Find the odd one out: Apple, Banana, Carrot, Mango",
    options: ["Apple", "Banana", "Carrot", "Mango"],
    answer: "C",
    section: "Logical Reasoning"
  },
  {
    question: "If A is brother of B, and B is sister of C, how is C related to A?",
    options: ["Brother", "Sister", "Sibling", "Cousin"],
    answer: "C",
    section: "Logical Reasoning"
  },
  {
    question: "Find the next number in the series: 1, 4, 9, 16, ?",
    options: ["20", "25", "30", "36"],
    answer: "B",
    section: "Logical Reasoning"
  },
  {
    question: "Which word doesn't belong: Car, Bus, Bicycle, Train, Elephant",
    options: ["Car", "Bus", "Bicycle", "Elephant"],
    answer: "D",
    section: "Logical Reasoning"
  },
  {
    question: "If 7 + 3 = 410, what is 6 + 4?",
    options: ["410", "310", "610", "510"],
    answer: "D",
    section: "Logical Reasoning"
  },
  {
    question: "Which number is missing? 125, 25, 5, 1, ?",
    options: ["0", "0.5", "2", "None"],
    answer: "B",
    section: "Logical Reasoning"
  },
  {
    question: "If TODAY is coded as UPEBZ, how is NIGHT coded?",
    options: ["OJHIU", "MJHIU", "MJGHS", "MJHIU"],
    answer: "B",
    section: "Logical Reasoning"
  },
  {
    question: "If 1 = A, 2 = B, ..., 26 = Z, what is the sum of letters in “BED”?",
    options: ["9", "7", "8", "6"],
    answer: "A",
    section: "Logical Reasoning"
  },
  {
    question: "Complete the analogy: Bird : Fly :: Fish : ?",
    options: ["Run", "Swim", "Jump", "Dive"],
    answer: "B",
    section: "Logical Reasoning"
  },

  // English (10 Questions)
  {
    question: "Choose the correct synonym for 'Angry':",
    options: ["Happy", "Furious", "Calm", "Joyful"],
    answer: "B",
    section: "English"
  },
  {
    question: "Choose the antonym for 'Generous':",
    options: ["Kind", "Selfish", "Giving", "Helpful"],
    answer: "B",
    section: "English"
  },
  {
    question: "Fill in the blank: She ___ to the market every Sunday.",
    options: ["go", "goes", "going", "gone"],
    answer: "B",
    section: "English"
  },
  {
    question: "Choose the correct spelling:",
    options: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"],
    answer: "C",
    section: "English"
  },
  {
    question: "Identify the noun in the sentence: 'Knowledge is power.'",
    options: ["Knowledge", "is", "power", "Both A and C"],
    answer: "D",
    section: "English"
  },
  {
    question: "Choose the correct tense: They ___ finished their homework.",
    options: ["has", "have", "had", "having"],
    answer: "B",
    section: "English"
  },
  {
    question: "Identify the adjective in: 'It was a bright sunny day.'",
    options: ["bright", "sunny", "day", "Both A and B"],
    answer: "D",
    section: "English"
  },
  {
    question: "Identify the passive voice form of: 'They build the house.'",
    options: [
      "The house was built by them.",
      "They are building the house.",
      "The house builds them.",
      "They built the house."
    ],
    answer: "A",
    section: "English"
  },
  {
    question: "Fill in the blank: The book is ___ the table.",
    options: ["on", "in", "at", "by"],
    answer: "A",
    section: "English"
  },
  {
    question: "Which of the following is a conjunction?",
    options: ["But", "Very", "Fast", "Quickly"],
    answer: "A",
    section: "English"
  }
];
export const SECTIONS = {
  Math: { start: 1, end: 1, negative: true },
  GK: { start: 2, end: 2, negative: false }
  // Add more sections if needed
};
