//Jenkins file only to tutorial example
pipeline {
  agent any
    
  tools {nodejs "nodejs"}
    
  stages {
        
    stage('Cloning Git') {
      steps {
         git branch: 'main', url: 'https://github.com/Akifcan/jenkins-test'
      }
    }
        
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
    
    stage('CURL') {
      steps {
        bat 'curl --version'
      }
    }
    
  }
  
   post {
     success {
       echo 'Build SUCCESasasdS'
       echo 'SEND REQUEST !'
       bat 'curl -X GET https://jsonplaceholder.typicode.com/todos/1'
       bat 'npm run start'
       echo 'APP RUNS'
     }
   }
  
}
