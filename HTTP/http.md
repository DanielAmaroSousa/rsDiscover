//Estudar HTTP com JSON Server

iniciar:
json-server --watch db.json

utilizar o curl para verificar as respostas aos metodos:
-I //ver cabeçalho
-i //ver info
-v //verbose
-d //pedido com dados
-H //pedido com cabeçalho

OPTIONS - verifica a disponibilidade de metodos na resposta do servidor
curl -X OPTIONS http://localhost:3000/posts -i

GET - pegar um recurso do servidor (não altera)
curl http://localhost:3000/posts -i

HEAD - permite verificar só o cabeçalho para por exemplo ver o tamanho do conteudo
curl -I http://localhost:3000/posts

POST - publicar/cadastrar um recurso (serve para criar)
curl -d '.......'

PUT - criar ou atualiza um recurso (serve mais para atualizar)
curl -d '.......' -X PUT http://localhost:3000/posts

PATCH - atualiza parcialmente um recurso
curl -d '.......' -X PATCH http://localhost:3000/posts

DELETE - remover um recurso
curl -X DELETE http://localhost:3000/posts/2


//Headers - incluem as diversas configurações da comunicação (compressão, cookies, status code, etc..)
São do tipo nome: valor
Têm 3 tipos: Gerais, Response, Request 
Devtools para visualizar
Devdocs.io para saber os detalhes

//Status
100: pedido em curso pode parar ou ignorar
200: sucesso
300: recurso movido
400: insusesso 
400 - mal pedido, 
401 - faltou chave de autorização, 
403 - está proibida/chave não aceite 
404 - recurso não encontrado/ não existe
405 - metodo não permitido
429 - demasiados pedidos (API)
500 - problema do servidor
503 - serviço não disponivel no momento
Devdocs.io para saber os detalhes
