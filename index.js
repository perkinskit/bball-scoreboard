let homeScore = 0
let guestScore = 0
let hsEl = document.getElementById('home-score')
let gsEl = document.getElementById('guest-score')

function homeAdd(x){
    homeScore += x
    hsEl.textContent = homeScore
    console.log(homeScore, guestScore)
    highLight()
}

function guestAdd(x){
    guestScore += x
    gsEl.textContent = guestScore
    console.log(homeScore, guestScore)
    highLight()
}

function highLight(){
    if (homeScore > guestScore){
        console.log('hs=1st')
        hsEl.classList.add("leader")
        gsEl.classList.remove("leader")
    }
    else if (homeScore < guestScore){
        console.log('gs=1st')
        hsEl.classList.remove("leader")
        gsEl.classList.add("leader")
    }
    else{
        hsEl.classList.remove("leader")
        gsEl.classList.remove("leader")
    }
}