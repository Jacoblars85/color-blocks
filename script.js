console.log('🟥 🟦 🟩 🟨');

let redCounter = 1;
let blueCounter = 1;
let greenCounter = 1;
let yellowCounter = 1;


// function deleteRed(event) {
//     //event.target is where the click happened
//     console.log('delete red', event.target);

// event.target.remove();
// }

function redClick() {
    console.log('you click red');

let redList = document.getElementById('blocks');

redList.innerHTML += `<span onclick="deleteRed(event)"><div class="block red-fill"></div></span>`;

redCounter++;

console.log(redCounter);

document.getElementById('red-count').textContent = redCounter;

}


// function deleteBlue(event) {
//     //event.target is where the click happened
//     console.log('delete blue', event.target);

// event.target.remove();
// }

function blueClick() {
    console.log('you click blue');

    let blueList = document.getElementById('blocks');

    blueList.innerHTML += `<span onclick="deleteBlue(event)"><div class="block blue-fill"></div></span>`;

    blueCounter++;

console.log(blueCounter);

document.getElementById('blue-count').textContent = blueCounter;
}

// function deleteGreen(event) {
//     //event.target is where the click happened
//     console.log('delete green', event.target);

// event.target.remove();
// }

function greenClick() {
    console.log('you click green');

    let greenList = document.getElementById('blocks');

    greenList.innerHTML += `<span onclick="deleteGreen(event)"><div class="block green-fill"></div></span>`;

    greenCounter++;

console.log(greenCounter);

document.getElementById('green-count').textContent = greenCounter;
}

// function deleteYellow(event) {
//     //event.target is where the click happened
//     console.log('delete yellow', event.target);

// event.target.remove();
// }

function yellowClick() {
    console.log('you click yellow');

    let yellowList = document.getElementById('blocks');

    yellowList.innerHTML += `<span onclick="deleteYellow(event)"><div class="block yellow-fill"></div></span>`;

    yellowCounter++;

console.log(yellowCounter);

document.getElementById('yellow-count').textContent = yellowCounter;
}
