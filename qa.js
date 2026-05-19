
function q1() {
  return "Programming".length;
}

function q2() {
  const s = "Apple, Mango, Orange";
  return s.slice(7, 12);
}

function q3() {
  return "I am sad today".replace("sad", "happy");
}

function q4() {
  return "https://google.com".startsWith("https");
}

function q5() {
  return "Computer".charAt(0);
}

function q6() {
  return "JavaScript".indexOf("Script");
}

function q7() {
  return "Frontend Developer".split(" ")[0];
}

function q8() {
  return "HTML,CSS,JS".split(",");
}

function q9() {
  const v = "react js".toUpperCase();
  return v;
}

function q10() {
  return "The cat is sleeping".replace("cat", "dog");
}

function q11() {
  return "student@gmail.com".includes("@");
}

function q12() {
  return "Full Stack Developer".length;
}

function q13() {
  return "Year-2025".split("-")[1];
}

function q14() {
  return " Hello Students ".replace(/\s+/g, "");
}

function q15() {
  return "Education".charAt(4);
}

function q16() {
  return "Hello World".indexOf("World");
}

function q17() {
  return "Artificial Intelligence".length;
}

function q18() {
  return "Web Developer".substring(4);
}

function q19() {
  return " Coding Lab ".trimStart();
}

function q20() {
  return "OpenAI".indexOf("AI");
}

function q21() {
  const s = "JavaScript";
  return s.charAt(s.length - 1);
}

function q22() {
  const s = "javascript";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function q23() {
  return "Sri Lanka".length;
}

function q24() {
  return "example@gmail.com".startsWith("example");
}

function q25() {
  return "I love JavaScript".replace(/\s+/g, "-");
}

function q26() {
  return "apple|banana|orange".split("|");
}

function q27() {
  return "LearnYouTubeFast".slice(5, 12);
}

function q28() {
  return "ReactJS".endsWith("JS");
}

function q29() {
  return "Full Stack Developer".indexOf("Stack");
}

function q30() {
  return "Node JS".toLowerCase();
}

function q31() {
  return " HELLO WORLD ".replace(/\s+/g, "").toLowerCase();
}

const qaList = [
  {
    id: 1,
    question: 'Find the length of the string "Programming".',
    code: `function q1() {
      return "Programming".length;
    }`,
    run: q1,
  },

  {
    id: 2,
    question:
      'Extract the word "Mango" from "Apple, Mango, Orange" using slice().',
    code: `function q2() {
      const s = "Apple, Mango, Orange";
      return s.slice(7, 12);
    }`,
    run: q2,
  },

  {
    id: 3,
    question: 'Replace "sad" with "happy" in the string "I am sad today".',
    code: `function q3() {
      return "I am sad today".replace("sad", "happy");
    }`,
    run: q3,
  },

  {
    id: 4,
    question: 'Check if the string "https://google.com" starts with "https".',
    code: `function q4() {
      return "https://google.com".startsWith("https");
    }`,
    run: q4,
  },

  {
    id: 5,
    question: 'Find the first character of "Computer" using charAt().',
    code: `function q5() {
      return "Computer".charAt(0);
    }`,
    run: q5,
  },

  {
    id: 6,
    question: 'Find the position of "Script" in "JavaScript" using indexOf().',
    code: `function q6() {
      return "JavaScript".indexOf("Script");
    }`,
    run: q6,
  },

  {
    id: 7,
    question: 'Extract "Frontend" from "Frontend Developer".',
    code: `function q7() {
      return "Frontend Developer".split(" ")[0];
    }`,
    run: q7,
  },

  {
    id: 8,
    question: 'Split the string "HTML,CSS,JS" into an array.',
    code: `function q8() {
      return "HTML,CSS,JS".split(",");
    }`,
    run: q8,
  },

  {
    id: 9,
    question: 'Convert "react js" into uppercase and store it in a variable.',
    code: `function q9() {
      const v = "react js".toUpperCase();
      return v;
    }`,
    run: q9,
  },

  {
    id: 10,
    question: 'Replace "cat" with "dog" in "The cat is sleeping".',
    code: `function q10() {
      return "The cat is sleeping".replace("cat", "dog");
    }`,
    run: q10,
  },

  {
    id: 11,
    question: 'Check whether "student@gmail.com" includes "@".',
    code: `function q11() {
      return "student@gmail.com".includes("@");
    }`,
    run: q11,
  },

  {
    id: 12,
    question: 'Find the length of "Full Stack Developer".',
    code: `function q12() {
      return "Full Stack Developer".length;
    }`,
    run: q12,
  },

  {
    id: 13,
    question: 'Extract "2025" from "Year-2025".',
    code: `function q13() {
      return "Year-2025".split("-")[1];
    }`,
    run: q13,
  },

  {
    id: 14,
    question: 'Remove spaces from " Hello Students "',
    code: `function q14() {
      return " Hello Students ".replace(/\s+/g, "");
    }`,
    run: q14,
  },

  {
    id: 15,
    question: 'Find the character at index 4 in "Education".',
    code: `function q15() {
      return "Education".charAt(4);
    }`,
    run: q15,
  },

  {
    id: 16,
    question: 'Find the index of "World" in "Hello World".',
    code: `function q16() {
      return "Hello World".indexOf("World");
    }`,
    run: q16,
  },

  {
    id: 17,
    question: 'Find the length of "Artificial Intelligence".',
    code: `function q17() {
      return "Artificial Intelligence".length;
    }`,
    run: q17,
  },

  {
    id: 18,
    question: 'Extract "Developer" from "Web Developer" using substring().',
    code: `function q18() {
      return "Web Developer".substring(4);
    }`,
    run: q18,
  },

  {
    id: 19,
    question: 'Remove start spaces from " Coding Lab ".',
    code: `function q19() {
      return " Coding Lab ".trimStart();
    }`,
    run: q19,
  },

  {
    id: 20,
    question: 'Find the position of "AI" in "OpenAI".',
    code: `function q20() {
      return "OpenAI".indexOf("AI");
    }`,
    run: q20,
  },

  {
    id: 21,
    question:
      'Find the last character of "JavaScript" using charAt() and length.',
    code: `function q21() {
      const s = "JavaScript";
      return s.charAt(s.length - 1);
    }`,
    run: q21,
  },

  {
    id: 22,
    question: 'Convert the first letter of "javascript" into uppercase.',
    code: `function q22() {
      const s = "javascript";
      return s.charAt(0).toUpperCase() + s.slice(1);
    }`,
    run: q22,
  },

  {
    id: 23,
    question: 'Count how many characters are in "Sri Lanka".',
    code: `function q23() {
      return "Sri Lanka".length;
    }`,
    run: q23,
  },

  {
    id: 24,
    question: 'Check whether "example@gmail.com" starts with "example".',
    code: `function q24() {
      return "example@gmail.com".startsWith("example");
    }`,
    run: q24,
  },

  {
    id: 25,
    question: 'Replace all spaces in "I love JavaScript" with "-".',
    code: `function q25() {
      return "I love JavaScript".replace(/\s+/g, "-");
    }`,
    run: q25,
  },

  {
    id: 26,
    question: 'Split "apple|banana|orange" using "|".',
    code: `function q26() {
      return "apple|banana|orange".split("|");
    }`,
    run: q26,
  },

  {
    id: 27,
    question: 'Extract "YouTube" from "LearnYouTubeFast".',
    code: `function q27() {
      return "LearnYouTubeFast".slice(5, 12);
    }`,
    run: q27,
  },

  {
    id: 28,
    question: 'Check whether "ReactJS" ends with "JS".',
    code: `function q28() {
      return "ReactJS".endsWith("JS");
    }`,
    run: q28,
  },

  {
    id: 29,
    question: 'Find the index of "Stack" in "Full Stack Developer".',
    code: `function q29() {
      return "Full Stack Developer".indexOf("Stack");
    }`,
    run: q29,
  },

  {
    id: 30,
    question: 'Convert "Node JS" to lowercase.',
    code: `function q30() {
      return "Node JS".toLowerCase();
    }`,
    run: q30,
  },

  {
    id: 31,
    question: 'Remove spaces and convert " HELLO WORLD " to lowercase.',
    code: `function q31() {
      return " HELLO WORLD ".replace(/\s+/g, "").toLowerCase();
    }`,
    run: q31,
  },
];

window.qaList = qaList;
