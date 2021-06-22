# NLW-API

## Sumário:
- [Sobre](#about)
- [Conceitos](#concepts)

# NLW VALORIZA
> Projeto da semana Next Level Week
## :file_folder: Estrutura do Projeto
<pre>
<p> Futuramente colocarei a estrutura do projeto aqui
</pre>
## Sobre o projeto

<hr>
<h2>:pencil: Conceitos aprendidos </h2> <a name="concepts"></a>
<details>
<summary> Aula 1</summary>
Utilizaremos o yarn como a biblioteca de dependências para o projeto

> Dependências

Além de aula de hoje ter explicado conceito e diferença de Dev Dependencies e Dependencies:
<pre>
> Dev Dependencies:
As bibliotecas nesse ambiente servem somente para o desenvolvimento do projeto
</pre>
<pre>
> Dependencies:
Bibliotecas que serão utilizados na aplicação em produção
</pre>


> Bibliotecas

Algumas libs que iremos utilizar para iniciar o projeto:
- Express e também @types/express para tipagens comuns do express
- Typescript para node
- ts-node-dev para configurar o node para ler arquivos .ts(typescript)

> Métodos HTTP

Os métodos HTTP que serão utilizados no projeto irá ser:
<pre>
* GET => Buscar uma informação/dado
* POST => Inserir uma informação/dado
* PUT => Alterar uma informação/dado
* DELETE => Deletar uma informação/dado
* PATCH => Alterar uma informação/dado especifíca
</pre>

> Rotas

Sempre dentro das rotas temos dois parâmetros:
<pre>
* Request ou req => Informações/Dados de Entrada
* Response ou res => Informações/Dados de Saída
</pre>

> Programas

No projeto estou utilizando o POSTMAN para gerenciamentos e testes das rotas
Também utilizando o beekeeper studio para o SQL

> Código da AULA 1 - #Together

</details>

<details>
<summary> Aula 2</summary>

> Banco de Dados
<details>

<summary>Schema do projeto</summary>
<pre>
├──USER                                     ├──Tag       
├ ├──(PK) ID (uuid)                         ├ ├──(PK) ID (uuid)
├  ├──name (varchar)                        ├  ├──name (varchar)
├  ├──name (varchar)                        ├  ├──created_at (Date)
├  ├──name (varchar)                        ├  ├──updated_at (Date)
├  ├──email (varchar)                       ⬇ 
├  ├──password (varchar)                    ⬇ 
├  ├──admin (boolean)                       ⬇ 
├  ├──created_at (Date)                     ⬇
├  ├──updated_at (Date)                         ├──Compliments
⬇                                               ├ ├──(PK) ID (uuid)
⬇                                               ├  ├──(FK) user_sender (uuid)  
➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡➡        ├  ├──(FK) user_receiver (uuid)
                                                ├  ├──(FK) tag_id (uuid)
                                                ├  ├──created_at (Date)



</pre>


</details>

> Tipos de parâmetros
<pre>
* Routes Params => http://localhost:3000/produtos/(params)
- O route params serve para definir para acessar um parametro para a rota, por exemplo para acessar um id de um produto, ou seja o id é o paramêtro nesse caso
- O route params são obrigatórios pois são implicitos nas rotas

* Query Params => http://localhost:3000/produtos?(chave)=(valor)&(outroChave)=(outroValor)
- Serve nesse para fazer filtros ou buscar dentro das nossas rotas, sempre para começar ele é com "?" e sempre segue o padrão de chave e valor para colocar outro filtro utiliza-se o "&"
- Os Query params são opcionais, não são implicitos nas rotas

* Body Params => {
    "name": "teclado",
    "description": "teclado-bom"
}
- Vem no corpo da requisição os paramêtros, tanto JSON, txt, qualquer valor no corpo da requisição
</pre>
Existem 3 formas para utilizar o banco de Dados

- Pelo próprio driver
- Query Builder
- ORM(Object Relational Map)

</details>

