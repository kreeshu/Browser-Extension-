let box = document.getElementsByClassName('box')[0];
let mode = document.getElementById('mode');
let header = document.getElementById('header');
console.log(header)

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
    for(i=0; i<12; i++){
        box.innerHTML += `
        <div class='card'>
            <div class="first">
                <img src="${data[i].logo}" alt="${data[i].name} Logo">
                <div>
                    <h2>${data[i].name}</h2>
                    <p>${data[i].description}</p>
                </div>
            </div>
            <div class="second">
                <button onclick="removeCard(this)">Remove</button>
                <label class="switch">
                    <input type="checkbox" ${data[i].isActive ? "checked" : ""}>
                    <span class="slider round"></span>
                </label>
            </div>
        </div>
        `;
    }

}

function changeMode(e) {
    if(e.alt == 'light-mode'){
        e.src='http://127.0.0.1:5500/assets/images/icon-moon.svg';
        e.alt='dark-mode';
        document.body.classList = ['light'];
        box.classList.add('light-box');
        header.classList.add('light-header');
    }else{
        e.src='http://127.0.0.1:5500/assets/images/icon-sun.svg';
        e.alt='light-mode';
        document.body.classList = [''];
        box.classList.remove('light-box');
        header.classList.remove('light-header');
    }
    
    
}


fetchData();