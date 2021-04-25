function installWidget(container) {
  const openChatButton = document.createElement('div');
  openChatButton.classList.add('openChat');
  container.appendChild(openChatButton);

  const chatWindow = document.createElement('div');
  chatWindow.classList.add('chatWindow');
  chatWindow.style.opacity = '0%';
  chatWindow.style.transform = 'scale(0.8)';
  container.appendChild(chatWindow);

  openChatButton.addEventListener('click', () => {
    openChatButton.style.transform = 'scale(0)';
    chatWindow.style.opacity = '100%';
    chatWindow.style.transform = 'scale(1)';
    chatWindow.style.transitionDuration = '100ms';
  });

  const chatContainer = document.createElement('div');
  chatContainer.classList.add('chatContainer');
  chatWindow.appendChild(chatContainer);

  const chatTitle = document.createElement('div');
  chatTitle.classList.add('chatTitle');
  chatTitle.textContent = 'Напишите нам';
  chatContainer.appendChild(chatTitle);

  const closeButton = document.createElement('div');
  closeButton.classList.add('closeButton');
  closeButton.textContent = ' ×';
  chatTitle.appendChild(closeButton);

  closeButton.addEventListener('click', () => {
    openChatButton.style.transform = 'scale(1)';
    chatWindow.style.opacity = '0%';
    chatWindow.style.transform = 'scale(0.8)';
    chatWindow.style.transitionDuration = '100ms';
  });

  const textField = document.createElement('textarea');
  textField.classList.add('textField');
  chatContainer.appendChild(textField);

  const sendButton = document.createElement('button');
  sendButton.classList.add('sendButton');
  sendButton.textContent = 'Отправить';
  chatContainer.appendChild(sendButton);
}

installWidget(document.getElementById('chatWidget'));
