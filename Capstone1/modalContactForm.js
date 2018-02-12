// Get the modal
var modal = document.getElementById("modalContactForm");

// Get the button that opens the modal
var contactBtn = document.getElementById("contactBtn");

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("closeForm")[0];

// When the user clicks on the button, open the modal 
contactBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
document.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}