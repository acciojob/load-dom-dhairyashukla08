//your JS code here. If required.
function onload()
{
	const messageElement = document.createElement('p');
	messageElement.textContent="DOM load success";
	document.appendChild(messageElement);
}
document.addEventListener("DOMContentLoaded",onload);