  Requerimentos:
npm ( ou NodeJS)
PHP
Laravel

  Passo a passo para rodar o projeto

Em uma pasta vazia, abrir o terminal e rodar os seguintes comandos:

git clone https://github.com/vitordahoraa/DesafioUnivali.git

cd .\DesafioUnivali\desafioUnivali\

npm install

composer install

composer dump-autoload

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan serve

--Em outro terminal, na pasta do projeto

npm run dev
