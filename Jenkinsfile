pipeline {
    agent any
    
    environment {
        APP_NAME = "webapp"
        APP_PORT = "8090"
        DEPLOY_PATH = "/home/deployer/webapp"
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
                            --exclude 'node_modules' \
                            --exclude '.git' \
                            --exclude '.gitignore' \
                            ${WORKSPACE}/ ${DEPLOY_PATH}/
                    """
                    sh "cd ${DEPLOY_PATH} && npm ci --omit=dev"
                }
            }
        }
        
        stage('Restart Service') {
            steps {
                script {
                    sh "app-service ${APP_NAME} restart"
                    sleep(time: 3, unit: 'SECONDS')
                    sh "app-service ${APP_NAME} status"
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