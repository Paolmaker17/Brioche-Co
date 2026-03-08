let day=+localStorage.day||1, d=dayNumber
d.textContent=day

function nextDay(){
    day++
    localStorage.day=day

    d.classList.remove("flip")
    void d.offsetWidth
    d.classList.add("flip")

    d.textContent=day
}

function resetRun() {
    localStorage.removeItem("day")

    d.classList.remove("flip")
    void d.offsetWidth
    d.classList.add("flip")

    d.textContent=1
    day=1
}