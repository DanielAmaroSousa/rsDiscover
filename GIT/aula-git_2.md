- git show HASH --color-words
 	Ver mudanças na história, git diff verifica no local e stage area,
        git show mostra as historias já commitadas
	O HASH copia do git log

- git show HASH -- src/diretorio/*
	verifica todos os arquivos alterados

- git show HASH -- src/diretorio/arquivo.html
	verifica todo o arquivo.html e evidencia as alterações

- git ignore 
	ignora arquivos que não queremos que seja rastreado (ex: node_modules/ , DS_Store
	tem de criar arquivo .gitignore com os nomes dos arquivos e diretórios a ignorar
	tem de fazer git add . para rastrear o .gitignore

- git rm -r --cached .
	remover todos os arquivos do cached e voltar a fazer o 'git add .' com o '.gitignore' criado

- git commit -am "nova adição" .
	faz o git add em conjunto com o git add (a) e com a mensagem (m)

#GITHUB

- readme.md 
	.md é o markdown que é o ficheiro de texto do git

- ssh-keygen -t rsa -b 4096 -C "dsousapt@gmail.com"
	tem de criar e copiar usado "cat id_rsa.pt" nova chave ssh no github

- eval `ssh-agent -s`
- ssh-add id_rsa
	iniciar o ssh-agent no windows

Agora linkar um repositório local com o git hash:

- git remote add origin SSHcopiado_do_repositorio_criado_no_GitHub
- git branch -M main
- git push -u origin main

- git push
	enviar as alterações locais para a cloud

- git pull
	receber as alterações feitas na cloud para local

Resolução de conflitos:
- quando altero sem antes ter feito o git pull pois pode haver alterações na nuvem
- git merge
- ferramentas: vim ou vscode

Baixar projetos(repositorios) completos para a minha máquina:
- git clone SSH_chave_copiada_do_GitHub
*fork no GitHub vai fazer um clone do repositório de terceiros para o meu GitHub mas só faz sentido
se estiver a colaborar com o autor - se não bastar dar estrela para revisitar

*open . --> no git hash abre o vscode
*sair do vim sem gravar :q!
*:tada: :sparkles: --> posso colocar emojis nas mensagens
*foto do email --> gravatar.com (globaly recognized avatar)




