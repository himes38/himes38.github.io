let myImage = document.getElementById('img-sasuke-sword');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/sasuke-sword.webp') {
        myImage.setAttribute('src', 'images/itachi-akatsuki.webp');
    } else {
        myImage.setAttribute('src', 'images/sasuke-sword.webp')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName == null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Testing is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Testing is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}