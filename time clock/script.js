let time = document.body
time.style.fontSize='379px'
time.style.backgroundImage='url("https://i.pinimg.com/originals/a4/96/c2/a496c2b6bc5d7cfe0e0674f6598c38ad.jpg") '
time.style.backgroundRepeat='no-repeat'
time.style.backgroundSize='200% 200%'

setInterval(() => {
    let a = new Date()
    let h =a.getHours()
    let m =a.getMinutes()
    let s =a.getSeconds()    

    time.innerHTML = h+":"+m+":"+s
}, 1000);
