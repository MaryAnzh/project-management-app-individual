# project-management-app-individual

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