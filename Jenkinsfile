pipeline {
    agent any

    stages {
        stage('Lint') {
            steps {
                // You can add a linter such as eslint if you install Node.js
                echo 'No linter configured for pure JS/HTML project'
            }
        }
        stage('Test') {
            steps {
                echo 'You can run tests using a headless browser or JS test framework'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Copy files to your web server or deploy to GitHub Pages'
            }
        }

        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('sonarqube-local') {
                    bat 'sonar-scanner'
                }
            }
        }

    }
}