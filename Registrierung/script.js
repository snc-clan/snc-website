document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("keydown", (event) => {
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});

function login() {
    const allowedUsernames = ["CoOwner", "Supporter", "Moderator", "Anführer", "Admin", "Owner"];
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');
    const messageDiv = document.getElementById('message');

    if (allowedUsernames.includes(username) && password === "19143") {
        errorDiv.textContent = "";
        messageDiv.textContent = `Willkommen, ${username}!`;
        messageDiv.style.display = "block";

        setTimeout(() => {
            window.location.href = "../kalender/index.html";
        }, 3000);
    } else {
        errorDiv.textContent = "Falscher Benutzername oder Passwort!";
    }
}
