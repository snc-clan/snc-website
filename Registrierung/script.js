let currentGeneratedPassword = null;
const webhookURL = "https://discord.com/api/webhooks/1370532858883604480/iEAxbu6qNHQwZxB0SkO1zsnICWU-BSpxxkjv4CQr4XHRr8zuRkY7OwPhWiFyATiY-LQK";

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

    if (allowedUsernames.includes(username) && password === currentGeneratedPassword) {
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

function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

function checkTimeAndGeneratePassword() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();

    if (hour === 20 && minute === 0) {
        currentGeneratedPassword = generatePassword(12);
        console.log("Neues Login-Passwort um 20:00 Uhr:", currentGeneratedPassword);

        const pwElement = document.getElementById('generatedPassword');
        if (pwElement) {
            pwElement.textContent = "Neues Passwort: " + currentGeneratedPassword;
            pwElement.style.display = "block";
        }

        fetch(webhookURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: `🔐 Neues Login-Passwort für die webiste: **${currentGeneratedPassword}**`
            })
        })
        .then(res => {
            if (!res.ok) {
                console.error("Fehler beim Senden an Discord:", res.statusText);
            }
        })
        .catch(err => console.error("Fetch-Fehler:", err));
    }
}

setInterval(checkTimeAndGeneratePassword, 60000);
