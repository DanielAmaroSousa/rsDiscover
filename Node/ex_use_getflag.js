//node ex_use_getflag --name "Daniel Sousa" --greeting "Tudo bem com vc?"

const getflag = require('./getflag')

nome = getflag('--name')
greeting = getflag('--greeting')

console.log(`Oi ${nome} ${greeting}`)