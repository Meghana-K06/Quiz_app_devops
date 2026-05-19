pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t quiz-app:latest .'
            }
        }

        stage('Remove Old Container') {
            steps {
                sh 'docker rm -f quiz-container || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d --name quiz-container -p 8081:80 quiz-app:latest'
            }
        }
    }
}
