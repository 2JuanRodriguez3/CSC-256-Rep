/* Juan Rodriguez, August 8th, 2025 */
/* This file handles the user interactions and flashcard functions.*/

// this function shows a quick tutorial alert
function showTutorial() {
    alert("Welcome to MindMixer! Click 'Create Your Cards' to add cards. Click a card to flip it.");
}

// this can allow the user to create a new card and add it to the deck
function createNewCard() {
    let question = prompt("Enter your question:");
    let answer = prompt("Enter the answer:");
    
    if (question && answer) {
        let newCard = new Flashcard(question, answer);
        deck.push(newCard);
        renderDeck();
    } else {
        alert("Both question and answer are required.");
    }
}

// this function starts the study mode which then shows the deck on the screen renders the deck.
function startStudy() {
    if (deck.length === 0) {
        alert("No cards available! Create some first.");
    } else {
        renderDeck();
    }
}

// this renders all cards dynamically
function renderDeck() {
    const container = document.getElementById("flashcard-container");
    container.innerHTML = ""; // Clear previous content

    deck.forEach((card, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "flashcard";
        cardDiv.textContent = card.isFlipped ? card.answer : card.question;

        // Flips the card when clicked
        cardDiv.addEventListener("click", () => {
            card.flip();
            renderDeck(); 
        });

        container.appendChild(cardDiv);
    });
}

// Function to show modal by ID
function showModal(id) {
    document.getElementById(id).style.display = 'block';
}

// Function to close modal by ID
function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

// Account Login functions
function loginUser() {
    const username = document.getElementById('username').value;
    const pass = document.getElementById('password').value;

    if (username && pass) {
        document.getElementById('accountMessage').innerText = `Welcome back, ${username}!`;
    } else {
        document.getElementById('accountMessage').innerText = "Please enter username and password.";
    }
}

// Account Registration functions
function registerUser() {
    const username = document.getElementById('username').value;
    if (username) {
        document.getElementById('accountMessage').innerText = `Account created for ${username}!`;
    } else {
        document.getElementById('accountMessage').innerText = "Please enter a username.";
    }
}

// Contact Us Send functions
function sendContact() {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const msg = document.getElementById('contactMessage').value;

    if (name && email && msg) {
        document.getElementById('contactResponse').innerText = "Your message has been sent!";
    } else {
        document.getElementById('contactResponse').innerText = "Please fill out all fields.";
    }
}

// Attach event listeners for buttons
document.getElementById('myAccountBtn').addEventListener('click', () => showModal('accountModal'));
document.getElementById('contactBtn').addEventListener('click', () => showModal('contactModal'));
