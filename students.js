const students = [
  {
    id: 1,
    name: "Mark Alonso",
    age: 18,
    subjects: [
      {
        id: 1,
        name: "Math",
        score: 60,
      },
      {
        id: 2,
        name: "English",
        score: 85,
      },
    ],
  },
  {
    id: 2,
    name: "Paul Ryan",
    age: 19,
    subjects: [
      {
        id: 1,
        name: "Math",
        score: 78,
      },
      {
        id: 2,
        name: "English",
        score: 75,
      },
    ],
  },
  {
    id: 3,
    name: "Jackie Anite",
    age: 21,
    subjects: [
      {
        id: 1,
        name: "Math",
        score: 90,
      },
      {
        id: 2,
        name: "English",
        score: 80,
      },
    ],
  },
  {
    id: 4,
    name: "Anita Allain",
    age: 18,
    subjects: [
      {
        id: 1,
        name: "Math",
        score: 71,
      },
      {
        id: 2,
        name: "English",
        score: 45,
      },
    ],
  },
];

// ASSIGNMENT

 // Display the above data on a web page. Each student information should appear on a card.
  // Have 4 cards per row
  // Make an appealing styling that you want.

  

// GOAL-  Print all students (name) who got 80+ in English
// GOAL - Print all students who are 18 years and got 80 and above in English

// - Conditionals
// - Variables
// - For loops

// Pseudocode - Steps we are going to take to achieve what's required.

// - Declare the required variables
// - Iterate through the array using a for .. loops
// - Use conditionals to achieve the goal.

for (let student of students) {
  for (let subject of student.subjects) {
    if (subject.id === 2 && subject.score >= 80 && student.age === 18) {
      console.log(student.name);
    }
  }
}
