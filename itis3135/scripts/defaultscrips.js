function getCurrentDateTime() {
    var now = new Date();
    var time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    var dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][now.getDay()];
    var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][now.getMonth()];
    var date = now.getDate();
    var year = now.getFullYear();
    return "Today is " + time + " on " + dayOfWeek + ", " + date + " " + month + ", " + year;
}


function greetUser() {
    let name = document.getElementById('name').value;
    let mood = document.getElementById('mood').value;
    let greeting;
    if (name === '' || mood === '') {
        greeting = "Input not valid";
    } else {
        greeting = "The Aromatic Chameleon welcomes you, " + name + "! We're glad you are doing " + mood + "!";
    }
    document.getElementById('greeting').textContent = greeting;
}


function showPolygonName() {
    var number = Math.abs(Math.round(parseFloat(document.getElementById('number').value)));
    var polygonNames = ['monogon', 'digon', 'triangle', 'quadrilateral', 'pentagon', 'hexagon', 'heptagon', 'octagon', 'nonagon', 'decagon'];
    var polygonName = polygonNames[Math.min(number, polygonNames.length - 1)];
    alert("The polygon with " + number + " sides is called a " + polygonName + ".");
}

function changeColors() {
    alert("You have now changed to a different color chameleon!");
}

function tryBothSides() {
    alert("You just tried to eat both sides of the lollipop, you couldn't do it.");
}

function createLollipop() {
    alert("You accidentally blew up the lollipopo factory!");
}

function fightRango() {
    alert("You have lost. No one beats RANGO.");
}

// Display current date and time when the page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dateTime').textContent = getCurrentDateTime();
});


