let somevalue = localStorage.getItem("storecolorstatus");
if (!somevalue) {
    somevalue = "white";
    localStorage.setItem("storecolorstatus", somevalue);
}

if (somevalue === "black") {
    //document.getElementById("color-status").textContent = "Dark";
    document.body.style.backgroundColor = "#708090";
    //document.body.style.color = "white";
    document.getElementById("changestatus").checked = true;
    document.getElementById("settings-dashboard").style.color = "white";
} else {
    //document.getElementById("color-status").textContent = "White";
    document.body.style.backgroundColor = "white"; // ✅ Fixed here
    //document.body.style.color = "black";
    document.getElementById("changestatus").checked = false;
    document.getElementById("settings-dashboard").style.color = "black";
}

function changeStatus() {
    if (somevalue === "white") {
        somevalue = "black";
        //document.getElementById("color-status").textContent = "Dark";
        document.body.style.backgroundColor = "#708090";
        //document.body.style.color = "white";
        localStorage.setItem("storecolorstatus", "black");
        document.getElementById("settings-dashboard").style.color = "white";
    } else if (somevalue === "black") {
        somevalue = "white";
        //document.getElementById("color-status").textContent = "White";
        document.body.style.backgroundColor = "white";
        //document.body.style.color = "black";
        localStorage.setItem("storecolorstatus", "white");
        document.getElementById("settings-dashboard").style.color = "black";
    }
}
