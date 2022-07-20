var time = document.querySelector('.Clock-body')

setInterval(CurrentTime, 1000)
function CurrentTime() {
    let D = new Date();
    let hour = D.getHours();
    let min = D.getMinutes();
    let sec = D.getSeconds();
    let session = "P.M.";


    if (hour == 0) {
        hour = 12}  

    if (hour== 12) {44
        session = "A.M.";
        hour = hour - 12;

    }
    time.innerHTML = `${hour}:${min < 10 ? `0${min}` : min}: ${sec<10 ? `0${sec}`:sec} : ${session}`
}
 CurrentTime()