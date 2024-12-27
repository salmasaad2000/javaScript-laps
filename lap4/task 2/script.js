// Fetch JSON data and populate dropdown
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        var dropdown = document.getElementById('dropdown');
        var details = document.getElementById('details');

        // Populate dropdown
        data.forEach(person => {
            const option = document.createElement('option');
            option.value = person.name;
            option.textContent = person.name;
            dropdown.appendChild(option);
        });

        // Handle dropdown change
        dropdown.addEventListener('change', () => {
            var selectedName = dropdown.value;
            var person = data.find(p => p.name === selectedName);

            // Update details or reset
            details.innerHTML = person 
                ? `<p><strong>Name:</strong> ${person.name}</p>
                   <p><strong>Age:</strong> ${person.age}</p>
                   <p><strong>Email:</strong> ${person.email}</p>`
                : `<p><strong>Details will appear here...</strong></p>`;
        });
    })
