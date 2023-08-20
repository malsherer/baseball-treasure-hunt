var treasure = Math.floor(Math.random() * 9)
var bomb = Math.floor(Math.random() * 9)
if(treasure === bomb) {
  bomb = Math.floor(Math.random() *9)
}

const emoji = (number) => {
  if(number === treasure){
    document.getElementById(number).innerHTML = "⚾"
    alert("HOMERUN!!!")
    location.reload()
    setTimeout(location.reload(), 5000)
  } else if(number === bomb){
    document.getElementById(number).innerHTML = "❌"
    alert("You struck out!")
    location.reload()
  } else{
    document.getElementById(number).innerHTML = "🧢"
  } 
}

