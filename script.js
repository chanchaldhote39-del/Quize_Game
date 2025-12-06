 // Questions with options and correct answers
    const questions = [
      {
        question: "1) What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris"
      },
      {
        question: "2) Which language runs in a web browser?",
        options: ["Python", "Java", "C++", "JavaScript"],
        answer: "JavaScript"
      },
      {
        question: "3) Fill in the blank: The largest planet is ____.",
        options: ["Mars", "Earth", "Jupiter", "Venus"],
        answer: "Jupiter"
      }
    ];

    let current = 0;
    let score = 0;

    function showQuestion() {
      let q = questions[current];
      let quizDiv = document.getElementById("quiz");
      quizDiv.innerHTML = "<p>" + q.question + "</p>";

      q.options.forEach(function(opt) {
        quizDiv.innerHTML +=
          `<label><input type="radio" name="option" value="${opt}"> ${opt}</label>`;
      });
    }

    function nextQuestion() {
      let selected = document.querySelector('input[name="option"]:checked');
      if (selected) {
        if (selected.value === questions[current].answer) {
          score++;
        }
        current++;
        if (current < questions.length) {
          showQuestion();
        } else {
          document.getElementById("quiz").innerHTML = "";
          document.getElementById("result").innerHTML =
            "🎉 Quiz Completed!<br>✅ Your Score: " + score + "/" + questions.length;
          document.querySelector("button").style.display = "none";
        }
      } else {
        alert("⚠️ Please select an option before going next!");
      }
    }

    // Show first question on page load
    showQuestion();