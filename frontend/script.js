const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const userMsg = input.value.trim();
  if (!userMsg) return;

  appendMessage("user", userMsg);
  input.value = "";

  const loadingMsg = appendMessage("bot", "Typing...");
  loadingMsg.classList.add("typing");

  try {
    const res = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userMsg }),
    });

    const data = await res.json();
    loadingMsg.remove();
    appendMessage("bot", data.response);
  } catch (error) {
    loadingMsg.remove();
    appendMessage("bot", "⚠️ Error: Unable to reach server.");
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg;
}


