pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/Meghana-K06/Quiz_app_devops.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t quiz-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                  docker rm -f quiz-container || true
                  docker run -d --name quiz-container -p 8081:80 quiz-app
                '''
            }
        }
    }
}
