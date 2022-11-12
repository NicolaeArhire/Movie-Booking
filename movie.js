// Start calendar with current date 
document.getElementById('current-date').value = new Date().toISOString().slice(0, 10);

//Filter movies by user choice
let moviesFilter = () => {
    let selectMovie = document.getElementById("movies").value;
    let displayTrailer = document.getElementsByClassName("trailer");
    for (let i = 0; i < displayTrailer.length; i++) {
        if ((displayTrailer[i].classList.contains(selectMovie) || selectMovie == "0") > 0) {
            displayTrailer[i].hidden = false;
        } else {
            displayTrailer[i].hidden = true;
        }
    }
};

//Add selected options on the ticket
let createTicket = document.getElementById("ticket");
createTicket.addEventListener('click', () => {
    let chooseMovie = document.getElementById("movies");
    let outputMovie = chooseMovie.options[chooseMovie.selectedIndex].text;
    document.getElementById("info4").textContent = outputMovie;

    let chooseDate = document.getElementById("current-date");
    document.getElementById("info6").textContent = chooseDate.value;

    let chooseTime = document.getElementById("time");
    let outputTime = chooseTime.options[chooseTime.selectedIndex].text;
    document.getElementById("info8").textContent = outputTime;
    
    let chooseCategory = document.getElementById("category");
    let outputCategory = chooseCategory.options[chooseCategory.selectedIndex].text;
    document.getElementById("info10").textContent = outputCategory;
    // document.getElementById("info12").textContent = function retrieveSeat() {
    //     let boxCheck = document.getElementsByClassName("box");
    //     let total=0;
    //     for (let i=0; i < boxCheck.length; i++) {
    //         if (parseInt(boxCheck[i].value) && boxCheck[i].checked)
    //             total += parseInt(boxCheck[i].value);
    //     }
    // };
    document.getElementById("barcode").textContent = ("" + Math.random()).substring(2, 11);
});

//Clear all options from the ticket
let clearTicket = document.getElementById("clear");
clearTicket.addEventListener('click', () => 
    clearText("---", "---", "---", "---", "---", ""));

function clearText(text, text1, text2, text3, text4, text5) {
    document.getElementById("info4").firstChild.data = text;
    document.getElementById("info6").firstChild.data = text1;
    document.getElementById("info8").firstChild.data = text2;
    document.getElementById("info10").firstChild.data = text3;
    document.getElementById("info12").firstChild.data = text4;
    document.getElementById("barcode").firstChild.data = text5;
}

//Add date/time on the ticket
let time = document.getElementById('current-time');
setInterval(() => {
    time.innerHTML = "Created on: " + new Date().toLocaleDateString() + ", at: " + new Date().toLocaleTimeString();
},10);

//Open modal
let modal = document.getElementById("modal");
let seat = document.getElementById("seat");
let closeModal = document.getElementsByClassName("seat-done")[0];

seat.onclick = function() {
  modal.style.display = "block";
};

//Close modal
closeModal.onclick = function() {
  modal.style.display = "none";
};

//Clear seats on modal
function deleteSeats(uncheckBoxes) {
    let verifyBoxes = document.getElementsByClassName("box");
    for (let i = 0; i < verifyBoxes.length; i++) {
        verifyBoxes[i].checked = uncheckBoxes;
    };
};