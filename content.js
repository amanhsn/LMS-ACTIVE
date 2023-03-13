function startExtension() {
  console.log("real");
  var timeOut;

function startTimer() {
  timeOut = setTimeout(logout, 86400000); // This will logout the user after 30 minutes (1800000 ms)
}

function resetTimer() {
  clearTimeout(timeOut);
  startTimer();
}

function logout() {
  try {
    window.location.reload(); // This will reload the page, which will automatically log the user out
  } catch (error) {
    console.error("Error in logout function:", error.message);
  }
}

try {
  startTimer();

  document.addEventListener("mousemove", resetTimer);
  document.addEventListener("keypress", resetTimer);
} catch (error) {
  console.error("Error in content script:", error.message);
}
}

function addButton() {
  const button = document.createElement("button");
  button.textContent = "Start Idle Extension";
  button.addEventListener("click", startExtension);
  document.body.appendChild(button);
}
startExtension();
addButton();
