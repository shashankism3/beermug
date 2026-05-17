// js/trains-data.js

const amritBharatTrains = [
    {
        number: "14663",
        name: "New Jalpaiguri - Amritsar Amrit Bharat Express",
        inauguration: "14 May 2026",
        link: "trains/14663-new-jalpaiguri-amritsar-amrit-bharat-express.html"
    },
    {
        number: "14664",
        name: "Amritsar - New Jalpaiguri Amrit Bharat Express",
        inauguration: "14 May 2026",
        link: "trains/14664-amritsar-new-jalpaiguri-amrit-bharat-express.html"
    },
    {
        number: "16108",
        name: "Santragachi - Tambaram Amrit Bharat Express",
        inauguration: "18 January 2026",
        link: "#"
    },
    {
        number: "11015",
        name: "Mumbai LTT - Saharsa Amrit Bharat Express (PT)",
        inauguration: "24 April 2025",
        link: "#"
    },
    {
        number: "11016",
        name: "Saharsa - Mumbai LTT Amrit Bharat Express (PT)",
        inauguration: "24 April 2025",
        link: "#"
    },
    {
        number: "13433",
        name: "SMVT Bengaluru - Malda Town Amrit Bharat Express",
        inauguration: "30 December 2023",
        link: "#"
    },
    {
        number: "13434",
        name: "Malda Town - SMVT Bengaluru Amrit Bharat Express",
        inauguration: "30 December 2023",
        link: "#"
    },
	 {
        number: "13436",
        name: "Malda Town - SMVT Bengaluru Amrit Bharat Express",
        inauguration: "30 December 2023",
        link: "#"
    }
];

// Function to generate and inject the HTML cards dynamically
function loadTrainCards() {
    const gridContainer = document.getElementById("trains-grid");
    
    // Clear out any placeholder HTML inside the container
    gridContainer.innerHTML = "";

    // Loop through the data array and build the HTML for each card
    amritBharatTrains.forEach(train => {
        const cardHTML = `
            <a href="${train.link}">
                <div class="card">
                    <h3>${train.number}</h3>
                    <h4>${train.name}</h4>  
                    <p>Inaugurated on: ${train.inauguration}</p>    
                </div>
            </a>
        `;
        // Append the newly created card into our grid container
        gridContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Run the function automatically when the page loads
document.addEventListener("DOMContentLoaded", loadTrainCards);