// Get a reference to the table element
const leaderboardTable = document.querySelector('table');

// Define the leaderboard data
const leaderboardData = [
    {
        driver: 'Lewis Hamilton',
        points: 25,
        lives: 3
    },
    {
        driver: 'Max Verstappen',
        points: 18,
        lives: 2
    },
    {
        driver: 'Charles Leclerc',
        points: 15,
        lives: 3
    },
    // add more objects for other drivers
];

// Loop through the leaderboard data and create rows in the table
leaderboardData.forEach(driver => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${driver.driver}</td>
    <td>${driver.points}</td>
    <td>${driver.lives}</td>
  `;
    leaderboardTable.appendChild(row);
});
