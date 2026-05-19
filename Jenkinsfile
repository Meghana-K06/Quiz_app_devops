pipeline {
agent any

stages {

    stage('Build Docker Image') {
        steps {
            sh 'docker build -t quizapp .'
        }
    }

    stage('Run Container') {
        steps {
            sh 'docker rm -f quizapp-container || true'
            sh 'docker run -d -p 8081:80 --name quizapp-container quizapp'
        }
    }

}

}
