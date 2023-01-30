console.log(`no Guessing Game`)
let times = 0, guess, cno = Math.floor(Math.random() * 100)
console.log(cno)
do {
  guess = prompt('type no ')
  guess = Number.parseInt(guess)
  if (guess > cno) {
    alert('no is greater then guess')
  }
  else if(guess<cno){
    alert('no is less then guess')
  }
  else{
    alert('correct no')
  }
  times++
} while (guess != cno)
console.log('***********************************')
console.log("your score is "+(100 - times))
console.log('***********************************')