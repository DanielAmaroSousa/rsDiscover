SELECT * FROM aluno WHERE matricula >=1 OR nome like 'j%';
SELECT * FROM aluno WHERE matricula BETWEEN 1 AND 3;
SELECT * FROM aluno WHERE matricula IN(1,2);
SELECT * FROM funcionarios WHERE id_departamento IS NOT NULL;
INSERT INTO funcionarios (nome, cpf) VALUES ('Daniel Sousa', 999999999);
SELECT * FROM funcionarios WHERE nome like '%d%';
UPDATE funcionarios SET cpf = 222372281, id_departamento = 4 WHERE id_funcionario = 12;
UPDATE funcionarios SET nome = 'Miguel Costa' WHERE id_funcionario = 12;
DELETE FROM funcionarios WHERE id_funcionario = 12;