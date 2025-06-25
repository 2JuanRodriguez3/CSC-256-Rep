    // These are the correct answers that need to be placed in to win. This is also the array as to where the letters will go.
    const answers = [
      "R", "A", "P",  // RAP (1A)
      "U",            // RUN (1D)
      "N", "U", "N"   // NUN (3A)
    ];

    function checkAnswers() {
      let correct = true;
      for (let i = 0; i < answers.length; i++) {
        const cell = document.getElementById(`cell-${i}`);
        if (!cell) continue;

            // This is the input and is where the info gets dectected wrong or correct,
        const userInput = cell.value.toUpperCase();
        if (userInput === answers[i]) {
          cell.classList.remove("wrong");
          cell.classList.add("correct");
        } else {
          cell.classList.remove("correct");
          cell.classList.add("wrong");
          correct = false;
        }
      }

        // This is the end of the loop and is where if done correctly or wrong these are the messages that'll pop up on the users screen.
      if (correct) {
        alert("Great job! You solved the crossword!");
      } else {
        alert("Some answers are Wrong. Please Try again!");
      }
    }