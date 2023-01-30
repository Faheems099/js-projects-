//variables
document.body.style.background='blue'
document.body.style.color='orange'
let types,s_input,system_input,score=0
let a=`<h1 style='color:blue;text-align: center;'>SNAKE WATER GUN<h1>`;
document.write(a)
for(let i=0;i<3;i++){
//input
 types = prompt('type S,W or G')
if(types!='s'||'w'|'g'){
  alert('wrong entry')
 types = prompt('type S,W or G')
}
//system input 
 s_input = Math.floor(Math.random()*30)
s_input= Number.parseInt(s_input)
console.log(s_input)
if(s_input<10){
  system_input='s'
}
else if(s_input<20){
  system_input='w'
}
else {
  system_input='g'
}

document.write(` you type  :  `+types+`<br>`)
document.write(` System input :  `+system_input+`<br>`)

//logic
//snake
if(types=='s'&&system_input=='s'){
  document.write('match draw'+`<br>`)
}
else if(types=='s'&&system_input=='w'){
  document.write('match won'+`<br>`)
  score++
}
else if(types=='s'&&system_input=='g'){
  document.write('match loss'+`<br>`)
  score--;
}
//water
if(types=='w'&&system_input=='w'){
  document.write('match draw'+`<br>`)
}
else if(types=='w'&&system_input=='g'){
  document.write('match won'+`<br>`)
  score++
}
else if(types=='w'&&system_input=='s'){
  document.write('match loss'+`<br>`)
  score--;
}
//gun
if(types=='g'&&system_input=='g'){
  document.write('match draw'+`<br>`)
}
else if(types=='g'&&system_input=='s'){
  document.write('match won'+`<br>`)
  score++
}
else if(types=='g'&&system_input=='w'){
  document.write('match loss'+`<br>`)
  score--;
}

document.write(` score :  `+score+`<br>`)
  
document.write(` ***************************** <br>`)
}
document.write(` <b style= 'color:red ' >Final score :  </b>`+score+`<br>`)