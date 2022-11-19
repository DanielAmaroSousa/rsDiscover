//NPM - Node Package Manager

npm init
npm init -y //yes para tudo

json - javascript object notation
é um objecto logo:
{
	"nome": "Daniel",
	"idade": 43,
	"atalhos": {
		"word" : "c:\word\word.exe"
	},
}

//package.json
//fica com as informação de iniciação do npm

//instalando dependencias
//modulos de terceiros - ex: cfonts
npm install cfonts
npm i cfonts

//dependencias so de desenvolvimento
npm i cfonts -D

//atualiza as dependencias
npm update

//a pasta node_modules deve ficar no .gitignore para não carregar as dependencias

//rodar scripts do package.json - ex: test ou start
npm run test
npm start

//instalando pacotes globalmente - ex: opn (de outra forma ficam só no nosso projeto)
npm i opn -g

//onde ficam estes pacotes
nmp root -g

//gerenciando versões major.minor.patch - ex:"2.29.1" versão fixa não atualiza
//no package.json -ex: "moment" : "*" vai atualizar todas as versões
//patch é só resolução de algum bug - só atualizar patch "~2.29.1"
//só atualizar minor e patch "^2.29.1"

npm i moment@1.5.1
//que versões estão desatualizadas
npm outdated
//atualizar tudo
npm upgrade
//atualizar para a última versão
npm i moment@latest

//remover pacote - ex: moment
npm uninstall moment