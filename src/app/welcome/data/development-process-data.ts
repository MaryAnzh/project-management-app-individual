export const developmentProcessData = [
  {
    title: 'MAIN.BACKEND',
    shortDescription: 'MAIN.DEPLOY_BACKEND',
    description: [
      {
        text: 'MAIN.CARDS.BACKEND.1',
        code: [
          'npm install -g heroku',
          'heroku --version',
        ],
      },
      {
        text: 'MAIN.CARDS.BACKEND.2',
        code: [],
      },
      {
        text: 'MAIN.CARDS.BACKEND.3',
        code: [
          'heroku create project-management-app-individ --region eu',
          ' heroku addons: create heroku - postgresql: hobby - dev',
          'heroku config: set NPM_CONFIG_PRODUCTION = false',
          'heroku config: set LOG_CONSOLE = false',
          'heroku config: set LOG_ERR_LEVEL = warn',
          'heroku config: set LOG_INFO_LEVEL = info',
          'heroku config: set JWT_SECRET_KEY = secret - key',
          'heroku config: set SALT_SIZE = 10',
          'heroku config: set USE_FASTIFY = true'
        ],
      },
    ],
  },

  {
    title: 'MAIN.INSTALL_ANGULAR',
    shortDescription: '',
    description: [],
  }
]
