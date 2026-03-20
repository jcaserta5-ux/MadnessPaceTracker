// script.js

// Function to fetch and display NCAA basketball games
async function fetchBasketballGames() {
    const API_URL = 'https://api.example.com/ncaa-basketball/games'; // Replace with actual API

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const games = await response.json();

        // Display games in the console for now
        console.log('NCAA Basketball Games:', games);
    } catch (error) {
        console.error('There was a problem fetching the games:', error);
    }
}

// Call the function to fetch and display games
fetchBasketballGames();