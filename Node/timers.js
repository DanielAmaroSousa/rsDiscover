const timeOut = 3000
const finished = () => console.log('done!')

//setTimeout(finished, timeOut)
console.log('start!') //assincronimo
let timer = setTimeout(finished, timeOut)
//clearTimeout(timer) //anula o timer

const timeCheck = 1000
const checking = () => console.log('checking')
let interval = setInterval(checking, timeCheck)
setTimeout(() => clearInterval(interval), 6000) //anula o intervalo
