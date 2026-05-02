services:
  # Backend API
  - type: web
    name: healtho-backend
    env: node
    rootDir: backend
    buildCommand: npm install
    startCommand: node server.js
    envVars:
      - key: ANTHROPIC_API_KEY
        sync: false
      - key: FRONTEND_URL
        value: https://healtho-frontend.onrender.com
      - key: NODE_ENV
        value: production

  # Frontend React App
  - type: static
    name: healtho-frontend
    rootDir: frontend
    buildCommand: npm install && npm run build
    staticPublishPath: build
    envVars:
      - key: REACT_APP_API_URL
        value: https://healtho-backend.onrender.com
