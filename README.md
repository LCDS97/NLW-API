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

No projeto iremos utilizar o ORM com a biblioteca do TypeORM
Para utilizar o TypeORM é necessário também o driver do banco para qual irá utilizar, no projeto ira ser

- typeorm
- reflect-metadata
- sqlite3

## TypeORM

No TypeORM existem varias maneiras para definir suas propriedades de acordo com a documentação, mas no projeto iremos utilizar por JSON, na raiz do projeto iremos criar o **ormconfig.json**

Dentro do JSON do ormconfig.json temos algumas propriedades:

- type: Qual driver de banco ira ser utilizado no projeto
- database: Arquivo criado na raiz do projeto * quando utilizado no projeto de sqlite ele cria um arquivo de banco de dados

Dentro da pasta database iremos criar um index.ts com um import createConnection que vem do typeORM, chamando a função no arquivo e assim, o typeORM ira criar a conexão do banco de Dados

### Migrations

Migrations são vercionamentos do banco de dados da aplicação, ou seja, no caso cada alteração no banco de dados é criado um registro e é criado um **histórico** do banco de dados da aplicação, principalmente útil para o trabalho em equipes pois mantém o banco de dados de todos da equipe da mesma forma, simplesmente roda as migrations e mantém sempre o mesmo banco de dados

Dentro do ormconfig é criado um cli.

CLI é uma ferramenta que pode ser utilizada no terminal de uma forma global na aplicação, no caso do projeto iremos utilizar o cli dentro da nossa biblioteca e indica aonde vai ser criado as migrations da aplicação
É necessário criar um script no package.json da aplicação:
```json
"typeorm": "ts-node-dev ./node_modules/typeorm/cli.js"
```
#### Cheatsheet
<details>
<summary>Expandir</summary>
Para criar uma migration:
- yarn typeorm migration:create -n nomeDaMigration

Para executar a migration:
- yarn typeorm migration:run

Para criar entidades:
- yarn typeorm entity:create -n nomeDaEntidade
</details>

Em migrations existe dois métodos:

- **UP**: Serve para criações, alterações e adições

- **DOWN**: Caso precise desfazer é o processo reverso do up com dropTable

Na documentação você pode verificar aonde são salvas as migrations e tipo de arquivo a serem localizados, dentro da ormconfig.json em "migrations"

Para criar entidades de estruturas com a pasta automática e a base do arquivo utiliza-se dentro do cli do ormconfig json

```json
"cli": {
    "migrationsDir": "caminho/diretorio/aqui",
    "entitiesDir": "caminho/diretorio/aqui"
}
```
### Entidades

Entidades são tabelas do projeto, por exemplo entidade User é tabela User do projeto.
Pois no ORM funciona do seguinte fluxo:
<pre>
Entidade < . > ORM < . > BD {users}
</pre>

No arquivo da entidade para referenciar uma entidade a uma tabela do banco, somente colocar o nome da tabela dentro dos parametro do @Entity

Por questões das documentações do TypeORM no getting started, para o typescript, dentro do ts config tem que habilitar duas opções no tsconfig.json
- experimentalDecorators
- emitDecoratorMetadata

Também habilitar para false o strictPropertyInitialization, pois o js irá implicar que os atributos do entity ainda não foram inicializados

Para referencias as PK, colunas, e timestamps da tabela é necessário importar do typeorm as propriedades

{ PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn }

Ira instalar também uma biblioteca da uuid e suas tipagens e importar ele dentro da Users e usaremos o uuid v4
Iremos também criar um construtor dentro da classe de User para o id utilizando a biblioteca do uuid
*Construtor é como a classe vai ser montada quando ela é invocado,ex: new nomeClasse*

### Repositório

Repositórios são para criar métodos, além daqueles que ja possue ou para criar tratativas, tudo isso é criado no customs repositories

No projeto iremos utilizar com uma classe do UsersRepositories.ts
É necessário também importar do typeORM o getCustomRepository para ele gerenciar o repositório que ira ser usado como base para criar um repositório customizado
Iremos extender a classe Repository para o nosso Repositório pois o typeORM ja tem alguns métodos definidos

### Serviços

O que são Services?
O fluxo dele é da seguinte forma:
<pre>
- server -> ( ) -> SERVICE -> Repositories -> BD {users}
</pre>

É a parte da aplicação onde faz todo tratamento e processamento das validações das regras de négocios, é a camada de serviço responsável para validação antes que a requisição seja enviada para o banco de Dados ou tratativa de retorno para o cliente

Toda aplicação tem suas regras de negócios, casos de usos, regras funcionais e não funcionais

<details>
<summary> NLW-Valoriza - Regras de Negócios Exemplo</summary>
### NLW VALORIZA

- Cadastro de usuário
- [ ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail 
- [ ] Não é permitido cadastrar usuário sem e-mail 

- Cadastro de Tag
- [ ] Não é permitido cadastrar mais de uma tag com o mesmo nome
- [ ] Não é permitido cadastrar tag sem nome
- [ ] Não é permitido cadastrar por usuários que não sejam administradores

- Cadastro de elogios
- [ ] Não é permitido um usuário cadastrar um elogio para si
- [ ] Não é permitido cadastrar elogios para usuários invalidos
- [ ] O usuário precisa estar autenticado na aplicação

</details>

Conceito de código limpo - como SOLID para aplicar em projetos

Um dos conceitos é lembrar que toda classe existe por um motivo e que essa mesma classe não pode possuir responsabilidades demais construido dentro delas

No projeto foi criado o CreateUserService aonde sua única responsábilidade vai ser em relação ao cadastro de usuários e suas divisões de responsabilidades

Uma interface é para você indicar a classe quais tipos de objetos ele irá receber

### Controller
O controller no fluxo se encontra antes da camada de SERVICE
<pre>
- server -> controller -> service -> repository -> BD {users}
</pre>

Ele recebe a requisição do servidor e repassa para o service trata essa informação, dentro do controller teremos as informações do nosso request e do nossso response, assim deixando as responsabilidades corretas para aplicação

### Routes

Para não poluir nosso services e definir as rotas da aplicação é criado um arquivo routes.ts dentro do src da aplicação, e nesse arquivo sempre ficas as rotas da aplicação, assim como o caminhos do controllers para serem direcionados a camada de serviços, nesse arquivo vai ficar todas as rotas da aplicação

> Para habilitar o express aceitar json em suas entradas, é necessário utilizar o app.use(express.json())

> Código da Aula 2 #unidade

</details>

