pipeline {
    agent any
    environment {
        FRONTEND_IMAGE = "frontend-image"
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Installer les dépendances Angular
                    sh 'npm install'
                }
            }
        }
        stage('Build Angular App') {
            steps {
                script {
                    // Compiler l'application Angular en production
                    sh 'npm run build --prod'
                }
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Construire l'image Docker pour l'application Frontend
                    sh 'docker build -t $FRONTEND_IMAGE .'
                }
            }
        }
        stage('Deploy Frontend') {
            steps {
                script {
                    // Déployer le Frontend en utilisant Docker sur le port 4200
                    sh 'docker run -d -p 4200:80 --name frontend-container $FRONTEND_IMAGE'
                }
            }
        }
    }
    post {
        always {
            // Nettoyer les images Docker inutiles après l'exécution
            sh 'docker system prune -f'
        }
    }
}
