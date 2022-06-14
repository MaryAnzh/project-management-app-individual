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
          'heroku config: set USE_FASTIFY = true',
          'git push heroku source',
          'git push heroku source:main'
        ],
      },
    ],
  },

  {
    title: 'MAIN.INSTALL_ANGULAR',
    shortDescription: '',
    description: [
      {
        text: 'MAIN.CARDS.ANGULAR.1',
        code: [
          'ng new project-management-app',
          'cd project-management-app',
          'ng serv-o'
        ],
      },
      {
        text: 'MAIN.CARDS.ANGULAR.2',
        code: [
          'npm i angular-cli-ghpages --save-dev'
        ],
      },
      {
        text: 'MAIN.CARDS.ANGULAR.3',
        code: [
          `"options": {`,
          `  "outputPath": "dist"`
        ],
      },
      {
        text: 'MAIN.CARDS.ANGULAR.4',
        code: [
          `ng deploy --base-href="https://<name>.github.io/<project name>/"`
        ],
      },
    ],
  },

  //ESLint
  {
    title: 'MAIN.CARDS.ESLINT',
    shortDescription: '',
    description: [
      {
        text: 'MAIN.CARDS.ESLINT',
        code: [
          'ng lint'
        ]
      }
    ]
  },

  //APP_STRUCTURE
  {
    title: 'MAIN.APP_STRUCTURE',
    shortDescription: '',
    description: [
      {
        text: 'auth',
        code: []
      },
      {
        text: 'boards',
        code: []
      },
      {
        text: 'core',
        code: []
      },
      {
        text: 'redux',
        code: []
      },
      {
        text: 'shared',
        code: []
      },
      {
        text: 'welcome',
        code: []
      },
    ]


  },

  //HTTPClientInterceptor
  {
    title: 'MAIN.INTERCEPTOR',
    shortDescription: '',
    description: [
      {
        text: 'MAIN.INTERCEPTOR',
        code: [
          'ng g interceptor HTTP-Client',
        ]
      }
    ]
  },

  {
    title: 'In process....',
    shortDescription: '',
    description: [
      {
        text: '',
        code: [
          '',
        ]
      }
    ]
  },

  //Layout bpards page
  {
    title: 'MAIN.BOARDS__CARD',
    shortDescription: '',
    description: [
      {
        text: 'MAIN.CARDS.BOARDS.1',
        code: [
          'ng g component board-card',
        ]
      },
      {
    text: 'MAIN.CARDS.BOARDS.2',
    code: [
      `import { TranslateModule } from '@ngx-translate/core';`,
    ]
  },
    ]


  },

  //board create form
  {
    title: 'MAIN.BOARD_CREATE-FORM',
    shortDescription: '',
    description: [
      {
        text: 'Add modal-create-board.component',
        code: [
          '',
        ]
      },
      {
        text: 'Add FormsModule, ReactiveFormsModule',
        code: [
          `import { FormsModule, ReactiveFormsModule } from '@angular/forms';
`,
        ]
      }
    ]


  },

  //burger
  {
    title: 'Add burger',
    shortDescription: '',
    description: [
      {
        text: 'Add burger layout and @keyform',
        code: [
          '',
        ]
      }
    ]


  },
  {
    title: '',
    shortDescription: '',
    description: [
      {
        text: '',
        code: [
          '',
        ]
      }
    ]


  },
  {
    title: '',
    shortDescription: '',
    description: [
      {
        text: '',
        code: [
          '',
        ]
      }
    ]


  },

]
