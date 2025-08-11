/* Juan Rodriguez, August 8th, 2025 */
/*This file allows users to store the Flashcard class and initial deck of cards.*/

// Flashcard class structure
class Flashcard {
    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
        this.isFlipped = false; // State to check if card is flipped
    }

    // Method to flip the card
    flip() {
        this.isFlipped = !this.isFlipped;
    }
}

// these are the standard example flashcards put in
let deck = [
    new Flashcard("What is JavaScript?", "A programming language for the web."),
    new Flashcard("What is HTML?", "The structure of a webpage."),
    new Flashcard("What is CSS?", "The style, colors and layout of a webpage.")
];