JavaScript (script.js):
javascript
const chatboxElement = document.getElementById('chatbox');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', handleSendMessage);
messageInput.addEventListener('keydown', handleEnterKey);

function handleSendMessage() {
const message = messageInput.value.trim();
if (message !== '') {
addMessageToChatbox(message, 'user');
messageInput.value = '';
scrollToBottom();
setTimeout(handleBotResponse, 1000);
}
}

function handleEnterKey(event) {
if (event.key === 'Enter') {
handleSendMessage();
}
}

function handleBotResponse() {
const botResponse = generateBotResponse();
addMessageToChatbox(botResponse, 'bot');
scrollToBottom();
}

function generateBotResponse() {
const greetings = ['Hello!', 'Hi!', 'Greetings!', 'Nice to meet you!'];
const responses = ['I am a chatbot.', 'How can I assist you?', 'Feel free to ask me anything.'];
const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
const randomResponse = responses[Math.floor(Math.random() * responses.length)];
return `${randomGreeting} ${randomResponse}`;
}

function addMessageToChatbox(message, sender) {
const messageElement = document.createElement('div');
messageElement.classList.add('message');
if (sender === 'user') {
messageElement.classList.add('user-message');
} else {
messageElement.classList.add('bot-message');
}
messageElement.textContent = message;
chatboxElement.appendChild(messageElement);
}

function scrollToBottom() {
chatboxElement.scrollTop = chatboxElement.scrollHeight;
}