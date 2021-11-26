
Instalação das dependências
Instalação do sequelize
$ npm install sequelize
Voltar para Sumário

Instalação do pacote de comandos CLI
$ npm install --save-dev sequelize-cli
Voltar para Sumário

Instalação do mysql2
$ npm install mysql2
Voltar para Sumário

Inicialização de um projeto sequelize
O comando criará as pastas models, migrations, seeders e config.

$ npx sequelize-cli init
Voltar para Sumário

Criação de um arquivo model
O comando irá gerar o arquivo model e o arquivo migration correspondente.

$ npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string
Voltar para Sumário

Arquivos migration
Criação de um arquivo migration
$ npx sequelize migration:generate --name migrationName
Voltar para Sumário

Execução dos arquivos migration
$ npx sequelize db:migrate
Voltar para Sumário

Reverter a migration
$ npx sequelize db:migrate:undo
Voltar para Sumário

Reverter até uma migration específica
$ npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
Voltar para Sumário

Arquivos seeds
Criação de um arquivo seed
$ npx sequelize seed:generate --name seedName
Voltar para Sumário

Execução dos arquivos seeds
O comando executa todos os arquivos seeds

$ npx sequelize db:seed:all
Voltar para Sumário

Reversão dos arquivos seeds
Reverter todos arquivos seeds
$ npx sequelize db:seed:undo:all
Voltar para Sumário

Reverter seed mais recente
$ npx sequelize-cli db:seed:undo
Voltar para Sumário

Reverter seed específica
$ npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
Voltar para Sumário

© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete
