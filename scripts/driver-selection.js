// Fetch the driver data from the server
fetch('/api/drivers')
    .then(response => response.json())
    .then(data => {
        // Get a reference to the driver section element
        const driverSection = document.getElementById('driver-section');

        // Loop through the driver data and create a form for each race
        for (let i = 1; i <= 20; i++) {
            const raceForm = document.createElement('form');
            raceForm.classList.add('driver-form');

            const raceHeader = document.createElement('h2');
            raceHeader.textContent = `Race ${i}`;
            raceForm.appendChild(raceHeader);

            const driverSelect = document.createElement('select');
            driverSelect.name = `race-${i}-driver`;

            const defaultOption = document.createElement('option');
            defaultOption.textContent = 'Select a driver';
            driverSelect.appendChild(defaultOption);

            // Loop through the driver data and add an option for each driver
            data.forEach(driver => {
                const option = document.createElement('option');
                option.value = driver.name;
                option.textContent = `${driver.number} - ${driver.name} - ${driver.team}`;
                driverSelect.appendChild(option);
            });

            raceForm.appendChild(driverSelect);
            driverSection.appendChild(raceForm);
        }
    })
    .catch(error => {
        console.error('Error fetching driver data:', error);
    });
