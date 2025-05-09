let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0

function increaseHomeScoreOne() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function increaseHomeScoreTwo() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function increaseHomeScoreThree() {
    homeCount += 3
    homeScore.textContent = homeCount
}


function increaseGuestScoreOne() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function increaseGuestScoreTwo() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function increaseGuestScoreThree() {
    guestCount += 3
    guestScore.textContent = guestCount
}