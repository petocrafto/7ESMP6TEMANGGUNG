function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
    setTimeout(() => {
        document.getElementById("overlay").style.opacity = "1";
    }, 10); // Delay to trigger opacity transition
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("overlay").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("overlay").style.display = "none";
    }, 500); // Match the transition time for the opacity
}
