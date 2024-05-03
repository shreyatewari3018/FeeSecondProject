const quotesByMood = {
  all: [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Innovation distinguishes between a leader and a follower. – Steve Jobs",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "The best time to plant a tree was 20 years ago. The second best time is now. – Chinese Proverb",
    "You have to believe in yourself when no one else does. —Serena Williams",
    "When you have a dream, you’ve got to grab it and never let go. —Carol Burnett",
    "The most important thing is to enjoy your life—to be happy—it’s all that matters. —Steve Jobs",
    "Spread love everywhere you go. Let no one ever come without leaving happier. —Mother Teresa",
    "Be yourself; everyone else is already taken. —Oscar Wilde",
    "The biggest adventure you can take is to live the life of your dreams. —Oprah Winfrey",
    "The only thing we have to fear is fear itself. —Franklin D. Roosevelt",
    "I can accept failure, everyone fails at something. But I can’t accept not trying. —Michael Jordan",
    "You’ve got to be in it to win it. —Tony Robbins",
  ],
  inspirational: [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
    "The only way to achieve the impossible is to believe it is possible. – Charles Kingsleigh",
    "Do one thing every day that scares you. -Eleanor Roosevelt",
    "Well done is better than well said. -Benjamin Franklin",
    "Life is really simple, but we insist on making it complicated.– Confucius",
    "May you live all the days of your life. – Jonathan Swift",
    "Life itself is the most wonderful fairy tale. – Hans Christian Andersen",
    "Do not let making a living prevent you from making a life. – John Wooden",
  ],
  wisdom: [
    "The only mystery in life is why the kamikaze pilots wore helmets. – Al McGuire",
    "Behind every great man is a woman rolling her eyes. – Jim Carrey",
    "Poor eyes limit your sight; poor vision limits your deeds.- Franklin Field",
    "I do not pray for success. I ask for faithfulness.- Mother Teresa",
    "I used to ask God to help me. Then I asked if I might help him- Hudson Taylor",
    "The wise person doesn't give the right answers, but poses the right questions.- Claude Levi-Strauss",
    "What happens is not as important as how you react to what happens.- Ellen Glasgow",
    "The journey of a thousand miles begins with one step.- Lao Tzu",
  ],
  motivational: [
    "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "A witty woman is a treasure; a witty beauty is a power. ― George Meredith",
    "When a woman becomes her own best friend, life is easier.—Diane Von Furstenberg",
    "Work until your bank account looks like a phone number. —Unknown",
    "Life is like a sewer … what you get out of it depends on what you put into it. —Tom Lehrer",
  ]
};

function generateQuote(mood) {
  const moodQuotes = quotesByMood[mood] || quotesByMood.all;
  const randomNumber = Math.floor(Math.random() * moodQuotes.length);
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerText = moodQuotes[randomNumber];
}

generateQuote("all");

const moodButtons = document.querySelectorAll(".mood-btn");
moodButtons.forEach(button => {
  button.addEventListener("click", function() {
    const selectedMood = this.getAttribute("data-mood");
    generateQuote(selectedMood);
  });
});

document.getElementById("newQuoteBtn").addEventListener("click", generateQuote);
document.getElementById("previousQuoteBtn").addEventListener("click", generateQuote);