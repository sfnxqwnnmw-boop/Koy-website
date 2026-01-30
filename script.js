const button = document.getElementById('magicBtn');
const displayMessage = document.getElementById('message');

button.addEventListener('click', () => {
    // Using concatenation like in your tutorial!
    let status = "active";
    displayMessage.innerText = "The website is now " + status + "! 🎉";
    button.style.display = "none";
});