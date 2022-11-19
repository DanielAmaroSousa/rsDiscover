pwd
cd .. 	cd . 		cd ~
ls -i //info 	-a //All	-h //Human	-R //recursive	-S //ordenar por tamanho
stat <ficheiro> //informações sobre o ficheiro 
mkdir <diretório1> <diretório2> <etc..> //criar diretórios
touch <ficheiro1> <ficheiro2> //criar ficheiros
cp <ficheiro(s)_ou_diretório(s)_origem> <ficheiro_ou_diretório_destino> //copiar ficheiros ou diretórios
mv <ficheiro(s)_ou_diretório(s)_origem> <ficheiro_ou_diretório_destino> //mover ou renomear ficheiros ou diretórios
rm <ficheiro(s)> //remover para sempre
rm -rf <diretório> //recursivo e forçado
find . -type f -name "*.mp4" //encontrar arquivos (tipo f file ou d diretório) (pelo nome "*a*")
less <ficheiro>	cat <ficheiro> //ver conteúdo de arquivos
nano <ficheiro> //editor mais simples de texto Linux
vim <ficheiro> //editor mais complexo :wq (write e quit) :q! (sair sem salvar)

wildcards
* //autocomplete todo o resto do nome
? //autocomplete só o último caratere do nome 

comandos que não estavam a funcionar:
man //é uma libraria de manual para os comandos mas basta fazer: comando --help //ex: ls --help
apropos //sugestão de comandos

//resolvido com instalação da libraria man com o comando: sudo apt install man

comandos que não estão a funcionar no hyper:
file
vim

outros comandos:
whereis <texto> //encontrar
echo $PATH //mostra variável PATH no ecran
	