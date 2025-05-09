let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let count = 0

function increaseHomeScoreOne() {
    count += 1
    homeScore.textContent = count
}

function increaseHomeScoreTwo() {
    count += 2
    homeScore.textContent = count
}

function increaseHomeScoreThree() {
    count += 3
    homeScore.textContent = count
}


function increaseGuestScoreOne() {
    count += 1
    guestScore.textContent = count
}

function increaseGuestScoreTwo() {
    count += 2
    guestScore.textContent = count
}

function increaseGuestScoreThree() {
    count += 3
    guestScore.textContent = count
}