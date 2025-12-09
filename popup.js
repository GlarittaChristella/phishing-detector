document.getElementById("scanBtn").addEventListener("click", async () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const url = tabs[0].url;
    document.getElementById("result").innerHTML = "Scanning: " + url;

    if (url.includes("secure") || url.includes("https")) {
      document.getElementById("result").innerHTML =
        "✔ Safe website";
    } else {
      document.getElementById("result").innerHTML =
        "⚠ Suspicious website";
    }
  });
});
