let box = document.getElementsByClassName('box')[0];

// console.log(box.innerHTML);

async function fetchData() {
    try {
        const response = await fetch("data.json"); // Fetch JSON file
        const jsonData = await response.json(); // Convert to JavaScript object
        renderCard(jsonData);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


function renderCard(data) {
    data.forEach(item => {
        box.innerHTML += `
        <div class='card'>
            <div class="first">
                <img src="${item.logo}" alt="${item.name} Logo">
                <div>
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                </div>
            </div>
            <div class="second">
                <button onclick="removeCard(this)">Remove</button>
                <label class="switch">
                    <input type="checkbox" ${item.isActive ? "checked" : ""}>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        `;
    });
}


fetchData();