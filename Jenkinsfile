pipeline {
    agent any

    stages {
        stage('Lint') {
            steps {
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
                    script {
                        def scannerHome = tool 'sonar-scanner'
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
    }
}