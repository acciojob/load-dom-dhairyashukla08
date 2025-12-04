function onDOMLoaded() {
    setTimeout(() => {
        const messageElement = document.createElement('p');

        messageElement.textContent = "DOM load success";
        document.body.appendChild(messageElement);
    }, 0);
}

document.addEventListener('DOMContentLoaded', onDOMLoaded);