// ===============================
// FORM VALIDATION + INTERACTIVITY
// ===============================
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all fields!");
    return;
  }

  if (!validateEmail(email)) {
    alert("❌ Please enter a valid email address.");
    return;
  }

  alert(`✅ Thank you, ${name}! Your message has been sent.`);
  form.reset();
});

// Reusable function to validate email
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// ===============================
// EXTRA: Trigger animations on scroll
// ===============================
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".portfolio-item");
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
