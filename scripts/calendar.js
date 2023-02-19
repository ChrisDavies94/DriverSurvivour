// Sample data for the F1 race calendar
const raceCalendar = [
    {
        round: 1,
        country: 'Australia',
        raceDate: '2023-03-12',
        qualifyingDate: '2023-03-11T06:00:00Z'
    },
    {
        round: 2,
        country: 'Bahrain',
        raceDate: '2023-03-26',
        qualifyingDate: '2023-03-25T14:00:00Z'
    },
    {
        round: 3,
        country: 'China',
        raceDate: '2023-04-09',
        qualifyingDate: '2023-04-08T07:00:00Z'
    },
    // Add more rounds here...
];

// Function to format date strings as a human-readable format
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Function to render the race calendar table
function renderCalendar() {
    const table = document.createElement('table');

    // Create the table header row
    const headerRow = document.createElement('tr');
    const roundHeader = document.createElement('th');
    roundHeader.textContent = 'Round';
    const countryHeader = document.createElement('th');
    countryHeader.textContent = 'Country';
    const raceDateHeader = document.createElement('th');
    raceDateHeader.textContent = 'Race Date';
    const qualifyingDateHeader = document.createElement('th');
    qualifyingDateHeader.textContent = 'Qualifying Date';
    headerRow.appendChild(roundHeader);
    headerRow.appendChild(countryHeader);
    headerRow.appendChild(raceDateHeader);
    headerRow.appendChild(qualifyingDateHeader);
    table.appendChild(headerRow);

    // Create a row for each race round
    raceCalendar.forEach(race => {
        const row = document.createElement('tr');
        const roundCell = document.createElement('td');
        roundCell.textContent = race.round;
        const countryCell = document.createElement('td');
        countryCell.textContent = race.country;
        const raceDateCell = document.createElement('td');
        raceDateCell.textContent = formatDate(race.raceDate);
        const qualifyingDateCell = document.createElement('td');
        qualifyingDateCell.textContent = formatDate(race.qualifyingDate);
        row.appendChild(roundCell);
        row.appendChild(countryCell);
        row.appendChild(raceDateCell);
        row.appendChild(qualifyingDateCell);
        table.appendChild(row);
    });

    // Add the table to the DOM
    const container = document.querySelector('#calendar-container');
    container.appendChild(table);
}

// Call the renderCalendar function when the page is loaded
window.addEventListener('load', renderCalendar);
