
# ProjectManagementApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


**Steps:**

1.Backend
1.1 Pegistration to Heroku and install heroku
npm install -g heroku
heroku --version

1.2 Clone Backend repo:

git clone https://github.com/vitaly-sazonov/kanban-rest.git
cd kanban-rest
git switch source

1.3 Deploy on Heroku:

heroku create project-management-app-individ --region eu
heroku addons:create heroku-postgresql:hobby-dev
heroku config:set NPM_CONFIG_PRODUCTION=false
heroku config:set LOG_CONSOLE=false
heroku config:set LOG_ERR_LEVEL=warn
heroku config:set LOG_INFO_LEVEL=info
heroku config:set JWT_SECRET_KEY=secret-key
heroku config:set SALT_SIZE=10
heroku config:set USE_FASTIFY=true
    
//пвщим ветку
git push heroku source
    
// делаем мерж, на Хероку автоматический билд при мерже в main
git push heroku source:main

2. Установка и настройка Angular

ng new project-management-app
cd project-management-app
ng serv -o