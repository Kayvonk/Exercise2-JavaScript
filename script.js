var modal = document.getElementById("modal");
var modalText = document.getElementById("modal-text");
var span = document.getElementsByClassName("close")[0];
var modalConfirm = document.getElementById("modal-confirm");

function getNum() {
    var resultSpan = document.getElementById("result");
    var timesRun = 0;
    var interval = setInterval(function () {
        timesRun += 1;
        if (timesRun === 20) {
            clearInterval(interval);
            promptResults(number)
            showModal();
        }
        number = Math.floor((Math.random() * 100000) + 1);
        console.log(number)
        resultSpan.innerHTML = number
    }, 100);
}
document.getElementById("startBtn").addEventListener("click", function () {
    getNum()
});

function promptResults() {
    if (number < 1001) {
        modalText.textContent = "You win! How lucky!"
    }
    else {
        modalText.textContent = "Too bad! You've lost!"
    }
}

function showModal() {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

modalConfirm.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}