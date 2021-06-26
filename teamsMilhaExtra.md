 Schema do Banco de dados

 Times irá conter:
 - Origin;
 - Discover;
 - ReactJS;
 - Node.JS;
 - Elixir;
 - React Native;
 - Flutter;

 Tabela de perfil 1:n

Colunas: 
- (PK) ID;
- Nome do Time (varchar);
- Quantidade de users (bigint);




  Usuario irá conter:
  Tabela de perfil 1:1

  - (PK) Id Perfil (FK)
  - Nome (varchar);
  - Idade (varchar);
  - Time  PEgar nome do perfil e assimiliar(FK) (varchar);
  - Email (FK);
  - Created_at (Date)
  - Update_at (Date)

