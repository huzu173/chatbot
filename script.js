function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return; // Prevent empty messages

    // Display user message
    const chatBox = document.getElementById("chat-box");
    const userMessageDiv = document.createElement("div");
    userMessageDiv.classList.add("message", "user-message");
    userMessageDiv.textContent = userInput;
    chatBox.appendChild(userMessageDiv);

    // Clear input field
    document.getElementById("user-input").value = "";

    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Simulate bot response
    setTimeout(() => {
        const botMessageDiv = document.createElement("div");
        botMessageDiv.classList.add("message", "bot-message");

        // Basic responses based on user input
        let botResponse = "Sorry, I didn't understand that.";
        if (userInput.toLowerCase().includes("hello")) {
            botResponse = "Hi there! How can I assist you today?";
        } else if (userInput.toLowerCase().includes("how are you")) {
            botResponse = "I'm doing well! How about you?";
        } else if (userInput.toLowerCase().includes("bye")) {
            botResponse = "Goodbye! Have a great day!";
        }

        botMessageDiv.textContent = botResponse;
        chatBox.appendChild(botMessageDiv);

        // Scroll to bottom after bot responds
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

// Handle "Enter" key press for sending message
document.getElementById("user-input").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
