var sec = 0
var min = 0
var hr = 0
var interval
var secStop = 0
var minStop = 0
var hrStop = 0
var secMarc = 0
var minMarc = 0
var hrMarc = 0

function twoDigits(digit) {
    if(digit < 10) {
        return("0" + digit)
    } else {
        return digit
    }
}

function start(){
    time()
    interval = setInterval(time,1000)
}

function pause(){
    clearInterval(interval)
}

function marc(){
    secMarc = sec
    minMarc = min
    hrMarc = hr

    document.querySelector(".content-marc").innerText += "=> " + twoDigits(hrMarc) + ":" + twoDigits(minMarc) + ":" + twoDigits(secMarc) + "\n"
}

function stop(){
    clearInterval(interval)
    secStop = sec
    minStop = min
    hrStop = hr
    document.querySelector(".content-stops").innerText += "=> " + twoDigits(hrStop) + ":" + twoDigits(minStop) + ":" + twoDigits(secStop) + "\n"

    sec = 0
    min = 0
    document.querySelector(".timer").innerText = "00:00:00"
}

function time(){
    sec++
    if(sec == 60) {
        min++
        sec = 0
        if(min == 60) {
            hr++
            min = 0
            sec = 0
        }
    }
    document.querySelector(".timer").innerText = twoDigits(hr) + ":" + twoDigits(min) + ":" + twoDigits(sec)
}

function cleanMarc() {
    document.querySelector(".content-marc").innerText = ""
}

function cleanStop() {
    document.querySelector(".content-stops").innerText = ""
}

const chk = document.querySelector('.checkbox')

chk.addEventListener('change', () =>{
    document.body.classList.toggle('dark')
})