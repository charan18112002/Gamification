document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function () {
    const subject = document.getElementById("subject").value;

    if (subject === "Math") {
      window.location.href = "math.html"; // This opens the Bubu & Dudu quiz!
    } else if (subject === "Science") {
      window.location.href = "science-quiz.html"; // Add this file if needed
    } else {
      alert("Please select a subject.");
    }
  });
});