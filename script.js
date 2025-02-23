const chatbotResponses = {
    "hello": "Hi there! How can I help you?",
    "how are you?": "I'm just a bunch of code, but I'm here to assist you!",
    "bye": "Goodbye! Have a great day!"
};

function sendMessage() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const chatbox = document.getElementById('chatbox');
    
    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${document.getElementById('userInput').value}`;
    userMessage.className = 'user-message';
    chatbox.appendChild(userMessage);

    const botResponse = document.createElement('div');
    botResponse.className = 'bot-message';
    if (chatbotResponses[userInput]) {
        botResponse.textContent = `Bot: ${chatbotResponses[userInput]}`;
    } else {
        botResponse.textContent = "Bot: I'm not sure how to respond to that.";
    }
    chatbox.appendChild(botResponse);

    document.getElementById('userInput').value = '';
    chatbox.scrollTop = chatbox.scrollHeight;
}

function changeTheme() {
    const themeSelect = document.getElementById('theme-select');
    const theme = themeSelect.value;
    document.body.className = theme;
}
