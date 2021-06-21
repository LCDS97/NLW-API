# NLW-API
 
Utilizaremos o yarn como a biblioteca de dependências para o projeto

Além de aula de hoje ter explicado conceito e diferença de Dev Dependencies e Dependencies
- Dev Dependencies: As bibliotecas nesse ambiente servem somente para o desenvolvimento do projeto
- Dependencies: Bibliotecas que serão utilizados na aplicação em produção


Algumas libs que iremos utilizar para iniciar o projeto:
- Express e também @types/express para tipagens comuns do express
- Typescript para node
- ts-node-dev para configurar o node para ler arquivos .ts(typescript)

Os métodos HTTP que serão utilizados no projeto irá ser:
* GET => Buscar uma informação/dado
* POST => Inserir uma informação/dado
* PUT => Alterar uma informação/dado
* DELETE => Deletar uma informação/dado
* PATCH => Alterar uma informação/dado especifíca

Sempre dentro das rotas temos dois parâmetros:
* Request ou req => Informações/Dados de Entrada
* Response ou res => Informações/Dados de Saída

No projeto estou utilizando o POSTMAN para gerenciamentos e testes das rotas

