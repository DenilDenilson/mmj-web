pipeline {
    agent any
    
    environment {
        APP_NAME = "webapp"
        APP_PORT = "8090"
        DEPLOY_PATH = "/home/deployer/webapp"
        NODE_ENV = "production"
    }
    
    stages {
        stage('Clone repository') {
            steps {
                git branch: 'prod', 
                    url: 'https://gitlab.com/smartelectronics/webapp.git', 
                    credentialsId: 'gitLab-read-repository'
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh "npm install"
            }
        }
        
        stage('Build Web Application') {
            steps {
                sh "npm run build"
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    sh "mkdir -p ${DEPLOY_PATH}"
                    sh """
                        rsync -av --delete \
                            --exclude '.git' \
                            --exclude '.gitignore' \
                            ${WORKSPACE}/dist/ ${DEPLOY_PATH}/dist/
                    """
                    sh """
                        rsync -av \
                            ${WORKSPACE}/src/Images/ ${DEPLOY_PATH}/src/Images/
                    """
                    sh """
                        rsync -av \
                            ${WORKSPACE}/package*.json \
                            ${WORKSPACE}/astro.config.mjs \
                            ${WORKSPACE}/tsconfig.json \
                            ${WORKSPACE}/ecosystem.config.cjs \
                            ${DEPLOY_PATH}/
                    """
                    // Limpiar node_modules y cache, luego instalar dependencias de producción
                    sh """
                        cd ${DEPLOY_PATH} && \
                        rm -rf node_modules package-lock.json && \
                        npm install --omit=dev && \
                        npm rebuild sharp
                    """
                }
            }
        }
        
        stage('Restart Service') {
            steps {
                script {
                    // Crear directorio de logs si no existe
                    sh "mkdir -p ${DEPLOY_PATH}/logs"

                    // Reiniciar o iniciar la app con PM2
                    sh """
                        cd ${DEPLOY_PATH} && \
                        pm2 reload ecosystem.config.cjs --update-env || pm2 start ecosystem.config.cjs
                    """

                    sleep(time: 3, unit: 'SECONDS')

                    // Verificar estado
                    sh "pm2 status ${APP_NAME}"
                    sh "pm2 logs ${APP_NAME} --lines 20 --nostream"
                }
            }
        }
    }
    
    post {
        success {
            echo "✅ Build and deployment successful!"
            echo "✅ Application: ${APP_NAME}"
            echo "✅ Running on port: ${APP_PORT}"
        }
        failure {
            echo "❌ Build or deployment failed!"
            echo "- Check logs: journalctl -u ${APP_NAME} -n 50"
        }
    }
}