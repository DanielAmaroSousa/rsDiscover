
- pwd, cd, mkdir, ls, ls -a, clear, cat
	Working Diretory (modified)

- git add .
	Stage Area (stagged)

- git commit -m "comentário"
   	Local Repository (commited)
	Hash(SHA-1) é o nome dado pelo git ao nosso commit
	parent: é o pai do commit - o commit inicial é null (não tem pai)

- git log 
- git log --oneline
- git log -n 5
- git log --since=2020-10-01
- git log --until=2020-10-01
- git log --author=Mayk
- git log --grep="mensagem a procurar"

	HEAD é o ponteiro que marca a minha localização dentro dos commits

- vim file.txt
	no VIM: i para escrever, :wq é o write and quit

- git status
	mostra como está o estado actual dos meus ficheiros locais em relação à stage area

- git rm file.txt
- git rm --cached file.txt
	remove a file.txt local / stage area

- git diff 
- git diff --stagged
	mostra as diferenças exatas em cada arquivo que está local / chached ou stagged

- git mv file.txt file1.txt
	mv é mover que é igual a renomear (novo caminho) logo serve para renomear 
	ou mover para outro diretorio (basta acrescentar o diretorio no caminho)

- git restore file.txt
- git restore --stagged file.txt
	desfazer modificações local/no Stage Area (antes era o git reset HEAD)
	se for tudo em vez do nome do ficheiro utilizo .

- git commit --amend -m "mensagem alterada"
	corrigindo o último commit

- git checkout HASHcopiadaDoStatus -- file.txt
	recuperando arquivos de uma etapa antiga da minha história (definida pelo HASH

- git clean -f 
	remove todos os arquivos não rastreados, ou seja, que estejam no local e não no StageArea

- git revert HEAD~5
	volta na história atual menos 5, também pode fazer em vez do HEAD~menos pode colocar o HASH





