const botName = "Bot";

function sendMessage() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    const chatbox = document.getElementById('chatbox');
    
    if (!userInput) return;

    const userMessage = document.createElement('div');
    userMessage.textContent = `You: ${userInput}`;
    userMessage.className = 'user-message';
    chatbox.appendChild(userMessage);

    const botResponse = document.createElement('div');
    botResponse.className = 'bot-message';
    botResponse.textContent = `Bot: ${generateResponse(userInput)}`;
    chatbox.appendChild(botResponse);

    document.getElementById('userInput').value = '';
    chatbox.scrollTop = chatbox.scrollHeight;
}

function generateResponse(input) {
    const doc = nlp(input);
    const questions = doc.questions().out('array');
    const statements = doc.statements().out('array');
    let response = "I'm not sure how to respond to that.";

    if (questions.length) {
        response = "That's an interesting question!";
    } else if (statements.length) {
        response = "I see, that's fascinating!";
    }

    return response;
}

function changeTheme() {
    const themeSelect = document.getElementById('theme-select');
    const theme = themeSelect.value;
    document.body.className = theme;
}
