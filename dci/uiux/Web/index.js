// Typing Effekt
const text = "Hi, ich bin [Dein Name]";
const typedText = document.getElementById("typed-text");

let i = 0;
function type() {
  if (i < text.length) {
    typedText.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();

// Dark/Light Toggle
let dark = true;
function toggleTheme() {
  dark = !dark;
  document.documentElement.style.setProperty(
    "--bg",
    dark ? "#121212" : "#ffffff"
  );
  document.documentElement.style.setProperty(
    "--text",
    dark ? "#ffffff" : "#121212"
  );
  document.documentElement.style.setProperty(
    "--card-bg",
    dark ? "#1f1f1f" : "#f2f2f2"
  );
}
