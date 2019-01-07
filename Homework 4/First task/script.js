function reverseString(str) {
    var splitString = str.split(""); 
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

var newEl = document.createElement("h1");
newEl.style.textAlign = "center";
var username = prompt("Enter your username", "Username");

if (/\d/.test(username)) {
    for (var i = 0; i < username.length; i++) {
        if (i % 2 == 0) {
            console.log(username[i].toUpperCase());
            newEl.innerHTML += username[i].toUpperCase();
            if (username[i + 1]) newEl.innerHTML += username[i + 1].toLowerCase();
        }
    }
} else {
    newEl.innerHTML = reverseString(username);
}

var cont = document.getElementById("wrapper");
cont.appendChild(newEl);